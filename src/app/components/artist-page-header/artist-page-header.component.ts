import { Component, Input, OnInit } from '@angular/core';
import { IArtist, makeArtist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist-page-header',
  templateUrl: './artist-page-header.component.html',
  styleUrls: ['./artist-page-header.component.scss']
})
export class ArtistPageHeaderComponent implements OnInit {

  @Input() public inputArtistInfo: IArtist = makeArtist()

  constructor() { }

  ngOnInit(): void {
  }

}
