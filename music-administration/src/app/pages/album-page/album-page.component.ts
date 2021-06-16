import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { CommonsService } from 'src/app/services/commons.service';
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
    private stateService: StateService,
    private albumService: AlbumService,
    private commonsService: CommonsService
  ) { }

  ngOnInit(): void {
    this.stateService.getId().subscribe((idResponse) => {
      this.id = idResponse
      this.getAlbumInfoById(idResponse)
      this.getAlbumTrackListById(idResponse)
    })
  }

  getAlbumInfoById(id): void {
    console.log(id)
    this.albumService.getAlbumInfoById(id).subscribe((response) => {
      console.log(response)
      this.selectedAlbum = {
        id: response.id,
        title: response.title,
        picture: response.cover_xl,
        duration: this.commonsService.secondsToFullDuration(response.duration, true, this.commonsService.twoDigits),
        fans: this.commonsService.fansWithCommas(response.fans),
        artist: response.artist.name,
        artistId: response.artist.id
      }
    })
  }

  getAlbumTrackListById(id): void {
    console.log(id)
    this.albumService.getTracksByAlbumId(id).subscribe((response) => {
      console.log(response)
      this.tracks = response.data.map((track) => {
        return {
          id: track.id,
          title: track.title,
          duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
          position: track.track_position,
          artist: track.artist.name,
          artistId: track.artist.id
        }
      })
    })
  }

}