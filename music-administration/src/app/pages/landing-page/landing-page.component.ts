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

  public user: IUser = makeUser();
  public artists = []
  public tracks = []
  public albums = []
  public playlists = []
  public genres = []

  constructor(
    private userService: UserService,
    private commonsService: CommonsService
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
          lastName: response.lastname
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
            artistId: track.artistId,
            album: track.album,
            albumId: track.albumId,
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
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
      this.userService.getPlaylistsByUserId().subscribe((response) => {
        this.playlists = response.playlists.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            duration: this.commonsService.secondsToFullDuration(playlist.duration, true, this.commonsService.twoDigits),
            picture: playlist.picture,
            type: playlist.type
          }
        })
        this.isPlaylistLoading = false;
      })
    )
  }

}
