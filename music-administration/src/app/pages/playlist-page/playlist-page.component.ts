import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {

  playlistId = ""

  public playlistInfo = {
    picture: '',
    title: '',
    description: '',
    fans: '',
    duration: ''
  }

  public tracks = []

  constructor(
    private stateService: StateService,
    private playlistsService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.stateService.getId().subscribe((idResponse) => {
      this.playlistId = idResponse
      this.getPlaylistInfoById(idResponse)
      this.getPlaylistTracksById(idResponse)
    })
  }

  getPlaylistInfoById(id): void {
    this.playlistsService.getPlaylistInfoByPlaylistId(this.playlistId).subscribe((response) => {
      this.playlistInfo = {
        picture: response.picture_xl,
        title: response.title,
        description: response.description,
        fans: this.fansWithCommas(response.fans),
        duration: this.secondsToFullDuration(response.duration, true, this.twoDigits)
      }
    })
  }

  getPlaylistTracksById(id): void {
    this.playlistsService.getPlaylistTracksByPlaylistId(this.playlistId).subscribe((response) => {
      this.tracks = response.data.map((track) => {
        return {
          id: track.id,
          title: track.title,
          artist: track.artist,
          artistId: track.artist.id, //hacer
          album: track.album,
          albumId: track.album.id, //hacer
          duration: this.secondsToFullDuration(track.duration, false, this.twoDigits),
          picture: track.picture_small
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

}