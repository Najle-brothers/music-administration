import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlbumsPageComponent } from './search-albums-page.component';

describe('SearchAlbumsPageComponent', () => {
  let component: SearchAlbumsPageComponent;
  let fixture: ComponentFixture<SearchAlbumsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAlbumsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAlbumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
