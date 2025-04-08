import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarOutlineComponent } from './avatar-outline.component';

describe('AvatarOutlineComponent', () => {
  let component: AvatarOutlineComponent;
  let fixture: ComponentFixture<AvatarOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarOutlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
