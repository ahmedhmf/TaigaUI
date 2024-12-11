import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationOptionsComponent } from './notification-options.component';

describe('NotificationOptionsComponent', () => {
  let component: NotificationOptionsComponent;
  let fixture: ComponentFixture<NotificationOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
