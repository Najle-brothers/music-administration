import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTracksPageComponent } from './search-tracks-page.component';

describe('SearchTracksPageComponent', () => {
  let component: SearchTracksPageComponent;
  let fixture: ComponentFixture<SearchTracksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTracksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
