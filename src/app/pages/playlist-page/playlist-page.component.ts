import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPlaylist, makePlaylist } from 'src/app/models/playlist';
import { ITracks } from 'src/app/models/tracks';
import { IUser } from 'src/app/models/user';
import { CommonsService } from 'src/app/services/commons.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isHeaderLoading: boolean = false;
  public isTrackLoading: boolean = false;
  public isUserLoading: boolean = false;

  public playlistId: number = 0;

  public playlistInfo: IPlaylist = makePlaylist();

  public tracks: ITracks[] = [];
  public allTracks: ITracks[] = [];
  public explicitContent: boolean = false;

  constructor(
    private playlistsService: PlaylistsService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.playlistId = params.id;
        this.getPlaylistInfoById(this.playlistId);
        this.getPlaylistTracksById(this.playlistId);
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
          medium_picture: response.picture_medium,
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
        this.allTracks = response.data.map((track) => {
          return {
            id: track.id,
            title: track.title,
            artist: track.artist.name,
            artistId: track.artist.id,
            album: track.album.title,
            albumId: track.album.id, 
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            picture: track.album.cover_small,
            type: track.type,
            explicit: track.explicit_lyrics,
          }
        })
        this.isUserLoading = true;
        this.userService.getUserData().subscribe((response: IUser) => {
          this.explicitContent = response.explicitContent;
          this.tracks = this.commonsService.explicitLyrics(this.explicitContent, this.allTracks);
          this.isUserLoading= false;
        })
        this.isTrackLoading = false;
      })
    )
  }

}