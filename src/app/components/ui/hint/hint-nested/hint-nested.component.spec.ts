import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintNestedComponent } from './hint-nested.component';

describe('HintNestedComponent', () => {
  let component: HintNestedComponent;
  let fixture: ComponentFixture<HintNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintNestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
