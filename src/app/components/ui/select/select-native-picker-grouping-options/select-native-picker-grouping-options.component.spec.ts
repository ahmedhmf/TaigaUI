import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNativePickerGroupingOptionsComponent } from './select-native-picker-grouping-options.component';

describe('SelectNativePickerGroupingOptionsComponent', () => {
  let component: SelectNativePickerGroupingOptionsComponent;
  let fixture: ComponentFixture<SelectNativePickerGroupingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectNativePickerGroupingOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNativePickerGroupingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
