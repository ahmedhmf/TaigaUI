import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperVerticalConnectedComponent } from './stepper-vertical-connected.component';

describe('StepperVerticalConnectedComponent', () => {
  let component: StepperVerticalConnectedComponent;
  let fixture: ComponentFixture<StepperVerticalConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperVerticalConnectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperVerticalConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
