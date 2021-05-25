import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-website',
  templateUrl: './artist-website.component.html',
  styleUrls: ['./artist-website.component.scss']
})
export class ArtistWebsiteComponent implements OnInit, OnChanges {

  @Input() inputSearch: string = ""

  public artistId = {
    id: 0
  }

  public artistData = {
    name: '',
    picture: '',
    fans: 0
  }

  public albumData = []

  public playlistData = []

  constructor(
    private artistService: ArtistService,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getArtistInfoById(this.artistId.id)
  }

  getArtistInfoById(id: number) {
    this.artistService.getArtistDataById(id).subscribe((response)  => {
      this.artistData = response.map((artist)  => {
        return {
          name: artist.name,
          picture: artist.picture_x,
          fans: artist.nb_fan
        }
      })
    })
  }

  getFourAlbumsById(id: number) {
    this.artistService.getAlbumsByArtistId(id).subscribe((response) => {
      this.albumData = response.data.map((album)  => {
        return {
          name: album.title,
          picture: album.cover_medium ,
          year: album.release_date
        }
      })
    })
  }

  getFourPlaylistsById(id: number) {
    this.artistService.getPlaylistsByArtistId(id).subscribe((response) => {
      this.playlistData = response.data.map((playlist)  => {
        return {
          name: playlist.title,
          picture: playlist.picture_medium
        }
      })
    })
  }

  getFourRelatedArtistById(id: number) {}
  
  getArtistId() {
    this.artistService.getArtistIdByName(this.inputSearch).subscribe((response) => {
      this.artistId = {
        id: response.data[0].id
      }
    })
  }

}
