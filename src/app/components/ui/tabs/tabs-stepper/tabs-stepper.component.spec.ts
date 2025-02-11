import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsStepperComponent } from './tabs-stepper.component';

describe('TabsStepperComponent', () => {
  let component: TabsStepperComponent;
  let fixture: ComponentFixture<TabsStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
