import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertConcurrencyComponent } from './alert-concurrency.component';

describe('AlertConcurrencyComponent', () => {
  let component: AlertConcurrencyComponent;
  let fixture: ComponentFixture<AlertConcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertConcurrencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertConcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
