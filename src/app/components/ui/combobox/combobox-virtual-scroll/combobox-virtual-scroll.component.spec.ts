import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxVirtualScrollComponent } from './combobox-virtual-scroll.component';

describe('ComboboxVirtualScrollComponent', () => {
  let component: ComboboxVirtualScrollComponent;
  let fixture: ComponentFixture<ComboboxVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxVirtualScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
