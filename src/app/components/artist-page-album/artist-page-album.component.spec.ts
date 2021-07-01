import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageAlbumComponent } from './artist-page-album.component';

describe('ArtistPageAlbumComponent', () => {
  let component: ArtistPageAlbumComponent;
  let fixture: ComponentFixture<ArtistPageAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPageAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPageAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
