import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipInteractiveComponent } from './chip-interactive.component';

describe('ChipInteractiveComponent', () => {
  let component: ChipInteractiveComponent;
  let fixture: ComponentFixture<ChipInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipInteractiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
