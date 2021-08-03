import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { CommonsService } from 'src/app/services/commons.service';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-tracks-page',
  templateUrl: './search-tracks-page.component.html',
  styleUrls: ['./search-tracks-page.component.scss']
})
export class SearchTracksPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isTrackLoading: boolean = false;
  public isUserLoading: boolean = false;

  public search = "";
  public tracks = [];
  public allTracks = [];
  public explicitContent: boolean = false;

  constructor(
    private searchService: SearchService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    private userService: UserService,
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
        this.allTracks = response.data.map((track) => {
          return {
            id: track.id,
            title: track.title,
            duration: this.commonsService.secondsToFullDuration(track.duration, false, this.commonsService.twoDigits),
            artist: track.artist.name,
            artistId: track.artist.id,
            album: track.album.title,
            albumId: track.album.id,
            albumPic: track.album.cover_small,
            type: track.type,
            explicit: track.explicit_lyrics,
          }
        })
        this.isUserLoading = true;
        this.userService.getUserData().subscribe((response: IUser) => {
          this.explicitContent = response.explicitContent;
          this.tracks = this.commonsService.explicitLyrics(this.explicitContent, this.allTracks);
          this.isUserLoading = false;
        })
        this.isTrackLoading = false;
      })
    )
  }

}
