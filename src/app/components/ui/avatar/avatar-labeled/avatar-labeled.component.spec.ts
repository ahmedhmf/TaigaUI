import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarLabeledComponent } from './avatar-labeled.component';

describe('AvatarLabeledComponent', () => {
  let component: AvatarLabeledComponent;
  let fixture: ComponentFixture<AvatarLabeledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarLabeledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarLabeledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
