import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {

  constructor(
    private httpService: HttpClient
  ) { }

  getPlaylistByArtistId(id: number): Observable <any> {
    return this.httpService.get('/api/artist/' + id.toString() + '/playlists')
  }

  getInfoPlaylistById(id: number): Observable <any> {
    return this.httpService.get('/api/playlist/' + id.toString())
  }

  getTracksByPlaylistId(id: number): Observable <any> {
    return this.httpService.get('/api/playlist/' + id.toString() + '/tracks')
  }

}
