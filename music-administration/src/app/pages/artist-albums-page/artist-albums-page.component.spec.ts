import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumsPageComponent } from './artist-albums-page.component';

describe('ArtistAlbumsPageComponent', () => {
  let component: ArtistAlbumsPageComponent;
  let fixture: ComponentFixture<ArtistAlbumsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistAlbumsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
