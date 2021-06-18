import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, makeAlbum } from 'src/app/models/album';
import { CommonsService } from 'src/app/services/commons.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-album-page-header',
  templateUrl: './album-page-header.component.html',
  styleUrls: ['./album-page-header.component.scss']
})
export class AlbumPageHeaderComponent implements OnInit {
  
  @Input() public inputAlbumHeader: IAlbum = makeAlbum()

  constructor(
    private stateService: StateService,
    public commons: CommonsService
  ) { }

  ngOnInit(): void {
  }
}
