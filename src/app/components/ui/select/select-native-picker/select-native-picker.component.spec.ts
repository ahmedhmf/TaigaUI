import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNativePickerComponent } from './select-native-picker.component';

describe('SelectNativePickerComponent', () => {
  let component: SelectNativePickerComponent;
  let fixture: ComponentFixture<SelectNativePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectNativePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNativePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
