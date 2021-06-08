import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPageHeaderComponent } from './playlist-page-header.component';

describe('PlaylistPageHeaderComponent', () => {
  let component: PlaylistPageHeaderComponent;
  let fixture: ComponentFixture<PlaylistPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
