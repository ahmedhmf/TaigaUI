import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComplexComponent } from './slider-complex.component';

describe('SliderComplexComponent', () => {
  let component: SliderComplexComponent;
  let fixture: ComponentFixture<SliderComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
