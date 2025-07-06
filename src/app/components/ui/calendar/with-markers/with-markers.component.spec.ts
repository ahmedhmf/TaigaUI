import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMarkersComponent } from './with-markers.component';

describe('WithMarkersComponent', () => {
  let component: WithMarkersComponent;
  let fixture: ComponentFixture<WithMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithMarkersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
