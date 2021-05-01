import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsCardComponent } from './playlists-card.component';

describe('PlaylistsCardComponent', () => {
  let component: PlaylistsCardComponent;
  let fixture: ComponentFixture<PlaylistsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
