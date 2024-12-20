import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCustomIconComponent } from './rating-custom-icon.component';

describe('RatingCustomIconComponent', () => {
  let component: RatingCustomIconComponent;
  let fixture: ComponentFixture<RatingCustomIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingCustomIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCustomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
