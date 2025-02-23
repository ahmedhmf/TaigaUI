import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDecorativeComponent } from './checkbox-decorative.component';

describe('CheckboxDecorativeComponent', () => {
  let component: CheckboxDecorativeComponent;
  let fixture: ComponentFixture<CheckboxDecorativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxDecorativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxDecorativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
