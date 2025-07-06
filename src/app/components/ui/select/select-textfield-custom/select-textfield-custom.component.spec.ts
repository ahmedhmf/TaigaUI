import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTextfieldCustomComponent } from './select-textfield-custom.component';

describe('SelectTextfieldCustomComponent', () => {
  let component: SelectTextfieldCustomComponent;
  let fixture: ComponentFixture<SelectTextfieldCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTextfieldCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTextfieldCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
