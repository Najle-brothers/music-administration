import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSearchAlbumsComponent } from './all-search-albums.component';

describe('AllSearchAlbumsComponent', () => {
  let component: AllSearchAlbumsComponent;
  let fixture: ComponentFixture<AllSearchAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSearchAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
