import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-landing-page-playlist-cards',
  templateUrl: './landing-page-playlist-cards.component.html',
  styleUrls: ['./landing-page-playlist-cards.component.scss']
})
export class LandingPagePlaylistCardsComponent implements OnInit {

  @Input() public inputPlaylist = []

  constructor(
    private stateService: StateService,
    private router: Router    
  ) { }

  ngOnInit(): void {
  }
  
  sendToPlaylistPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(["/playlist"])
  }

}
