import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private httpService: HttpClient
  ) { }

  getAlbumInfoById(id: number): Observable<any> {
    return this.httpService.get('/api/album/' + id.toString())
  }

  getSongsByAlbumId(id: number): Observable<any> {
    return this.httpService.get('/api/album/' + id.toString() + '/tracks')
  }
}
