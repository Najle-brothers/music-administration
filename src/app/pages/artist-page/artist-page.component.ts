import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IArtist, makeArtist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';
import { CommonsService } from 'src/app/services/commons.service';
import { PlaylistsService } from 'src/app/services/playlists.service';

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

  id = ""

  public selectedArtist: IArtist = makeArtist();

  public tracklist = [];
  public albums = [];
  public playlists = [];

  public playlistsId = {
    id: 0
  }
  public artistId = {
    id: 0
  }
  

  constructor(
    private artistService: ArtistService,
    private playlistService: PlaylistsService,
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
        this.getPlaylistDurationByPlaylistId(this.id);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArtistInfoById(id): void {
    this.isHeaderLoading = true;
    this.subscription.add(
      this.artistService.getArtistDatabyId(id).subscribe((response) => {
        this.selectedArtist = {
          id: response.id,
          name: response.name,
          fans: this.commonsService.fansWithCommas(response.nb_fan),
          picture: response.picture_xl,
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
      this.artistService.getArtist5TopListById(id).subscribe((response) => {
        this.tracklist = response.data.map((tracks) => {
          return {
          id: tracks.id,
          title: tracks.title,
          duration: this.commonsService.secondsToFullDuration(tracks.duration, false, this.commonsService.twoDigits),
          album: tracks.album.title,
          albumId: tracks.album.id,
          picture: tracks.album.cover_small,
          type: tracks.type
          }
        })
        this.isTrackLoading = false
      })
    )
  }

  getArtistAlbumsById(id): void {
    this.isAlbumLoading = true
    this.subscription.add(
      this.artistService.getAlbumsByArtistId(id).subscribe((response) => {
        this.albums = response.data.map((album) => {
          return {
            id: album.id,
            title: album.title,
            picture: album.cover_medium,
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
          }
        })
        this.isPlaylistLoading = false;
        this.playlistsId = {
          id: response.id
        }
      })
    )
  }

  getPlaylistDurationByPlaylistId(playlistId): void {
    this.subscription.add(
      this.playlistService.getPlaylistInfoByPlaylistId(playlistId).subscribe((response) => {
        this.playlists = response.data.map((playlist) => {
          return {
            duration: this.commonsService.secondsToFullDuration(playlist.duration, true, this.commonsService.twoDigits)
          }
        })
      })
    )
  }

  get cutTracks(){
    return this.tracklist.slice(0,4)
  }

  get cutAlbums() {
    return this.albums.slice(0, 7)
  }

  get cutPlaylists(){
    return this.playlists.slice(0,7)
  }

  
}
