import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IArtists } from 'src/app/models/artists';
import { CommonsService } from 'src/app/services/commons.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-artists-page',
  templateUrl: './search-artists-page.component.html',
  styleUrls: ['./search-artists-page.component.scss']
})
export class SearchArtistsPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isArtistLoading: boolean = false;

  public search: string = "";
  public artists: IArtists[] = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private commonsService: CommonsService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.search = params.search;
        this.getArtistsListByName(this.search);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArtistsListByName(search): void {
    this.isArtistLoading = true;
    this.subscription.add(
      this.searchService.getArtistByName(search).subscribe((response: any) => {
        this.artists = response.data.map((artist) => {
          return {
            id: artist.id,
            artist: artist.name,
            picture: artist.picture_medium,
            small_picture: artist.picture_small,
            fans: this.commonsService.fansWithCommas(artist.nb_fan),
          }
        })
        this.isArtistLoading = false;
      })
    )
  }

}
