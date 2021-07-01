import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlaylistsPageComponent } from './search-playlists-page.component';

describe('SearchPlaylistsPageComponent', () => {
  let component: SearchPlaylistsPageComponent;
  let fixture: ComponentFixture<SearchPlaylistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlaylistsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlaylistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
