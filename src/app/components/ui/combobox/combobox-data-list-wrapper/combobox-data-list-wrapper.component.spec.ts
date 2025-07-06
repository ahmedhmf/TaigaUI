import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxDataListWrapperComponent } from './combobox-data-list-wrapper.component';

describe('ComboboxDataListWrapperComponent', () => {
  let component: ComboboxDataListWrapperComponent;
  let fixture: ComponentFixture<ComboboxDataListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxDataListWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxDataListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
