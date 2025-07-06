import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedSizesComponent } from './segmented-sizes.component';

describe('SegmentedSizesComponent', () => {
  let component: SegmentedSizesComponent;
  let fixture: ComponentFixture<SegmentedSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedSizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
