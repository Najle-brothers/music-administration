import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPlaylist } from 'src/app/models/playlist';
import { IPlaylists } from 'src/app/models/playlists';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-playlists-page',
  templateUrl: './artist-playlists-page.component.html',
  styleUrls: ['./artist-playlists-page.component.scss']
})
export class ArtistPlaylistsPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isPlaylistLoading: boolean = false;

  public id: number = 0;
  public playlists: IPlaylists[] = [];

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.id = params.id;
        this.getArtistPlaylistsById(this.id)
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArtistPlaylistsById(id): void {
    this.isPlaylistLoading = true;
    this.subscription.add(
      this.artistService.getPlaylistsByArtistId(id).subscribe((response: any) => {
        this.playlists = response.data.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            picture: playlist.picture_medium,
            small_picture: playlist.picture_small,
          }
        })
      })
    )
    this.isPlaylistLoading = false;
  }

}