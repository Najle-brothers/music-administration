import { Component, Input, OnInit } from '@angular/core';
import { IPlaylist, makePlaylist } from 'src/app/models/playlist';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-playlist-page-header',
  templateUrl: './playlist-page-header.component.html',
  styleUrls: ['./playlist-page-header.component.scss']
})
export class PlaylistPageHeaderComponent implements OnInit {

  @Input() public inputHeader: IPlaylist = makePlaylist()

  constructor(
    public commons: CommonsService,
  ) { }

  ngOnInit(): void {
  }

  setPlayerData(id: number, type: string) {
    this.commons.startPlayback(id.toString(), type);
  }
  
}
