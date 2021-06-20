import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagePlaylistCardsComponent } from './landing-page-playlist-cards.component';

describe('LandingPagePlaylistCardsComponent', () => {
  let component: LandingPagePlaylistCardsComponent;
  let fixture: ComponentFixture<LandingPagePlaylistCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPagePlaylistCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPagePlaylistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
