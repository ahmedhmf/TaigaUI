import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleDateComponent } from './select-multiple-date.component';

describe('SelectMultipleDateComponent', () => {
  let component: SelectMultipleDateComponent;
  let fixture: ComponentFixture<SelectMultipleDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectMultipleDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMultipleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
