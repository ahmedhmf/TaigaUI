import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedContentComponent } from './segmented-content.component';

describe('SegmentedContentComponent', () => {
  let component: SegmentedContentComponent;
  let fixture: ComponentFixture<SegmentedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
