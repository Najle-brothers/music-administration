import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageGreetingsComponent } from './landing-page-greetings.component';

describe('LandingPageGreetingsComponent', () => {
  let component: LandingPageGreetingsComponent;
  let fixture: ComponentFixture<LandingPageGreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageGreetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageGreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
