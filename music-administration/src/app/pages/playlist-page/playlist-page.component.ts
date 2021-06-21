import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlaylist, makePlaylist } from 'src/app/models/playlist';
import { CommonsService } from 'src/app/services/commons.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isHeaderLoading: boolean = false;
  public isTrackLoading: boolean = false;

  playlistId = ""

  public playlistInfo: IPlaylist = makePlaylist();

  public tracks = []

  constructor(
    private stateService: StateService,
    private playlistsService: PlaylistsService,
    private commonsService: CommonsService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.stateService.getId().subscribe((idResponse) => {
        this.playlistId = idResponse
        this.getPlaylistInfoById(idResponse)
        this.getPlaylistTracksById(idResponse)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPlaylistInfoById(id): void {
    this.isHeaderLoading = true;
    this.subscription.add(
      this.playlistsService.getPlaylistInfoByPlaylistId(this.playlistId).subscribe((response) => {
        this.playlistInfo = {
          id: response.id,
          picture: response.picture_xl,
          title: response.title,
          description: response.description,
          fans: this.commonsService.fansWithCommas(response.fans),
          duration: this.commonsService.secondsToFullDuration(response.duration, true, this.commonsService.twoDigits),
          type: response.type
        }
        this.isHeaderLoading = false;
      })
    )
  }

  getPlaylistTracksById(id): void {
    this.isTrackLoading = true; 
    this.subscription.add(
      this.playlistsService.getPlaylistTracksByPlaylistId(this.playlistId).subscribe((response) => {
        this.tracks = response.data.map((track) => {
          return {
            id: track.id,
            title: track.title,
            artist: track.artist.name,
            artistId: track.artist.id,
            album: track.album.title,
            albumId: track.album.id, 
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            picture: track.album.cover_small,
            type: track.type
          }
        })
        this.isTrackLoading = false;
      })
    )
  }

}