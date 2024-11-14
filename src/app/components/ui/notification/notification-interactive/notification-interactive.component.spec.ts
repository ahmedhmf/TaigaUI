import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationInteractiveComponent } from './notification-interactive.component';

describe('NotificationInteractiveComponent', () => {
  let component: NotificationInteractiveComponent;
  let fixture: ComponentFixture<NotificationInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationInteractiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
