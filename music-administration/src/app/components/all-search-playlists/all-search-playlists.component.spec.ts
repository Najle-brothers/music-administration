import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSearchPlaylistsComponent } from './all-search-playlists.component';

describe('AllSearchPlaylistsComponent', () => {
  let component: AllSearchPlaylistsComponent;
  let fixture: ComponentFixture<AllSearchPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSearchPlaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
