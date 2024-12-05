import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDiComponent } from './button-di.component';

describe('ButtonDiComponent', () => {
  let component: ButtonDiComponent;
  let fixture: ComponentFixture<ButtonDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
