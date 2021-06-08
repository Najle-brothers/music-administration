import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {

  id = ""

  public selectedArtist = {
    id: 0,
    name: '',
    fans: '',
    picture: ''
  }
  public topFive = []

  public albums = []

  public playlists = []

  public playlistsId = {
    id: 0
  }

  public playlistDuration = ''

  constructor(
    private artistService: ArtistService,
    private stateService: StateService,
    private playlistService: PlaylistsService
    ) { }

  ngOnInit(): void {
    this.stateService.getId().subscribe((idResponse) => {
      this.id = idResponse
      this.getArtistInfoById(idResponse)
      this.getTopFiveListById(idResponse)
      this.getArtistAlbumsById(idResponse)
      this.getArtistPlaylistsById(idResponse)
      this.getPlaylistDurationByPlaylistId(idResponse)
    })
  }

  getArtistInfoById(id): void {
    this.artistService.getArtistDatabyId(id).subscribe((response) => {
      this.selectedArtist = {
        id: response.id,
        name: response.name,
        fans: this.fansWithCommas(response.nb_fan),
        picture: response.picture_xl,
      }
    })
  }

  getTopFiveListById(id): void {
    this.artistService.getArtist5TopListById(id).subscribe((response) => {
      this.topFive = response.data.map((tracks) => {
        return {
        id: tracks.id,
        title: tracks.title,
        duration: this.secondsToFullDuration(tracks.duration, false, this.twoDigits),
        album: tracks.album.title,
        albumId: tracks.album.id,
        picture: tracks.album.cover_small
        }
      })
    })
  }

  getArtistAlbumsById(id): void {
    this.artistService.getAlbumsByArtistId(id).subscribe((response) => {
      this.albums = response.data.map((album) => {
        return {
          id: album.id,
          title: album.title,
          picture: album.cover_medium,
          year: this.getYearFromDate(album.release_date)
        }
      })
    })
  }

  getArtistPlaylistsById(id): void {
    this.artistService.getPlaylistsByArtistId(id).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          id: playlist.id,
          title: playlist.title,
          picture: playlist.picture_medium,
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

  fansWithCommas(digits): string {
    var parts = digits.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return "Fans #" + parts.join(",");
  }

  getYearFromDate(date: string): string {
    return date.slice(0,4) 
  }

}
