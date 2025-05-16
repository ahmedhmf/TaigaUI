import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAutoscrollComponent } from './stepper-autoscroll.component';

describe('StepperAutoscrollComponent', () => {
  let component: StepperAutoscrollComponent;
  let fixture: ComponentFixture<StepperAutoscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperAutoscrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperAutoscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
