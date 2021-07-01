import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IPlayerData } from 'src/app/models/player';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public playerData: IPlayerData;
  public subscription: Subscription = new Subscription;
  public playerURL: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.stateService.getPlayerData().subscribe((typeResponse: IPlayerData) => {
      this.playerData = typeResponse;
      this.playerURL = this.trackListUrl();
    })
  }

  trackListUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://widget.deezer.com/widget/dark/${this.playerData.type}/${this.playerData.id}?tracklist=false`);
  }

}
