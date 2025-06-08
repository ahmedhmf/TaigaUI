import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCameraComponent } from './input-camera.component';

describe('InputCameraComponent', () => {
  let component: InputCameraComponent;
  let fixture: ComponentFixture<InputCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
