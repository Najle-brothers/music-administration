import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineButtonsComponent } from './offline-buttons.component';

describe('OfflineButtonsComponent', () => {
  let component: OfflineButtonsComponent;
  let fixture: ComponentFixture<OfflineButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
