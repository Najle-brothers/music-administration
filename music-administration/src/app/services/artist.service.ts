import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  constructor(
    private httpService: HttpClient
  ) { }

  getArtistDatabyName(name: string): Observable<any> {
    return this.httpService.get('/api/artist/' + name);
  }

  getArtistDatabyId(id: number): Observable<any> {
    return this.httpService.get('/api/artist/' + id);
  }

  getArtistAlbums(id: number): Observable<any> {
    return this.httpService.get('/api/artist/' + id + '/albums');
  }
}
