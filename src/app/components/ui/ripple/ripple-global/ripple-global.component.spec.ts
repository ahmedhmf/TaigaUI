import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleGlobalComponent } from './ripple-global.component';

describe('RippleGlobalComponent', () => {
  let component: RippleGlobalComponent;
  let fixture: ComponentFixture<RippleGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RippleGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
