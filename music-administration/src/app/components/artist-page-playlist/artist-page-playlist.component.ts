import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-artist-page-playlist',
  templateUrl: './artist-page-playlist.component.html',
  styleUrls: ['./artist-page-playlist.component.scss']
})
export class ArtistPagePlaylistComponent implements OnInit {

  @Input() public inputPlaylists = []

  constructor(
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
  }

  sendToPlaylistPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(['/playlist'])
  }

}
