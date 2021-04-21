import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public artist = {
    name: '',
    id: 0
  };
  public albums = []
  private nextAlbumsRoute = ''
  public songs = []
  public selectedAlbum = {
    artist: '',
    title: '',
    picture: '',
    id: 0,
    releaseDate: ''
  }
  public isSongShown : boolean = false

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.artistService.getArtistDatabyName('conxuro').subscribe((response) => {
      this.artist = {
        name: response.name,
        id: response.id
      }

      this.artistService.getAlbumsByArtistId(this.artist.id).subscribe((response) => {
        this.albums = response.data.map((album) => {
          return {
            artist: this.artist.name,
            title: album.title,
            picture: album.cover_medium,
            id: album.id,
            releaseDate: album.release_date
          }
        })
        this.nextAlbumsRoute = response.next
      });
    });
  }

  handleClick(album: any): void {
    this.isSongShown = true;
    this.selectedAlbum = album
    this.albumService.getSongsByAlbumId(album.id).subscribe((response) => {
      this.songs = response.data.map((song) => {
        return {
          title: song.title,
          duration: song.duration,
          position: song.track_position
        }
      })
    })
  }

  handleClickBack(): void {
    this.isSongShown = false
  }

  getYearFromDate(date: string): string {
    return date.slice(0,4) 
  }

  secondsToMinutes(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    return this.twoDigits(minutes) + ":" + this.twoDigits(seconds - minutes * 60)
  }
  
  twoDigits(digit): string {
    let isItADigit = digit <  10
    if (isItADigit) {
      return "0" + digit
    } else {
      return digit
    }
  }
}