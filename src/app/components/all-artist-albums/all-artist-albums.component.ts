import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-artist-albums',
  templateUrl: './all-artist-albums.component.html',
  styleUrls: ['./all-artist-albums.component.scss']
})
export class AllArtistAlbumsComponent implements OnInit {

  @Input() public inputAlbums = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  sendToAlbum(id: number){
    this.router.navigate(['/album', id])
  }

}
