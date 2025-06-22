import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smooth } from './smooth';

describe('Smooth', () => {
  let component: Smooth;
  let fixture: ComponentFixture<Smooth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smooth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smooth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
