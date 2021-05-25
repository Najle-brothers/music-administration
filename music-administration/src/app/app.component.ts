import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-administration';

  public search: string = "";

  sendSearch(search: string) {
    this.search = search
  }
  
}
