import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-all-search-tracks',
  templateUrl: './all-search-tracks.component.html',
  styleUrls: ['./all-search-tracks.component.scss']
})
export class AllSearchTracksComponent implements OnInit {

  @Input() public inputTracks = [];

  constructor(
    private router: Router,
    public commons: CommonsService
  ) { }

  ngOnInit(): void {
  }
  
  sendToAlbumPage(id: number){
    this.router.navigate(["/album", id])
  }

  sendToArtistPage(id: number){
    this.router.navigate(["/artist", id])
  }
  
}
