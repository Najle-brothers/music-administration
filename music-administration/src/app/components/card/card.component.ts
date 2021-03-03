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
  public albums = [
    {
      artist: 'Artista 01',
      title: 'Titulo 01',
      picture: '../../../assets/img/headphones.png'
    },
    {
      artist: 'Artista 02',
      title: 'Titulo 02',
      picture: '../../../assets/img/headphones.png'
    },
    {
      artist: 'Artista 03',
      title: 'Titulo 03',
      picture: '../../../assets/img/headphones.png'
    },
    {
      artist: 'Artista 04',
      title: 'Titulo 04',
      picture: '../../../assets/img/headphones.png'
    },
    {
      artist: 'Artista 05',
      title: 'Titulo 05',
      picture: '../../../assets/img/headphones.png'
    }
  ]

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit(): void {
    this.artistService.getArtistDatabyName('conxuro').subscribe((response) => {
      this.artist = {
        name: response.name,
        id: response.id
      }
      console.log(this.artist);
    });
  }
}
