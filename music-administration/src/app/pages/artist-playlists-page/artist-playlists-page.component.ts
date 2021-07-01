import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaylistsService } from 'src/app/services/playlists.service';

@Component({
  selector: 'app-artist-playlists-page',
  templateUrl: './artist-playlists-page.component.html',
  styleUrls: ['./artist-playlists-page.component.scss']
})
export class ArtistPlaylistsPageComponent implements OnInit {
  public subscription: Subscription = new Subscription;

  public isPlaylistLoading: boolean = false;

  public id = "";
  public playlists = [];

  constructor(
    private playlistService: PlaylistsService,
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
      this.playlistService.getPlaylistInfoByPlaylistId(id).subscribe((response) => {
        this.playlists = response.data.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.title,
            picture: playlist.picture_medium,
          }
        })
      })
    )
    this.isPlaylistLoading = false;
  }

}
