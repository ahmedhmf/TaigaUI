import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDiComponent } from './badge-di.component';

describe('BadgeDiComponent', () => {
  let component: BadgeDiComponent;
  let fixture: ComponentFixture<BadgeDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeDiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
