import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemdHandlerComponent } from './select-itemd-handler.component';

describe('SelectItemdHandlerComponent', () => {
  let component: SelectItemdHandlerComponent;
  let fixture: ComponentFixture<SelectItemdHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectItemdHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectItemdHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
