import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderColorsComponent } from './slider-colors.component';

describe('SliderColorsComponent', () => {
  let component: SliderColorsComponent;
  let fixture: ComponentFixture<SliderColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
