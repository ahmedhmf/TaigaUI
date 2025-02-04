import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSingleComponent } from './carousel-single.component';

describe('CarouselSingleComponent', () => {
  let component: CarouselSingleComponent;
  let fixture: ComponentFixture<CarouselSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
