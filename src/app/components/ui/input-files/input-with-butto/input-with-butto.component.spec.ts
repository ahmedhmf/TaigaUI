import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithButtoComponent } from './input-with-butto.component';

describe('InputWithButtoComponent', () => {
  let component: InputWithButtoComponent;
  let fixture: ComponentFixture<InputWithButtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithButtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithButtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
