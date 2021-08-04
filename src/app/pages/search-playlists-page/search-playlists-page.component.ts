import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPlaylists } from 'src/app/models/playlists';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-playlists-page',
  templateUrl: './search-playlists-page.component.html',
  styleUrls: ['./search-playlists-page.component.scss']
})
export class SearchPlaylistsPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isPlaylistLoading: boolean = false;

  public search: string = "";
  public playlists: IPlaylists[] = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.search = params.search;
        this.getPlaylistsListByName(this.search);
      })
    )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPlaylistsListByName(search: string): void {
    this.isPlaylistLoading = true;
    this.subscription.add(
      this.searchService.getPlaylistsByName(search).subscribe((response: any) => {
        this.playlists = response.data.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            picture: playlist.picture_medium,
            small_picture: playlist.picture_small,
            user: playlist.user.name
          }
        })
        this.isPlaylistLoading = false;
      })
    )
  }

}
