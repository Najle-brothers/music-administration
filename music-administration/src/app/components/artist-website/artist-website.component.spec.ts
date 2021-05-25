import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistWebsiteComponent } from './artist-website.component';

describe('ArtistWebsiteComponent', () => {
  let component: ArtistWebsiteComponent;
  let fixture: ComponentFixture<ArtistWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
