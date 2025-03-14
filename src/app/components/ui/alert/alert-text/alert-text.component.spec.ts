import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTextComponent } from './alert-text.component';

describe('AlertTextComponent', () => {
  let component: AlertTextComponent;
  let fixture: ComponentFixture<AlertTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
