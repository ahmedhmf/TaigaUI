import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTransformerComponent } from './value-transformer.component';

describe('ValueTransformerComponent', () => {
  let component: ValueTransformerComponent;
  let fixture: ComponentFixture<ValueTransformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueTransformerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueTransformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
