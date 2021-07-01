import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-landing-page-album-cards',
  templateUrl: './landing-page-album-cards.component.html',
  styleUrls: ['./landing-page-album-cards.component.scss']
})
export class LandingPageAlbumCardsComponent implements OnInit {

  @Input() public inputAlbum = []

  constructor(
    private stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendToAlbumPage(id: number){
    this.stateService.setId(id)
    this.router.navigate(["/album", id])
  }

}
