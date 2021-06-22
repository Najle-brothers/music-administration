import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-landing-page-artist-cards',
  templateUrl: './landing-page-artist-cards.component.html',
  styleUrls: ['./landing-page-artist-cards.component.scss']
})
export class LandingPageArtistCardsComponent implements OnInit {

  @Input() public inputArtist = []

  constructor(
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendToArtistPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(["/artist", id])
  }

}
