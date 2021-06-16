import { Component, Input, OnInit } from '@angular/core';
import { IAlbum, makeAlbum } from 'src/app/models/album';

@Component({
  selector: 'app-album-page-header',
  templateUrl: './album-page-header.component.html',
  styleUrls: ['./album-page-header.component.scss']
})
export class AlbumPageHeaderComponent implements OnInit {
  
  @Input() public inputAlbumHeader: IAlbum = makeAlbum()

  constructor() { }

  ngOnInit(): void {
  }

}
