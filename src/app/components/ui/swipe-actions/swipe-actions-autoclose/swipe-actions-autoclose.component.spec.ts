import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeActionsAutocloseComponent } from './swipe-actions-autoclose.component';

describe('SwipeActionsAutocloseComponent', () => {
  let component: SwipeActionsAutocloseComponent;
  let fixture: ComponentFixture<SwipeActionsAutocloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeActionsAutocloseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeActionsAutocloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
