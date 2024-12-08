import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSizeContentComponent } from './chip-size-content.component';

describe('ChipSizeContentComponent', () => {
  let component: ChipSizeContentComponent;
  let fixture: ComponentFixture<ChipSizeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipSizeContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipSizeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
