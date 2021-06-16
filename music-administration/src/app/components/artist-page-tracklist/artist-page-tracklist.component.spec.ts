import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageTracklistComponent } from './artist-page-tracklist.component';

describe('ArtistPageTracklistComponent', () => {
  let component: ArtistPageTracklistComponent;
  let fixture: ComponentFixture<ArtistPageTracklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistPageTracklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPageTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
