import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarHorizontalComponent } from './scrollbar-horizontal.component';

describe('ScrollbarHorizontalComponent', () => {
  let component: ScrollbarHorizontalComponent;
  let fixture: ComponentFixture<ScrollbarHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
