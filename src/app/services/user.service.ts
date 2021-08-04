import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import userData from '../json/user.json';
import albumsData from '../json/albums.json';
import artistData from '../json/artists.json';
import playlistData from '../json/playlist.json';
import tracksData from '../json/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserData(): Observable<any> {
    return of(userData).pipe(
      delay(500)
    );
}

  getTracksByUserId(): Observable<any> {
    return of(tracksData);
  }

  getArtistsByUserId(): Observable<any> {
    return of(artistData);
  }

  getAlbumsByUserId(): Observable<any> {
    return of(albumsData);
  }

  getPlaylistsByUserId(): Observable<any> {
    return of(playlistData);
  }

  getGenresByUserId(): Observable<any> {
    return of();
  }
}

