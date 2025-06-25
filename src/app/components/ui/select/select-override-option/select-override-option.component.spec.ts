import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOverrideOptionComponent } from './select-override-option.component';

describe('SelectOverrideOptionComponent', () => {
  let component: SelectOverrideOptionComponent;
  let fixture: ComponentFixture<SelectOverrideOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectOverrideOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOverrideOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
