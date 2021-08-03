import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAlbum, makeAlbum } from 'src/app/models/album';
import { ITracks } from 'src/app/models/tracks';
import { IUser } from 'src/app/models/user';
import { AlbumService } from 'src/app/services/album.service';
import { CommonsService } from 'src/app/services/commons.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription;

  public isHeaderLoading: boolean = false;
  public isTracksLoading: boolean = false;
  public isUserLoading: boolean = false;

  public id: string = ""

  public selectedAlbum: IAlbum = makeAlbum();

  public explicitContent: boolean = false;
  public allTracks: ITracks[] = [];
  public tracks: ITracks[] = [];

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private commonsService: CommonsService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.getAlbumInfoById(params.id);
        this.getAlbumTrackListById(params.id);
     })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAlbumInfoById(id: number): void {
    this.isHeaderLoading = true;
    this.subscription.add(
      this.albumService.getAlbumInfoById(id).subscribe(
        (response: any) => {
        this.selectedAlbum = {
          id: response.id,
          title: response.title,
          picture: response.cover_xl,
          medium_picture: response.cover_medium,
          duration: this.commonsService.secondsToFullDuration(response.duration, true, this.commonsService.twoDigits),
          fans: this.commonsService.fansWithCommas(response.fans),
          artist: response.artist.name,
          artistId: response.artist.id,
          type: response.type
        }
        this.isHeaderLoading = false;
      })
    );
  }

  getAlbumTrackListById(id: number): void {
    this.isTracksLoading = true;
    this.subscription.add(
      this.albumService.getTracksByAlbumId(id).subscribe(
        (response: any) => {
        this.allTracks = response.data.map((track) => {
          return {
            id: track.id,
            title: track.title,
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            position: track.track_position,
            artist: track.artist.name,
            artistId: track.artist.id,
            type: track.type,
            explicit: track.explicit_lyrics,
          }
        })
        this.isUserLoading = true;
        this.userService.getUserData().subscribe(
          (response: IUser) => {
          this.explicitContent = response.explicitContent;
          this.tracks = this.commonsService.explicitLyrics(this.explicitContent, this.allTracks); // crear un map para cambiar position por index +1
          this.isUserLoading = false;
        })
        this.isTracksLoading = false;
      })
    );
  }

}