import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-artist-playlists',
  templateUrl: './all-artist-playlists.component.html',
  styleUrls: ['./all-artist-playlists.component.scss']
})
export class AllArtistPlaylistsComponent implements OnInit {

  @Input() public inputPlaylists = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  sendToPlaylistPage(id: number){
    this.router.navigate(['/playlist', id])
  }
}
