import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarHoverComponent } from './scrollbar-hover.component';

describe('ScrollbarHoverComponent', () => {
  let component: ScrollbarHoverComponent;
  let fixture: ComponentFixture<ScrollbarHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
