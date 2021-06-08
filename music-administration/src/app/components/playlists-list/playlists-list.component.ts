import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.scss']
})
export class PlaylistsListComponent implements OnInit {

  @Input() public inputPlaylists = []

  constructor(
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendToPlaylistPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(["/playlist"])
  }

}
