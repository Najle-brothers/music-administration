import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  id = ""

  public selectedAlbum = {}

  public tracks = []

  constructor(
    private router: Router,
    private stateService: StateService,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.stateService.getId().subscribe((idResponse) => {
      this.id = idResponse
      this.getAlbumInfoById(idResponse)
      this.getAlbumTrackListById(idResponse)
    })
  }

  getAlbumInfoById(id): void {
    this.albumService.getAlbumInfoById(id).subscribe((response) => {
      this.selectedAlbum = {
        id: response.id,
        title: response.title,
        picture: response.cover_xl,
        duration: this.secondsToFullDuration(response.duration, true),
        fans: this.fansWithCommas(response.fans),
        artist: response.artist.name,
        artistId: response.artist.id
      }
    })
  }

  getAlbumTrackListById(id): void {
    this.albumService.getTracksByAlbumId(id).subscribe((response) => {
      this.tracks = response.data.map((track) => {
        return {
          id: track.id,
          title: track.title,
          duration: this.secondsToMinutes(track.duration),
          position: track.position,
          artist: track.artist,
          artistId: track.artist.id
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

  secondsToMinutes(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    return this.twoDigits(minutes) + ":" + this.twoDigits(seconds - minutes * 60)
  }

  secondsToFullDuration(seconds: number, isItAnHour: boolean, /*twoDigits*/): string {
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