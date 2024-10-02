import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeLongComponent } from './badge-long.component';

describe('BadgeLongComponent', () => {
  let component: BadgeLongComponent;
  let fixture: ComponentFixture<BadgeLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeLongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
