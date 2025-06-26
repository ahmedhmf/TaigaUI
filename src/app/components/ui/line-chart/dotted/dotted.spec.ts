import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dotted } from './dotted';

describe('Dotted', () => {
  let component: Dotted;
  let fixture: ComponentFixture<Dotted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dotted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dotted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
