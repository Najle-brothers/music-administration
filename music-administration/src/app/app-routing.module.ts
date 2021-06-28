import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ArtistAlbumsPageComponent } from './pages/artist-albums-page/artist-albums-page.component';
import { ArtistPlaylistsPageComponent } from './pages/artist-playlists-page/artist-playlists-page.component';
import { SearchTracksPageComponent } from './pages/search-tracks-page/search-tracks-page.component';
import { SearchAlbumsPageComponent } from './pages/search-albums-page/search-albums-page.component';
import { SearchPlaylistsPageComponent } from './pages/search-playlists-page/search-playlists-page.component';
import { SearchArtistsPageComponent } from './pages/search-artists-page/search-artists-page.component';

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "album/:id", component: AlbumPageComponent},
  {path: "artist/:id", component: ArtistPageComponent},
  {path: "artist/albums/:id", component: ArtistAlbumsPageComponent},
  {path: "artist/playlists/:id", component: ArtistPlaylistsPageComponent},
  {path: "search/:search", component: SearchPageComponent},
  {path: "search/tracks/:search", component: SearchTracksPageComponent},
  {path: "search/albums/:search", component: SearchAlbumsPageComponent},
  {path: "search/playlists/:search", component: SearchPlaylistsPageComponent},
  {path: "search/artists/:search", component: SearchArtistsPageComponent},
  {path: "playlist/:id", component: PlaylistPageComponent},
  {path: "error", component: ErrorPageComponent},
  {path: '**', redirectTo: "/error"}
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
