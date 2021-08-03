import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAlbums } from 'src/app/models/albums';
import { IArtist } from 'src/app/models/artist';
import { IPlaylists } from 'src/app/models/playlists';
import { ITracks } from 'src/app/models/tracks';
import { IUser } from 'src/app/models/user';
import { CommonsService } from 'src/app/services/commons.service';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription;

  public search: string = ""

  public artist = {
    id: 0,
    name: '',
    picture: ''
  }

  public artists: IArtist[] = [];
  public albums = [];
  public allAlbums: IAlbums[]= [];
  public playlists: IPlaylists[] = [];
  public tracks: ITracks[] = [];
  public allTracks: ITracks[] = [];
  public explicitContent: boolean = false;

  public playlistsId = {
    id: 0
  }

  public isArtistLoading: boolean = false;
  public isAlbumLoading: boolean = false;
  public isPlaylistLoading: boolean = false;
  public isTrackLoading: boolean = false;
  public isUserLoading: boolean = false;

  constructor(
    private searchService: SearchService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.search = params.search
        //this.getArtistAlbum(searchResponse)
        this.getArtistsListByName(this.search)
        this.getAlbumsListByName(this.search)
        this.getPlaylistsListByName(this.search)
        this.getTracksListByName(this.search)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArtistInfoByName(search: string): void {
    this.subscription.add(
      this.searchService.getArtistByName(search).subscribe((response: any) => {
        this.artist = {
          id: response.id,
          name: response.name,
          picture: response.picture_medium
        }
      })
    )
  }

  getAlbumsListByName(search: string): void {
    this.isAlbumLoading = true;
    this.subscription.add(
      this.searchService.getAlbumsByName(search).subscribe((response: any) => {
        this.allAlbums = response.data.map((album) => {
          return {
          id: album.id,
          title: album.title,
          artist: album.artist.name,
          picture: album.cover_medium,
          small_picture: album.cover_small,
          explicitContent: album.explicit_lyrics,
          }
        })
        this.isUserLoading = true;
        this.userService.getUserData().subscribe((response: IUser) => {
          this.explicitContent = response.explicitContent;
          this.albums = this.commonsService.explicitLyrics(this.explicitContent, this.allAlbums);
          this.isUserLoading = false;
        })
        this.isAlbumLoading = false;
      })
    )
  }

  getArtistsListByName(search: string): void {
    this.isArtistLoading = true;
    this.subscription.add(
      this.searchService.getArtistByName(search).subscribe((response: any) => {
        this.artists = response.data.map((artist) => {
          return {
            id: artist.id,
            name: artist.name,
            picture: artist.picture_medium,
            small_picture: artist.picture_small,
            fans: this.commonsService.fansWithCommas(artist.nb_fan)
          }
        })
        this.isArtistLoading = false;
      })
    )
  }

  getPlaylistsListByName(search: string): void {
    this.isPlaylistLoading = true;
    this.subscription.add(
      this.searchService.getPlaylistsByName(search).subscribe((response: any) => {
        this.playlists = response.data.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            picture: playlist.picture_medium,
            small_picture: playlist.picture_small,
            user: playlist.user.name
          }
        })
        this.playlistsId = {
          id: response.id
        }
        this.isPlaylistLoading = false;
      })
    )
  }

  /*getPlaylistDurationByPlaylistId(playlistId): void {
    this.subscription.add(
      this.playlistService.getPlaylistInfoByPlaylistId(playlistId).subscribe((response) => {
        this.playlists = response.data.map((playlist) => {
          return {
            duration: this.commonsService.secondsToFullDuration(playlist.duration, true, this.commonsService.twoDigits)
          }
        })
      })
    )
  }*/

  getTracksListByName(search: string): void {
    this.isTrackLoading = true;
    this.subscription.add(
      this.searchService.getTracksByName(search).subscribe((response: any) => {
        this.allTracks = response.data.map((track) => {
          return {
            id: track.id,
            title: track.title,
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            artist: track.artist.name,
            artistId: track.artist.id,
            album: track.album.title,
            albumId: track.album.id,
            albumPic: track.album.cover_small,
            type: track.type,
            explicit: track.explicit_lyrics,
          }
        })        
        this.isUserLoading = true;
        this.userService.getUserData().subscribe((response) => {
          this.explicitContent = response.explicitContent;
          this.tracks = this.commonsService.explicitLyrics(this.explicitContent, this.allTracks)
          this.isUserLoading = false;
        })
        this.isTrackLoading = false;
      })
    )
  }

  get cutTracks (): ITracks[] {
    return this.tracks.slice(0,4)
  }

  get cutArtists(): IArtist[] {
    return this.artists.slice(0,7)
  }

  get cutAlbums():IAlbums[] {
    return this.albums.slice(0,7)
  }

  get cutPlaylists(): IPlaylists[] {
    return this.playlists.slice(0,7)
  }

}
