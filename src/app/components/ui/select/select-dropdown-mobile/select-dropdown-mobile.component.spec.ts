import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDropdownMobileComponent } from './select-dropdown-mobile.component';

describe('SelectDropdownMobileComponent', () => {
  let component: SelectDropdownMobileComponent;
  let fixture: ComponentFixture<SelectDropdownMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDropdownMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDropdownMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
