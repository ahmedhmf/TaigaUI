import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDirectiveComponent } from './with-directive.component';

describe('WithDirectiveComponent', () => {
  let component: WithDirectiveComponent;
  let fixture: ComponentFixture<WithDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
