import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderStepsComponent } from './slider-steps.component';

describe('SliderStepsComponent', () => {
  let component: SliderStepsComponent;
  let fixture: ComponentFixture<SliderStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
