import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSizesComponent } from './avatar-sizes.component';

describe('AvatarSizesComponent', () => {
  let component: AvatarSizesComponent;
  let fixture: ComponentFixture<AvatarSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarSizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
