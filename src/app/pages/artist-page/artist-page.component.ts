import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAlbums } from 'src/app/models/albums';
import { IArtist, makeArtist } from 'src/app/models/artist';
import { IPlaylists } from 'src/app/models/playlists';
import { ITracks } from 'src/app/models/tracks';
import { IUser } from 'src/app/models/user';
import { ArtistService } from 'src/app/services/artist.service';
import { CommonsService } from 'src/app/services/commons.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isHeaderLoading: boolean = false;
  public isTrackLoading: boolean = false;
  public isAlbumLoading: boolean = false;
  public isPlaylistLoading: boolean = false;
  public isUserLoading: boolean = false;

  public id: string = ""

  public selectedArtist: IArtist = makeArtist();

  public allTracks: ITracks[] = [];
  public tracks: ITracks[] = [];
  public albums: IAlbums[] = [];
  public playlists: IPlaylists[] = [];
  public explicitContent: boolean = false;

  public playlistsId = {
    id: 0
  }
  public artistId = {
    id: 0
  }
  
  constructor(
    private artistService: ArtistService,
    private userService: UserService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.id = params.id;
        this.getArtistInfoById(this.id);
        this.getTracklistListById(this.id);
        this.getArtistAlbumsById(this.id);
        this.getArtistPlaylistsById(this.id);
        /*this.getPlaylistDurationByPlaylistId(this.id);*/
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArtistInfoById(id): void {
    this.isHeaderLoading = true;
    this.subscription.add(
      this.artistService.getArtistDatabyId(id).subscribe((response: any) => {
        this.selectedArtist = {
          id: response.id,
          name: response.name,
          fans: this.commonsService.fansWithCommas(response.nb_fan),
          picture: response.picture_xl,
          medium_picture: response.picture_medium,
        }
        this.isHeaderLoading = false;
        this.artistId = {
          id: response.id
        }
      })
    )
  }

  getTracklistListById(id): void {
    this.isTrackLoading = true;
    this.subscription.add(
      this.artistService.getArtist5TopListById(id).subscribe((response: any) => {
        this.allTracks = response.data.map((tracks) => {
          return {
          id: tracks.id,
          title: tracks.title,
          duration: this.commonsService.secondsToFullDuration(tracks.duration, false, this.commonsService.twoDigits),
          album: tracks.album.title,
          albumId: tracks.album.id,
          picture: tracks.album.cover_small,
          type: tracks.type,
          explicit: tracks.explicit_lyrics,
          }
        })
        this.isUserLoading = true;
        this.userService.getUserData().subscribe((response: IUser) => {
          this.explicitContent = this.explicitContent;
          this.tracks = this.commonsService.explicitLyrics(this.explicitContent, this.allTracks);
          this.isUserLoading = false;
        })
        this.isTrackLoading = false;
      })
    )
  }

  getArtistAlbumsById(id): void {
    this.isAlbumLoading = true
    this.subscription.add(
      this.artistService.getAlbumsByArtistId(id).subscribe((response: any) => {
        this.albums = response.data.map((album) => {
          return {
            id: album.id,
            title: album.title,
            picture: album.cover_medium,
            small_picture: album.cover_small,
            year: this.commonsService.getYearFromDate(album.release_date)
          }
        })
        this.isAlbumLoading = false
      })
    )
  }

  getArtistPlaylistsById(id): void {
    this.isPlaylistLoading = true;
    this.subscription.add(
      this.artistService.getPlaylistsByArtistId(id).subscribe((response) => {
        this.playlists = response.data.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            picture: playlist.picture_medium,
            small_picture: playlist.picture_small,
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

  get cutTracks(): ITracks[] {
    return this.tracks.slice(0,4)
  }

  get cutAlbums(): IAlbums[] {
    return this.albums.slice(0, 7)
  }

  get cutPlaylists(): IPlaylists[] {
    return this.playlists.slice(0,7)
  }
}
