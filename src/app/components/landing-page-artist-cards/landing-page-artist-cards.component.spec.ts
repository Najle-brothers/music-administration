import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageArtistCardsComponent } from './landing-page-artist-cards.component';

describe('LandingPageArtistCardsComponent', () => {
  let component: LandingPageArtistCardsComponent;
  let fixture: ComponentFixture<LandingPageArtistCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageArtistCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageArtistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
