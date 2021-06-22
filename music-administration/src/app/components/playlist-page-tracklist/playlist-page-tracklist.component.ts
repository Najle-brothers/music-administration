import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/services/commons.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-playlist-page-tracklist',
  templateUrl: './playlist-page-tracklist.component.html',
  styleUrls: ['./playlist-page-tracklist.component.scss']
})
export class PlaylistPageTracklistComponent implements OnInit {

  @Input() public inputTracklist = []

  constructor(
    private stateService: StateService,
    private router: Router,
    public commons: CommonsService
  ) { }

  ngOnInit(): void {
  }

  sendToAlbumPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(["/album", id])
  }

  sendToArtistPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(["/artist"])
  }

  setPlayerData(id: number, type: string) {
    this.commons.startPlayback(id.toString(), type);
  }

}
