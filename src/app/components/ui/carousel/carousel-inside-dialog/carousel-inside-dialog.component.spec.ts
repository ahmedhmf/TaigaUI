import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInsideDialogComponent } from './carousel-inside-dialog.component';

describe('CarouselInsideDialogComponent', () => {
  let component: CarouselInsideDialogComponent;
  let fixture: ComponentFixture<CarouselInsideDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselInsideDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselInsideDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
