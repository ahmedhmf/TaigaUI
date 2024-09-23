import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVerticalComponent } from './button-vertical.component';

describe('ButtonVerticalComponent', () => {
  let component: ButtonVerticalComponent;
  let fixture: ComponentFixture<ButtonVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
