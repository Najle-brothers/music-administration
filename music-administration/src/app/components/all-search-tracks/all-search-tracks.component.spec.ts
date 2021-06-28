import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSearchTracksComponent } from './all-search-tracks.component';

describe('AllSearchTracksComponent', () => {
  let component: AllSearchTracksComponent;
  let fixture: ComponentFixture<AllSearchTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSearchTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
