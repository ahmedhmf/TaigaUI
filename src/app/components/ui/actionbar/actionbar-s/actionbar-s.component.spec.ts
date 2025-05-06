import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbarSComponent } from './actionbar-s.component';

describe('ActionbarSComponent', () => {
  let component: ActionbarSComponent;
  let fixture: ComponentFixture<ActionbarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionbarSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionbarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
