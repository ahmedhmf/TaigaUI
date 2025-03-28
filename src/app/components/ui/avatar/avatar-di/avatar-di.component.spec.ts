import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDiComponent } from './avatar-di.component';

describe('AvatarDiComponent', () => {
  let component: AvatarDiComponent;
  let fixture: ComponentFixture<AvatarDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
