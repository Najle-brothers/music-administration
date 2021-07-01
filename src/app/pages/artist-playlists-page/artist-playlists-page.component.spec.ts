import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPlaylistsPageComponent } from './artist-playlists-page.component';

describe('ArtistPlaylistsPageComponent', () => {
  let component: ArtistPlaylistsPageComponent;
  let fixture: ComponentFixture<ArtistPlaylistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPlaylistsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPlaylistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
