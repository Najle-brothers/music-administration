import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-artist-page-tracklist',
  templateUrl: './artist-page-tracklist.component.html',
  styleUrls: ['./artist-page-tracklist.component.scss']
})
export class ArtistPageTracklistComponent implements OnInit {

  @Input() public inputTopFive = []

  constructor(
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendToAlbum(id: number) {
    this.stateService.setId(id)
    this.router.navigate(['/album'])
  }

}
