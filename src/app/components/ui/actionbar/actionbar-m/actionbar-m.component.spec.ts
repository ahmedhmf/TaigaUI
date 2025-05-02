import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbarMComponent } from './actionbar-m.component';

describe('ActionbarMComponent', () => {
  let component: ActionbarMComponent;
  let fixture: ComponentFixture<ActionbarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionbarMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionbarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
