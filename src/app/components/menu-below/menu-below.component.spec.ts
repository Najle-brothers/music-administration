import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBelowComponent } from './menu-below.component';

describe('MenuBelowComponent', () => {
  let component: MenuBelowComponent;
  let fixture: ComponentFixture<MenuBelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
