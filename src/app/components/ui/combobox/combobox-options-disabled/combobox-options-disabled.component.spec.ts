import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxOptionsDisabledComponent } from './combobox-options-disabled.component';

describe('ComboboxOptionsDisabledComponent', () => {
  let component: ComboboxOptionsDisabledComponent;
  let fixture: ComponentFixture<ComboboxOptionsDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxOptionsDisabledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxOptionsDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
