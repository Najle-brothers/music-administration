import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArtistsPageComponent } from './search-artists-page.component';

describe('SearchArtistsPageComponent', () => {
  let component: SearchArtistsPageComponent;
  let fixture: ComponentFixture<SearchArtistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchArtistsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArtistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
