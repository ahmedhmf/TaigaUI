import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintCustomComponent } from './hint-custom.component';

describe('HintCustomComponent', () => {
  let component: HintCustomComponent;
  let fixture: ComponentFixture<HintCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
