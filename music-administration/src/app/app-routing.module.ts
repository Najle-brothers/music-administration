import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "album/:id", component: AlbumPageComponent},
  {path: "artist", component: ArtistPageComponent},
  {path: "search", component: SearchPageComponent},
  {path: "playlist", component: PlaylistPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
