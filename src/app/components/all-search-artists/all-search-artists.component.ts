import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-search-artists',
  templateUrl: './all-search-artists.component.html',
  styleUrls: ['./all-search-artists.component.scss']
})
export class AllSearchArtistsComponent implements OnInit {

  @Input() public inputArtists = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  sendToArtistPage(id: number){
    this.router.navigate(['/artist', id])
  }

}
