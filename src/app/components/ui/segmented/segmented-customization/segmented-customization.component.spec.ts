import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedCustomizationComponent } from './segmented-customization.component';

describe('SegmentedCustomizationComponent', () => {
  let component: SegmentedCustomizationComponent;
  let fixture: ComponentFixture<SegmentedCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedCustomizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
