import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCustomLabelComponent } from './alert-custom-label.component';

describe('AlertCustomLabelComponent', () => {
  let component: AlertCustomLabelComponent;
  let fixture: ComponentFixture<AlertCustomLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertCustomLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertCustomLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
