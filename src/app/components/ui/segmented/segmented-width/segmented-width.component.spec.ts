import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedWidthComponent } from './segmented-width.component';

describe('SegmentedWidthComponent', () => {
  let component: SegmentedWidthComponent;
  let fixture: ComponentFixture<SegmentedWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedWidthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
