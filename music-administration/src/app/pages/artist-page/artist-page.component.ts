import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { CommonsService } from 'src/app/services/commons.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {

  id = ""

  public selectedArtist = {
    id: 0,
    name: '',
    fans: '',
    picture: ''
  }
  public topFive = []

  public albums = []

  public playlists = []

  public playlistsId = {
    id: 0
  }

  public playlistDuration = ''

  constructor(
    private artistService: ArtistService,
    private stateService: StateService,
    private playlistService: PlaylistsService,
    private commonsService: CommonsService
    ) { }

  ngOnInit(): void {
    this.stateService.getId().subscribe((idResponse) => {
      this.id = idResponse
      this.getArtistInfoById(idResponse)
      this.getTopFiveListById(idResponse)
      this.getArtistAlbumsById(idResponse)
      this.getArtistPlaylistsById(idResponse)
      this.getPlaylistDurationByPlaylistId(idResponse)
    })
  }

  getArtistInfoById(id): void {
    this.artistService.getArtistDatabyId(id).subscribe((response) => {
      this.selectedArtist = {
        id: response.id,
        name: response.name,
        fans: this.commonsService.fansWithCommas(response.nb_fan),
        picture: response.picture_xl,
      }
    })
  }

  getTopFiveListById(id): void {
    this.artistService.getArtist5TopListById(id).subscribe((response) => {
      this.topFive = response.data.map((tracks) => {
        return {
        id: tracks.id,
        title: tracks.title,
        duration: this.commonsService.secondsToFullDuration(tracks.duration, false, this.commonsService.twoDigits),
        album: tracks.album.title,
        albumId: tracks.album.id,
        picture: tracks.album.cover_small,
        type: tracks.type
        }
      })
    })
  }

  getArtistAlbumsById(id): void {
    this.artistService.getAlbumsByArtistId(id).subscribe((response) => {
      this.albums = response.data.map((album) => {
        return {
          id: album.id,
          title: album.title,
          picture: album.cover_medium,
          year: this.commonsService.getYearFromDate(album.release_date)
        }
      })
    })
  }

  getArtistPlaylistsById(id): void {
    this.artistService.getPlaylistsByArtistId(id).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          id: playlist.id,
          title: playlist.title,
          picture: playlist.picture_medium,
        }
      })
      this.playlistsId = {
        id: response.id
      }
    })
  }

  getPlaylistDurationByPlaylistId(playlistId): void {
    this.playlistService.getPlaylistInfoByPlaylistId(playlistId).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          duration: this.commonsService.secondsToFullDuration(playlist.duration, true, this.commonsService.twoDigits)
        }
      })
    })
  }

  
}
