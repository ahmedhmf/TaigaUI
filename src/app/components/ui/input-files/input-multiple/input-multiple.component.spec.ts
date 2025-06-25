import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMultipleComponent } from './input-multiple.component';

describe('InputMultipleComponent', () => {
  let component: InputMultipleComponent;
  let fixture: ComponentFixture<InputMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
