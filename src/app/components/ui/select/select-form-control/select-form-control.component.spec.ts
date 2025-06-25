import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormControlComponent } from './select-form-control.component';

describe('SelectFormControlComponent', () => {
  let component: SelectFormControlComponent;
  let fixture: ComponentFixture<SelectFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFormControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
