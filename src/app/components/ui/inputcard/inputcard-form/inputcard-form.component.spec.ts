import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcardFormComponent } from './inputcard-form.component';

describe('InputcardFormComponent', () => {
  let component: InputcardFormComponent;
  let fixture: ComponentFixture<InputcardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputcardFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputcardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
