import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselVerticalAlignmentComponent } from './carousel-vertical-alignment.component';

describe('CarouselVerticalAlignmentComponent', () => {
  let component: CarouselVerticalAlignmentComponent;
  let fixture: ComponentFixture<CarouselVerticalAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselVerticalAlignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselVerticalAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
