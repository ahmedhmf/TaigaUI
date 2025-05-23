import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadingComponent } from './button-loading.component';

describe('ButtonLoadingComponent', () => {
  let component: ButtonLoadingComponent;
  let fixture: ComponentFixture<ButtonLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
