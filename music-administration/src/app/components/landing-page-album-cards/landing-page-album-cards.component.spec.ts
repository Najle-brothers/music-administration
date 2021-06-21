import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageAlbumCardsComponent } from './landing-page-album-cards.component';

describe('LandingPageAlbumCardsComponent', () => {
  let component: LandingPageAlbumCardsComponent;
  let fixture: ComponentFixture<LandingPageAlbumCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageAlbumCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageAlbumCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
