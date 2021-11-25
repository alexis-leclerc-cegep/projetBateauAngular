import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVoilesComponent } from './info-voiles.component';

describe('InfoVoilesComponent', () => {
  let component: InfoVoilesComponent;
  let fixture: ComponentFixture<InfoVoilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoVoilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVoilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
