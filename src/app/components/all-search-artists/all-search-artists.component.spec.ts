import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSearchArtistsComponent } from './all-search-artists.component';

describe('AllSearchArtistsComponent', () => {
  let component: AllSearchArtistsComponent;
  let fixture: ComponentFixture<AllSearchArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSearchArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
