import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintAutoComponent } from './hint-auto.component';

describe('HintAutoComponent', () => {
  let component: HintAutoComponent;
  let fixture: ComponentFixture<HintAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
