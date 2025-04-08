import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarContentTypesComponent } from './avatar-content-types.component';

describe('AvatarContentTypesComponent', () => {
  let component: AvatarContentTypesComponent;
  let fixture: ComponentFixture<AvatarContentTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarContentTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarContentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
