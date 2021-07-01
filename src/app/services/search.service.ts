import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpService: HttpClient
  ) { }

  getArtistByName(name: string): Observable <any> {
    return this.httpService.get('/api/search/artist?q=' + name.toString());
  }

  getArtistsByName(name: string): Observable <any> {
    return this.httpService.get('/api/search/artist?q=' + name.toString());
  }

  //getArtistInfoById(id: number): Observable <any> {}

  getAlbumsByName(name: string): Observable <any> {
    return this.httpService.get('/api/search/album?q=' + name.toString());
  }

  getPlaylistsByName(name: string): Observable <any> {
    return this.httpService.get('/api/search/playlist?q=' + name.toString());
  }

  getTracksByName(name: string): Observable <any> {
    return this.httpService.get('/api/search/track?q=' + name.toString());
  }

}
