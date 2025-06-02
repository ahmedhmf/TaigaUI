import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMobileComponent } from './dropdown-mobile.component';

describe('DropdownMobileComponent', () => {
  let component: DropdownMobileComponent;
  let fixture: ComponentFixture<DropdownMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
