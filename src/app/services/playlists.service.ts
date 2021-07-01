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

  getPlaylistInfoByPlaylistId(id): Observable <any> {
    return this.httpService.get('/api/playlist/' + id.toString())
  }

  getPlaylistTracksByPlaylistId(id): Observable <any> {
    return this.httpService.get('/api/playlist/' + id.toString() + '/tracks')
  }
  
}