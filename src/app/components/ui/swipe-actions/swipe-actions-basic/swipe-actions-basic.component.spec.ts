import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeActionsBasicComponent } from './swipe-actions-basic.component';

describe('SwipeActionsBasicComponent', () => {
  let component: SwipeActionsBasicComponent;
  let fixture: ComponentFixture<SwipeActionsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeActionsBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeActionsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
