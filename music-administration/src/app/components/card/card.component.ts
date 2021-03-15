import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public artist = {
    name: '',
    id: 0
  };
  public albums = []

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit(): void {
    this.artistService.getArtistDatabyName('daft-punk').subscribe((response) => {
      this.artist = {
        name: response.name,
        id: response.id
      }

      this.artistService.getArtistAlbums(this.artist.id).subscribe((response) => {
        this.albums = response.data.map((element) => {
          return {
            artist: this.artist.name,
            title: element.title,
            picture: element.cover_medium
          }
        })
      });
    });
  }
}
