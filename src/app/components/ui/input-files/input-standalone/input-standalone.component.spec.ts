import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStandaloneComponent } from './input-standalone.component';

describe('InputStandaloneComponent', () => {
  let component: InputStandaloneComponent;
  let fixture: ComponentFixture<InputStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
