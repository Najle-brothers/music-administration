import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPageTracklistComponent } from './album-page-tracklist.component';

describe('AlbumPageTracklistComponent', () => {
  let component: AlbumPageTracklistComponent;
  let fixture: ComponentFixture<AlbumPageTracklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPageTracklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPageTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
