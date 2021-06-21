import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/services/commons.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-album-page-tracklist',
  templateUrl: './album-page-tracklist.component.html',
  styleUrls: ['./album-page-tracklist.component.scss']
})
export class AlbumPageTracklistComponent implements OnInit {

  @Input() public inputTracks = []

  constructor(
    private stateService: StateService,
    private router: Router,
    public commons: CommonsService
  ) { }

  ngOnInit(): void {
  }

  sendToArtistPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(['/artist'])
  }

  setPlayerData(id: number, type: string) {
    this.commons.startPlayback(id.toString(), type);
  }

}
