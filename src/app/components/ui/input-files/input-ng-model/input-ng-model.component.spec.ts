import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNgModelComponent } from './input-ng-model.component';

describe('InputNgModelComponent', () => {
  let component: InputNgModelComponent;
  let fixture: ComponentFixture<InputNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNgModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
