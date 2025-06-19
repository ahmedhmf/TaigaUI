import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldDropDownComponent } from './textfield-drop-down.component';

describe('TextfieldDropDownComponent', () => {
  let component: TextfieldDropDownComponent;
  let fixture: ComponentFixture<TextfieldDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfieldDropDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
