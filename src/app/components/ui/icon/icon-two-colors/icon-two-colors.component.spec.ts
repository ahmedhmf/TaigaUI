import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTwoColorsComponent } from './icon-two-colors.component';

describe('IconTwoColorsComponent', () => {
  let component: IconTwoColorsComponent;
  let fixture: ComponentFixture<IconTwoColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTwoColorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconTwoColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
