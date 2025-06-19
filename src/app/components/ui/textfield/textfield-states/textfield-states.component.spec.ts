import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldStatesComponent } from './textfield-states.component';

describe('TextfieldStatesComponent', () => {
  let component: TextfieldStatesComponent;
  let fixture: ComponentFixture<TextfieldStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfieldStatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
