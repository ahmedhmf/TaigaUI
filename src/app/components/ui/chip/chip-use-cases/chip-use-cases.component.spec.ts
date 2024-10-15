import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipUseCasesComponent } from './chip-use-cases.component';

describe('ChipUseCasesComponent', () => {
  let component: ChipUseCasesComponent;
  let fixture: ComponentFixture<ChipUseCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipUseCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipUseCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
