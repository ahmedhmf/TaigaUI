import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeActionsDynamicComponent } from './swipe-actions-dynamic.component';

describe('SwipeActionsDynamicComponent', () => {
  let component: SwipeActionsDynamicComponent;
  let fixture: ComponentFixture<SwipeActionsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeActionsDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeActionsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
