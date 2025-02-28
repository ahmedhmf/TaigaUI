import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnsDynamicComponent } from './table-columns-dynamic.component';

describe('TableColumnsDynamicComponent', () => {
  let component: TableColumnsDynamicComponent;
  let fixture: ComponentFixture<TableColumnsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableColumnsDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableColumnsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
