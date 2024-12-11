import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDirectiveComponent } from './alert-directive.component';

describe('AlertDirectiveComponent', () => {
  let component: AlertDirectiveComponent;
  let fixture: ComponentFixture<AlertDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDirectiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
