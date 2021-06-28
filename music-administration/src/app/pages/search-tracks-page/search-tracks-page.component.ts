import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonsService } from 'src/app/services/commons.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-tracks-page',
  templateUrl: './search-tracks-page.component.html',
  styleUrls: ['./search-tracks-page.component.scss']
})
export class SearchTracksPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isTrackLoading: boolean = false;

  public search = "";
  public tracks = [];

  constructor(
    private searchService: SearchService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.search = params.search;
        this.getTracksListByName(this.search);
      })
    )
  }

  getTracksListByName(search: string): void {
    this.isTrackLoading = true;
    this.subscription.add(
      this.searchService.getTracksByName(search).subscribe((response) => {
        this.tracks = response.data.map((track) => {
          return {
            id: track.id,
            title: track.title,
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            artist: track.artist.name,
            artistId: track.artist.id,
            album: track.album.title,
            albumId: track.album.id,
            albumPic: track.album.cover_small,
            type: track.type
          }
        })
        this.isTrackLoading = false;
      })
    )
  }

}
