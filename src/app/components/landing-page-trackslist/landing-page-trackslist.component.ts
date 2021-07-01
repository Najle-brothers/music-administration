import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/services/commons.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-landing-page-trackslist',
  templateUrl: './landing-page-trackslist.component.html',
  styleUrls: ['./landing-page-trackslist.component.scss']
})
export class LandingPageTrackslistComponent implements OnInit {

  @Input() public inputTrack = []

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
    this.router.navigate(["/artist", id])
  }

  setPlayerData(id: number, type: string) {
    this.commons.startPlayback(id.toString(), type);
  }

}
