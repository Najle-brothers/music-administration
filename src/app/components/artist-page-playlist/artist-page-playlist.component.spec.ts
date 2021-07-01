import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPagePlaylistComponent } from './artist-page-playlist.component';

describe('ArtistPagePlaylistComponent', () => {
  let component: ArtistPagePlaylistComponent;
  let fixture: ComponentFixture<ArtistPagePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPagePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPagePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
