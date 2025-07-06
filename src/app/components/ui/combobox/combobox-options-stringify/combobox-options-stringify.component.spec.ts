import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxOptionsStringifyComponent } from './combobox-options-stringify.component';

describe('ComboboxOptionsStringifyComponent', () => {
  let component: ComboboxOptionsStringifyComponent;
  let fixture: ComponentFixture<ComboboxOptionsStringifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxOptionsStringifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxOptionsStringifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
