import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {

  @Input() public inputArtists = [];
  @Input() public inputSearch = "";

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

  sendToAllArtists(search: string){
    this.router.navigate(["/search/artists", search])
  }

}
