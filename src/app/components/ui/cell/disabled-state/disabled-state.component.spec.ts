import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledStateComponent } from './disabled-state.component';

describe('DisabledStateComponent', () => {
  let component: DisabledStateComponent;
  let fixture: ComponentFixture<DisabledStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisabledStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
