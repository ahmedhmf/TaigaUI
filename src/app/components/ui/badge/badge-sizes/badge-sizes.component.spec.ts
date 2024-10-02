import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSizesComponent } from './badge-sizes.component';

describe('BadgeSizesComponent', () => {
  let component: BadgeSizesComponent;
  let fixture: ComponentFixture<BadgeSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeSizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
