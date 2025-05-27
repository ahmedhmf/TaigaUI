import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBasicComponent } from './stepper-basic.component';

describe('StepperBasicComponent', () => {
  let component: StepperBasicComponent;
  let fixture: ComponentFixture<StepperBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
