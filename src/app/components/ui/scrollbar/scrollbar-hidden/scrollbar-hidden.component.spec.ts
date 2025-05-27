import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarHiddenComponent } from './scrollbar-hidden.component';

describe('ScrollbarHiddenComponent', () => {
  let component: ScrollbarHiddenComponent;
  let fixture: ComponentFixture<ScrollbarHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarHiddenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
