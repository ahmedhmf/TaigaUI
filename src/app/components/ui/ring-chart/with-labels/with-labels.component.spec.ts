import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLabelsComponent } from './with-labels.component';

describe('WithLabelsComponent', () => {
  let component: WithLabelsComponent;
  let fixture: ComponentFixture<WithLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithLabelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
