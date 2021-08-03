import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser, makeUser } from 'src/app/models/user';
import { CommonsService } from 'src/app/services/commons.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription;

  public isHeaderLoading: boolean = false;
  public isTracksLoading: boolean = false;
  public isArtistLoading: boolean = false;
  public isAlbumLoading: boolean = false;
  public isPlaylistLoading: boolean = false;
  public isUserLoading: boolean = false;

  public user: IUser = makeUser();
  public artists = [];
  public tracks = [];
  public allTracks = [];
  public albums = [];
  public allAlbums = [];
  public playlists = [];
  public genres = [];
  public explicitContent: boolean = false;

  constructor(
    private userService: UserService,
    private commonsService: CommonsService,
  ) { }

  ngOnInit(): void {
      this.getGreetingWithUserName()
      this.getArtistById()
      this.getAlbumsById()
      this.getPlaylistsById()
      this.getTracksById()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getGreetingWithUserName(): void {
    this.isHeaderLoading = true;
    this.subscription.add(
      this.userService.getUserData().subscribe((response) => {
        this.user = {
          id: response.id,
          userName: response.name,
          name: response.name,
          lastName: response.lastname,
          explicitContent: response.explicitContent,
        }
        this.isHeaderLoading = false
      })
    )
  }

  getArtistById(): void {
    this.isArtistLoading = true;
    this.subscription.add(
      this.userService.getArtistsByUserId().subscribe((response) => {
        this.artists = response.artist.map((artist) => {
          return {
            id: artist.id,
            artist: artist.artist,
            picture: artist.picture_medium,
            small_picture: artist.picture_small,
          }
        })
        this.isArtistLoading = false
      })
    )
  }

  getAlbumsById(): void {
    this.isAlbumLoading = true;
    this.subscription.add(
      this.userService.getAlbumsByUserId().subscribe((response) => {
        this.allAlbums = response.albums.map((album) => {
          return {
            id: album.id,
            title: album.title,
            artist: album.artist,
            picture: album.picture,
            small_picture: album.small_picture,
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

  getTracksById(): void {
    this.isTracksLoading= true;
    this.subscription.add(
      this.userService.getTracksByUserId().subscribe((response) => {
        this.allTracks = response.tracks.map((track) => {
          return {
            id: track.id,
            title: track.title,
            artist: track.artist,
            artistId: track.artistId,
            album: track.album,
            albumId: track.albumId,
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            type: track.type,
            picture: track.cover_small,
            explicit: track.explicit_lyrics,
          }
        })
        this.isUserLoading = true;
        this.userService.getUserData().subscribe((response: IUser) => {
          this.explicitContent = response.explicitContent;
          this.tracks = this.commonsService.explicitLyrics(this.explicitContent, this.allTracks);
          this.isUserLoading = false;
        })
        this.isTracksLoading = false;
      })
    )
  }

  getPlaylistsById(): void {
    this.isPlaylistLoading = true;
    this.subscription.add(
      this.userService.getPlaylistsByUserId().subscribe((response) => {
        this.playlists = response.playlists.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            duration: this.commonsService.secondsToFullDuration(playlist.duration, true, this.commonsService.twoDigits),
            picture: playlist.picture,
            small_picture: playlist.picture_small,
            type: playlist.type
          }
        })
        this.isPlaylistLoading = false;
      })
    )
  }
  
  get cutTracks(){
    return this.tracks.slice(0,4)
  }

  get cutArtists(){
    return this.artists.slice(0,7)
  }

  get cutAlbums() {
    return this.albums.slice(0, 7)
  }

  get cutPlaylists(){
    return this.playlists.slice(0,7)
  }

}
