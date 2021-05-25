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

  getArtistIdByName(artistName: string): Observable<any> {
    return this.httpService.get('/api/search/artist?q=' + artistName)
  }

  getArtistDatabyName(name: string): Observable<any> {
    return this.httpService.get('/api/artist/' + name);
  }

  getArtistDataById(id: number): Observable<any> {
    return this.httpService.get('/api/artist/' + id.toString());
  }

  getAlbumsByArtistId(id: number): Observable<any> {
    return this.httpService.get('/api/artist/' + id.toString() + '/albums');
  }

  getTopFiveByArtistId(id: number): Observable<any> {
    return this.httpService.get('/api/artist/' + id.toString() + '/top');
  }

  getRelatedArtistsByArtistId(id: number): Observable<any> {
    return this.httpService.get('/api/artist/' + id.toString() + '/related');
  }

  getPlaylistsByArtistId(id: number): Observable<any> {
    return this.httpService.get('/api/artist/' + id.toString() + '/playlists');
  }
}
