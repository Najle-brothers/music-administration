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
import { AppRoutingModule } from './app-routing.module';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { PlaylistsListComponent } from './components/playlists-list/playlists-list.component';
import { TracksListComponent } from './components/tracks-list/tracks-list.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { AlbumPageHeaderComponent } from './components/album-page-header/album-page-header.component';
import { AlbumPageTracklistComponent } from './components/album-page-tracklist/album-page-tracklist.component';
import { ArtistPageHeaderComponent } from './components/artist-page-header/artist-page-header.component';
import { ArtistPageTracklistComponent } from './components/artist-page-tracklist/artist-page-tracklist.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import { ArtistPageAlbumComponent } from './components/artist-page-album/artist-page-album.component';
import { ArtistPagePlaylistComponent } from './components/artist-page-playlist/artist-page-playlist.component';
import { PlaylistPageHeaderComponent } from './components/playlist-page-header/playlist-page-header.component';
import { PlaylistPageTracklistComponent } from './components/playlist-page-tracklist/playlist-page-tracklist.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LandingPageArtistCardsComponent } from './components/landing-page-artist-cards/landing-page-artist-cards.component';
import { LandingPageAlbumCardsComponent } from './components/landing-page-album-cards/landing-page-album-cards.component';
import { LandingPagePlaylistCardsComponent } from './components/landing-page-playlist-cards/landing-page-playlist-cards.component';
import { LandingPageTrackslistComponent } from './components/landing-page-trackslist/landing-page-trackslist.component';
import { LandingPageGreetingsComponent } from './components/landing-page-greetings/landing-page-greetings.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ArtistAlbumsPageComponent } from './pages/artist-albums-page/artist-albums-page.component';
import { ArtistPlaylistsPageComponent } from './pages/artist-playlists-page/artist-playlists-page.component';
import { AllArtistAlbumsComponent } from './components/all-artist-albums/all-artist-albums.component';
import { AllArtistPlaylistsComponent } from './components/all-artist-playlists/all-artist-playlists.component';
import { SearchTracksPageComponent } from './pages/search-tracks-page/search-tracks-page.component';
import { SearchAlbumsPageComponent } from './pages/search-albums-page/search-albums-page.component';
import { SearchPlaylistsPageComponent } from './pages/search-playlists-page/search-playlists-page.component';
import { SearchArtistsPageComponent } from './pages/search-artists-page/search-artists-page.component';
import { AllSearchArtistsComponent } from './components/all-search-artists/all-search-artists.component';
import { AllSearchPlaylistsComponent } from './components/all-search-playlists/all-search-playlists.component';
import { AllSearchAlbumsComponent } from './components/all-search-albums/all-search-albums.component';
import { AllSearchTracksComponent } from './components/all-search-tracks/all-search-tracks.component';
import { ExplicitContentComponent } from './components/explicit-content/explicit-content.component';
import { MenuBelowComponent } from './components/menu-below/menu-below.component';

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
    GenreCardComponent,
    AlbumPageComponent,
    ArtistPageComponent,
    SearchPageComponent,
    AlbumsListComponent,
    PlaylistsListComponent,
    TracksListComponent,
    ArtistsListComponent,
    AlbumPageHeaderComponent,
    AlbumPageTracklistComponent,
    ArtistPageHeaderComponent,
    ArtistPageTracklistComponent,
    PlaylistPageComponent,
    ArtistPageAlbumComponent,
    ArtistPagePlaylistComponent,
    PlaylistPageHeaderComponent,
    PlaylistPageTracklistComponent,
    LandingPageComponent,
    LoadingComponent,
    LandingPageArtistCardsComponent,
    LandingPageAlbumCardsComponent,
    LandingPagePlaylistCardsComponent,
    LandingPageTrackslistComponent,
    LandingPageGreetingsComponent,
    PlayButtonComponent,
    ErrorPageComponent,
    ArtistAlbumsPageComponent,
    ArtistPlaylistsPageComponent,
    AllArtistAlbumsComponent,
    AllArtistPlaylistsComponent,
    SearchTracksPageComponent,
    SearchAlbumsPageComponent,
    SearchPlaylistsPageComponent,
    SearchArtistsPageComponent,
    AllSearchArtistsComponent,
    AllSearchPlaylistsComponent,
    AllSearchAlbumsComponent,
    AllSearchTracksComponent,
    ExplicitContentComponent,
    MenuBelowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
