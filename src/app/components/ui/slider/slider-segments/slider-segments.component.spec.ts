import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSegmentsComponent } from './slider-segments.component';

describe('SliderSegmentsComponent', () => {
  let component: SliderSegmentsComponent;
  let fixture: ComponentFixture<SliderSegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderSegmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
