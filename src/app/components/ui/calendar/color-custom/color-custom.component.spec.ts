import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCustomComponent } from './color-custom.component';

describe('ColorCustomComponent', () => {
  let component: ColorCustomComponent;
  let fixture: ComponentFixture<ColorCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
