import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbarTopPositionComponent } from './actionbar-top-position.component';

describe('ActionbarTopPositionComponent', () => {
  let component: ActionbarTopPositionComponent;
  let fixture: ComponentFixture<ActionbarTopPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionbarTopPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionbarTopPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
