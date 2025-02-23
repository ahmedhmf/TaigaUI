import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPlatformsComponent } from './checkbox-platforms.component';

describe('CheckboxPlatformsComponent', () => {
  let component: CheckboxPlatformsComponent;
  let fixture: ComponentFixture<CheckboxPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxPlatformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
