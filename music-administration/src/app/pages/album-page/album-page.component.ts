import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAlbum, makeAlbum } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription;

  public isHeaderLoading: boolean = false;
  public isTracksLoading: boolean = false;

  id = ""

  public selectedAlbum: IAlbum = makeAlbum();

  public tracks = []

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private commonsService: CommonsService
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

  getAlbumInfoById(id): void {
    this.isHeaderLoading = true;
    this.subscription.add(
      this.albumService.getAlbumInfoById(id).subscribe((response) => {
        this.selectedAlbum = {
          id: response.id,
          title: response.title,
          picture: response.cover_xl,
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

  getAlbumTrackListById(id): void {
    this.isTracksLoading = true
    this.subscription.add(
      this.albumService.getTracksByAlbumId(id).subscribe((response) => {
        this.tracks = response.data.map((track) => {
          return {
            id: track.id,
            title: track.title,
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            position: track.track_position,
            artist: track.artist.name,
            artistId: track.artist.id,
            type: track.type
          }
        })
        this.isTracksLoading = false;
      })
    );
  }

}