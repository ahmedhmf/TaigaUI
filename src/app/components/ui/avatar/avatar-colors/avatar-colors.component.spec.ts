import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarColorsComponent } from './avatar-colors.component';

describe('AvatarColorsComponent', () => {
  let component: AvatarColorsComponent;
  let fixture: ComponentFixture<AvatarColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
