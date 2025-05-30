import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldMaskComponent } from './textfield-mask.component';

describe('TextfieldMaskComponent', () => {
  let component: TextfieldMaskComponent;
  let fixture: ComponentFixture<TextfieldMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfieldMaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
