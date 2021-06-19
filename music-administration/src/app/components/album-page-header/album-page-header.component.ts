import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, makeAlbum } from 'src/app/models/album';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-album-page-header',
  templateUrl: './album-page-header.component.html',
  styleUrls: ['./album-page-header.component.scss']
})
export class AlbumPageHeaderComponent implements OnInit {
  
  @Input() public inputAlbumHeader: IAlbum = makeAlbum()

  constructor(
    private commons: CommonsService,
  ) { }

  ngOnInit(): void {
  }

  setPlayerData(id: number, type: string) {
    this.commons.startPlayback(id.toString(), type);
  }
}
