import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaylistsService } from 'src/app/services/playlists.service';

@Component({
  selector: 'app-playlists-card',
  templateUrl: './playlists-card.component.html',
  styleUrls: ['./playlists-card.component.scss']
})
export class PlaylistsCardComponent implements OnInit, OnChanges {

  @Input() inputSearch: string = ""

  public playlists = []
  public selectedPlaylistInfo = {
    title: '',
    id: 0,
    picture: '',
    description: '',
    fans: 0,
    duration: 0
  }
  public artistId = {
    id: 0
  }
  public selectedPlaylist = {
    id: 0
  }
  public tracks = []
  public areTracksShown : boolean = false

  constructor(
    private playlistsService: PlaylistsService
  ) { }

  ngOnInit(): void {
    this.getArtistsPlaylists()
  }

  ngOnChanges(): void {
    this.areTracksShown = false
    this.getArtistId()
  }

  getArtistsPlaylists(): void {
    this.playlistsService.getPlaylistByArtistId(this.artistId.id).subscribe((response) => {
      this.playlists = response.data.map((playlist) => {
        return {
          title: playlist.title,
          id: playlist.id,
          picture: playlist.picture_medium
        }
      })
    })
  }

  getArtistId(): void {
    this.playlistsService.getIdByArtist(this.inputSearch).subscribe((response) => {
      console.log(response)
      this.artistId = {
        id: response.data[0].id
      }
      this.getArtistsPlaylists()
    })
  }

  handleClick(playlist: any): void {
    this.areTracksShown = true;
    this.selectedPlaylist = playlist
    this.playlistsService.getInfoPlaylistById(playlist.id).subscribe((response) => {
      this.selectedPlaylistInfo = {
        id: response.id,
        title: response.title,
        picture: response.picture_xl,
        description: response.description,
        fans: response.fans,
        duration: response.duration
      }
    })

    this.playlistsService.getTracksByPlaylistId(playlist.id).subscribe((response) => {
      this.tracks = response.data.map((track) => {
        return {
          id: track.id,
          title: track.title,
          duration: track.duration,
          artist: track.artist.name,
          album: track.album.title
        }      
      })
    })
  }
  
  handleClickBack(): void {
    this.areTracksShown = false
  }

  secondsToFullDuration(seconds: number, isItAnHour: boolean, twoDigits): string {
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    if (isItAnHour) {
      return hours + "hs " + this.twoDigits(minutes - hours * 60) + "mins" 
      //+ this.twoDigits(seconds - minutes * 60)
    } else {
      return this.twoDigits(minutes) + ":" + this.twoDigits(seconds - minutes * 60)
    }
  }

  twoDigits(digit): string {
    let isItADigit = digit <  10
    if (isItADigit) {
      return "0" + digit
    } else {
      return digit
    }
  }

  fansWithCommas(digits): string {
    var parts = digits.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return "Fans #" + parts.join(",");
  }

}