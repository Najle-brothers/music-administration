import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAlbums } from 'src/app/models/albums';
import { IUser } from 'src/app/models/user';
import { ArtistService } from 'src/app/services/artist.service';
import { CommonsService } from 'src/app/services/commons.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-artist-albums-page',
  templateUrl: './artist-albums-page.component.html',
  styleUrls: ['./artist-albums-page.component.scss']
})
export class ArtistAlbumsPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isAlbumLoading: boolean = false;
  public isUserLoading: boolean = false;

  public id = "";
  public allAlbums: IAlbums[] = [];
  public albums = [];
  public explicitContent: boolean = false;

  constructor(
    private artistService: ArtistService,
    private userService: UserService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe(
        (params) => {
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
      this.artistService.getAlbumsByArtistId(id).subscribe(
        (response: any) => {
        this.allAlbums = response.data.map(
          (album) => {
          return {
            id: album.id,
            title: album.title,
            picture: album.cover_medium,
            small_picture: album.cover_small,
            year: this.commonsService.getYearFromDate(album.release_date),
            explicit: album.explicit_lyrics,
          }
        })
        this.isUserLoading = true
        this.userService.getUserData().subscribe(
          (response: IUser) => {
          this.explicitContent = response.explicitContent;
          this.albums = this.commonsService.explicitLyrics(this.explicitContent, this.allAlbums);
          this.isUserLoading = false;
        })
        this.isAlbumLoading = false
      })
    )
  }

}
