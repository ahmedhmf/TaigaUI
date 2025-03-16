import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleBasicComponent } from './ripple-basic.component';

describe('RippleBasicComponent', () => {
  let component: RippleBasicComponent;
  let fixture: ComponentFixture<RippleBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RippleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
