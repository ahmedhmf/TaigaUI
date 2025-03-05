import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxAsyncComponent } from './combobox-async.component';

describe('ComboboxAsyncComponent', () => {
  let component: ComboboxAsyncComponent;
  let fixture: ComponentFixture<ComboboxAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxAsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
