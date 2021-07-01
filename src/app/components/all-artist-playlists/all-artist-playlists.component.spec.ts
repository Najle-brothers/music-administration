import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtistPlaylistsComponent } from './all-artist-playlists.component';

describe('AllArtistPlaylistsComponent', () => {
  let component: AllArtistPlaylistsComponent;
  let fixture: ComponentFixture<AllArtistPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllArtistPlaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArtistPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
