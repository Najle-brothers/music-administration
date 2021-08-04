import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicitContentComponent } from './explicit-content.component';

describe('ExplicitContentComponent', () => {
  let component: ExplicitContentComponent;
  let fixture: ComponentFixture<ExplicitContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplicitContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicitContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
