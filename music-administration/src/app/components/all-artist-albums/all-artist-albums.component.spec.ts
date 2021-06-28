import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtistAlbumsComponent } from './all-artist-albums.component';

describe('AllArtistAlbumsComponent', () => {
  let component: AllArtistAlbumsComponent;
  let fixture: ComponentFixture<AllArtistAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllArtistAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArtistAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
