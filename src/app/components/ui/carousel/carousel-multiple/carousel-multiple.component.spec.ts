import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMultipleComponent } from './carousel-multiple.component';

describe('CarouselMultipleComponent', () => {
  let component: CarouselMultipleComponent;
  let fixture: ComponentFixture<CarouselMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
