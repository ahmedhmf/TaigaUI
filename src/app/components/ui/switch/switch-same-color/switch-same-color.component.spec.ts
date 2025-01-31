import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSameColorComponent } from './switch-same-color.component';

describe('SwitchSameColorComponent', () => {
  let component: SwitchSameColorComponent;
  let fixture: ComponentFixture<SwitchSameColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchSameColorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchSameColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
