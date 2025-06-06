import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarAllComponent } from './scrollbar-all.component';

describe('ScrollbarAllComponent', () => {
  let component: ScrollbarAllComponent;
  let fixture: ComponentFixture<ScrollbarAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
