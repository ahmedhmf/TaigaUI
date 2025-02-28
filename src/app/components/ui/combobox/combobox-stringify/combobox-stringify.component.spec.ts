import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxStringifyComponent } from './combobox-stringify.component';

describe('ComboboxStringifyComponent', () => {
  let component: ComboboxStringifyComponent;
  let fixture: ComponentFixture<ComboboxStringifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxStringifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxStringifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
