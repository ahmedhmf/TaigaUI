import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeActionsDesktopFallbackComponent } from './swipe-actions-desktop-fallback.component';

describe('SwipeActionsDesktopFallbackComponent', () => {
  let component: SwipeActionsDesktopFallbackComponent;
  let fixture: ComponentFixture<SwipeActionsDesktopFallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeActionsDesktopFallbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeActionsDesktopFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
