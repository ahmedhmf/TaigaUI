import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBasicComponent } from './notification-basic.component';

describe('NotificationBasicComponent', () => {
  let component: NotificationBasicComponent;
  let fixture: ComponentFixture<NotificationBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
