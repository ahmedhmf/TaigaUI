import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldFieldsetComponent } from './textfield-fieldset.component';

describe('TextfieldFieldsetComponent', () => {
  let component: TextfieldFieldsetComponent;
  let fixture: ComponentFixture<TextfieldFieldsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfieldFieldsetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
