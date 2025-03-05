import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxIdOnlyComponent } from './combobox-id-only.component';

describe('ComboboxIdOnlyComponent', () => {
  let component: ComboboxIdOnlyComponent;
  let fixture: ComponentFixture<ComboboxIdOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxIdOnlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxIdOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
