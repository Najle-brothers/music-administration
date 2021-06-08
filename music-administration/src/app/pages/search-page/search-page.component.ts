import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { SearchService } from 'src/app/services/search.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  search = ""

  public artist = {
    id: 0,
    name: '',
    picture: ''
  }

  public artists = []

  public albums = []

  public playlists = []

  public playlistsId = {
    id: 0
  }

  public tracks = []

  constructor(
    private stateService: StateService,
    private searchService: SearchService,
    private playlistService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.stateService.getSearch().subscribe((searchResponse) => {
      this.search = searchResponse
      console.log(searchResponse)
      //this.getArtistAlbum(searchResponse)
      this.getArtistsListByName(searchResponse)
      this.getAlbumsListByName(searchResponse)
      this.getPlaylistsListByName(searchResponse)
      this.getPlaylistDurationByPlaylistId(searchResponse)
      this.getTracksListByName(searchResponse)
    })
  }

  getArtistInfoByName(search: string): void {
    this.searchService.getArtistByName(search).subscribe((response) => {
      this.artist = {
        id: response.id,
        name: response.name,
        picture: response.picture_medium
      }
    })
  }

  getAlbumsListByName(search: string): void {
    this.searchService.getAlbumsByName(search).subscribe((response) => {
      this.albums = response.data.map((album) => {
        return {
        id: album.id,
        title: album.title,
        picture: album.cover_medium,
        releaseYear: this.getYearFromDate(album.release_date)
        }
      })
    })
    //this.searchService.getAlbumInfoById() PREGUNTAR A LUCAS SI SE PUEDE USAR EL ID DE ACÁ - el servicio no esta hecho.
  }

  getArtistsListByName(search: string): void {
    this.searchService.getArtistByName(search).subscribe((response) => {
      this.artists = response.data.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          picture: artist.picture_medium,
          fans: artist.nb_fan
        }
      })
    })
  }

  getPlaylistsListByName(search: string): void {
    this.searchService.getPlaylistsByName(search).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          id: playlist.id,
          title: playlist.title,
          picture: playlist.picture_medium
        }
      })
      this.playlistsId = {
        id: response.id
      }
    })
  }

  getPlaylistDurationByPlaylistId(playlistId): void {
    this.playlistService.getPlaylistInfoByPlaylistId(playlistId).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          duration: this.secondsToFullDuration(playlist.duration, true, this.twoDigits)
        }
      })
    })
  }

  getTracksListByName(search: string): void {
    this.searchService.getTracksByName(search).subscribe((response) => {
      this.tracks = response.data.map((track) => {
        return {
          id: track.id,
          title: track.title,
          duration: this.secondsToFullDuration(track.duration, true, this.twoDigits),
          artist: track.artist.name, //hacer
          artistId: track.artist.id, //hacer
          album: track.album.title,
          albumId: track.album.id, //hacer
          albumPic: track.album.cover_small
        }
      })
    })
  }

  twoDigits(digit): string {
    let isItADigit = digit <  10
    if (isItADigit) {
      return "0" + digit
    } else {
      return digit
    }
  }

  secondsToFullDuration(seconds: number, isItAnHour: boolean, twoDigits): string {
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    if (isItAnHour) {
      return hours + "hs " + this.twoDigits(minutes - hours * 60) + "mins" 
      //+ this.twoDigits(seconds - minutes * 60)
    } else {
      return this.twoDigits(minutes) + ":" + this.twoDigits(seconds - minutes * 60)
    }
  }

  getYearFromDate(date: string): string {
    return date.slice(0,4) 
  }

 /* getArtistAlbum(search: string): void {
    this.artistService.getArtistDatabyName(search).subscribe((response) => {
      const artist = {
        name: response.name,
        id: response.id
      }
    const id = artist.id ? artist.id : ""
      this.artistService.getAlbumsByArtistId(id).subscribe((response) => {
        this.albums = response.data.map((album) => {
          return {
            artist: artist.name,
            title: album.title,
            picture: album.cover_medium,
            id: album.id,
            releaseDate: album.release_date
          }
        })
      });
    });
  }*/

}
