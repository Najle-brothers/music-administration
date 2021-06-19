import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
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

  public isArtistLoading: boolean = false;
  public isAlbumLoading: boolean = false;
  public isPlaylistLoading: boolean = false;
  public isTrackLoading: boolean = false;

  public tracks = []

  constructor(
    private stateService: StateService,
    private searchService: SearchService,
    private playlistService: PlaylistsService,
    private commonsService: CommonsService
  ) { }

  ngOnInit(): void {
    this.stateService.getSearch().subscribe((searchResponse) => {
      this.search = searchResponse
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
    this.isAlbumLoading = true;
    this.searchService.getAlbumsByName(search).subscribe((response) => {
      this.albums = response.data.map((album) => {
        return {
        id: album.id,
        title: album.title,
        artist: album.artist.name,
        picture: album.cover_medium
        }
      })
      this.isAlbumLoading = false;
    })
    //this.searchService.getAlbumInfoById() PREGUNTAR A LUCAS SI SE PUEDE USAR EL ID DE ACÁ - el servicio no esta hecho.
  }

  getArtistsListByName(search: string): void {
    this.isArtistLoading = true;
    this.searchService.getArtistByName(search).subscribe((response) => {
      this.artists = response.data.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          picture: artist.picture_medium,
          fans: this.commonsService.fansWithCommas(artist.nb_fan)
        }
      })
      this.isArtistLoading = false;
    })
  }

  getPlaylistsListByName(search: string): void {
    this.isPlaylistLoading = true;
    this.searchService.getPlaylistsByName(search).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          id: playlist.id,
          title: playlist.title,
          picture: playlist.picture_medium,
          user: playlist.user.name
        }
      })
      this.playlistsId = {
        id: response.id
      }
      this.isPlaylistLoading = false;
    })
  }

  getPlaylistDurationByPlaylistId(playlistId): void {
    this.playlistService.getPlaylistInfoByPlaylistId(playlistId).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          duration: this.commonsService.secondsToFullDuration(playlist.duration, true, this.commonsService.twoDigits)
        }
      })
    })
  }

  getTracksListByName(search: string): void {
    this.isTrackLoading = true;
    this.searchService.getTracksByName(search).subscribe((response) => {
      this.tracks = response.data.map((track) => {
        return {
          id: track.id,
          title: track.title,
          duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
          artist: track.artist.name,
          artistId: track.artist.id,
          album: track.album.title,
          albumId: track.album.id,
          albumPic: track.album.cover_small,
          type: track.type
        }
      })
    })
    this.isTrackLoading = false;
  }

}
