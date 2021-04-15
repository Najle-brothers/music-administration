import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent implements OnInit {
  public genre = {
    id: 0,
    name: ''
  }

  public genres = []
  public artists = []
  public selectedGenre = {
    id: 0,
    title: '',
    picture: ''
  }
  public isGenreShown : boolean = false

  constructor(
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe((response) => {
      this.genre = {
        id: response.id,
        name: response.name
      }
    

      this.genreService.getAllGenres().subscribe((response) => {
        this.genres =  response.data.map((genre) => {
          return {
            id: genre.id,
            title: genre.name,
            picture: genre.picture_medium
          }
        })
      });
    });
  }

  handleClick(genre: any): void {
    this.isGenreShown = true;
    this.selectedGenre = genre
    this.genreService.getArtistsGenreById(genre.id).subscribe((response) => {
      this.artists = response.data.map((artist) => {
        return {
          title: artist.name,
          picture: artist.picture_medium
        }
      })
    })
  }

  handleClickBack(): void {
    this.isGenreShown = false
  }

}
