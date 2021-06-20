import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  public user = {
    userName: ''
  }

  public artists = []
  public tracks = []
  public albums = []
  public playlists = []
  public genres = []

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      // CÓDIGO ACÁ
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getGreetingWithUserName(): void {
    this.isHeaderLoading = true;
    this.subscription.add(
      this.userService.getUserData().subscribe((response) => {
        this.user = {
          userName: response.name
        }
        this.isHeaderLoading = false
      })
    )
  }

  getArtistisById(): void {
    this.isArtistLoading = true;
    this.subscription.add(
      this.userService.getArtistsByUserId().subscribe((response) => {
        this.artists = response.artist.map((artist) => {
          return {
            id: artist.id,
            artist: artist.artist,
            picture: artist.picture_medium
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
        this.albums = response.albums.map((album) => {
          return {
            id: album.id,
            title: album.title,
            artist: album.artist,
            picture: album.picture
          }
        })
        this.isAlbumLoading = false
      })
    )
  }

  getTracksById(): void {
    this.isTracksLoading= true;
    this.subscription.add(
      this.userService.getTracksByUserId().subscribe((response) => {
        this.tracks = response.tracks.map((track) => {
          return {
            id: track.id,
            title: track.title,
            artist: track.artist,
            album: track.album,
            duration: track.duration,
            type: track.type,
            picture: track.cover_small
          }
        })
        this.isTracksLoading = false;
      })
    )
  }

  getPlaylistsById(): void {
    this.isPlaylistLoading = true;
    this.subscription.add(
      this.userService.getTracksByUserId().subscribe((response) => {
        this.playlists = response.playlists.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            duration: playlist.duration,
            picture: playlist.picture,
            type: playlist.type
          }
        })
        this.isPlaylistLoading = false;
      })
    )
  }

}
