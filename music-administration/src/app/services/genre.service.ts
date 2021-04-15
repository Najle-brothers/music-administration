import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  constructor(
    private httpService: HttpClient
  ) { }

  getAllGenres(): Observable <any> {
    return this.httpService.get('/api/genre')
  }

  getInfoGenreById(id: number): Observable <any> {
    return this.httpService.get('/api/genre/' + id.toString())
  }

  getArtistsGenreById(id: number): Observable <any> {
    return this.httpService.get('/api/genre/' + id.toString() + '/artists')
  }

}
