import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageTrackslistComponent } from './landing-page-trackslist.component';

describe('LandingPageTrackslistComponent', () => {
  let component: LandingPageTrackslistComponent;
  let fixture: ComponentFixture<LandingPageTrackslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageTrackslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageTrackslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
