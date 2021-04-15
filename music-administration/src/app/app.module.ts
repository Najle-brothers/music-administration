import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BodyComponent } from './components/body/body.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { CardComponent } from './components/card/card.component';
import { GenreCardComponent } from './components/genre-card/genre-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    BodyComponent,
    SearcherComponent,
    MenuComponent,
    ProfileIconComponent,
    CardComponent,
    GenreCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
