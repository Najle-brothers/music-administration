import { Component, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {
  public type: string = "";
  public id: string = "";

  constructor(
    private sanitizer: DomSanitizer,
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.stateService.getId().subscribe((idResponse) => {
      this.id = idResponse
    })
    this.stateService.getType().subscribe((typeResponse) => {
      this.type = typeResponse
    })
    this.trackListUrl()
  }

  trackListUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`http://wiget.deezer.com/widget/dark/${this.type}/${this.id}?tracklist=false`);
  }

}
