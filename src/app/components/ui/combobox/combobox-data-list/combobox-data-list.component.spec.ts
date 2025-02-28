import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxDataListComponent } from './combobox-data-list.component';

describe('ComboboxDataListComponent', () => {
  let component: ComboboxDataListComponent;
  let fixture: ComponentFixture<ComboboxDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxDataListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
