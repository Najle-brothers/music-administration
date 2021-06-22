import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-artist-page-album',
  templateUrl: './artist-page-album.component.html',
  styleUrls: ['./artist-page-album.component.scss']
})
export class ArtistPageAlbumComponent implements OnInit {

  @Input() public inputAlbums = []

  constructor(
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendToAlbum(id: number){
    this.stateService.setId(id)
    this.router.navigate(['/album', id])
  }

}
