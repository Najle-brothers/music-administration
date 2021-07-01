import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-search-playlists',
  templateUrl: './all-search-playlists.component.html',
  styleUrls: ['./all-search-playlists.component.scss']
})
export class AllSearchPlaylistsComponent implements OnInit {

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
