import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveralLinesHints } from './several-lines-hints';

describe('SeveralLinesHints', () => {
  let component: SeveralLinesHints;
  let fixture: ComponentFixture<SeveralLinesHints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeveralLinesHints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeveralLinesHints);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
