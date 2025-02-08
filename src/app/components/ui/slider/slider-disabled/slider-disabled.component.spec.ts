import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDisabledComponent } from './slider-disabled.component';

describe('SliderDisabledComponent', () => {
  let component: SliderDisabledComponent;
  let fixture: ComponentFixture<SliderDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderDisabledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
