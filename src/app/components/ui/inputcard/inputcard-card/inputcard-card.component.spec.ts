import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcardCardComponent } from './inputcard-card.component';

describe('InputcardCardComponent', () => {
  let component: InputcardCardComponent;
  let fixture: ComponentFixture<InputcardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputcardCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputcardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
