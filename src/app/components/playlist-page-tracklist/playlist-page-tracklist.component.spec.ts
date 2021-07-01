import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPageTracklistComponent } from './playlist-page-tracklist.component';

describe('PlaylistPageTracklistComponent', () => {
  let component: PlaylistPageTracklistComponent;
  let fixture: ComponentFixture<PlaylistPageTracklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistPageTracklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPageTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
