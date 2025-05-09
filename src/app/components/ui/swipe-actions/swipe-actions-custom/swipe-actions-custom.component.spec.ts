import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeActionsCustomComponent } from './swipe-actions-custom.component';

describe('SwipeActionsCustomComponent', () => {
  let component: SwipeActionsCustomComponent;
  let fixture: ComponentFixture<SwipeActionsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeActionsCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeActionsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
