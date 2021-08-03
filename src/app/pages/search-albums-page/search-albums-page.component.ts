import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-albums-page',
  templateUrl: './search-albums-page.component.html',
  styleUrls: ['./search-albums-page.component.scss']
})
export class SearchAlbumsPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isAlbumLoading: boolean = false;

  public search = "";
  public albums = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.search = params.search;
        this.getAlbumsListByName(this.search);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAlbumsListByName(search): void {
    this.isAlbumLoading = true;
    this.subscription.add(
      this.searchService.getAlbumsByName(search).subscribe((response) => {
        this.albums = response.data.map((album) => {
          return {
          id: album.id,
          title: album.title,
          artist: album.artist.name,
          picture: album.cover_medium,
          small_picture: album.cover_small,
          }
        })
        this.isAlbumLoading = false;
      })
    )
  }

}
