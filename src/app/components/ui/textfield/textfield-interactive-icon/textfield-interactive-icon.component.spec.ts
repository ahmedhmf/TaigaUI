import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldInteractiveIconComponent } from './textfield-interactive-icon.component';

describe('TextfieldInteractiveIconComponent', () => {
  let component: TextfieldInteractiveIconComponent;
  let fixture: ComponentFixture<TextfieldInteractiveIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfieldInteractiveIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldInteractiveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
