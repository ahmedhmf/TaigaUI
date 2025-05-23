import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarVerticalComponent } from './scrollbar-vertical.component';

describe('ScrollbarVerticalComponent', () => {
  let component: ScrollbarVerticalComponent;
  let fixture: ComponentFixture<ScrollbarVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
