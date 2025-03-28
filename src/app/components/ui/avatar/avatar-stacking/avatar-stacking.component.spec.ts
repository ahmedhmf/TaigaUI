import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarStackingComponent } from './avatar-stacking.component';

describe('AvatarStackingComponent', () => {
  let component: AvatarStackingComponent;
  let fixture: ComponentFixture<AvatarStackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarStackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarStackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
