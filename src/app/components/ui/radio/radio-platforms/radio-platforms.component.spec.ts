import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPlatformsComponent } from './radio-platforms.component';

describe('RadioPlatformsComponent', () => {
  let component: RadioPlatformsComponent;
  let fixture: ComponentFixture<RadioPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPlatformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
