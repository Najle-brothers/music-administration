import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistService } from 'src/app/services/artist.service';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-artist-albums-page',
  templateUrl: './artist-albums-page.component.html',
  styleUrls: ['./artist-albums-page.component.scss']
})
export class ArtistAlbumsPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isAlbumLoading: boolean = false;

  public id = "";
  public albums = [];

  constructor(
    private artistService: ArtistService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.id = params.id;
        this.getArtistAlbumsById(this.id)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

}
