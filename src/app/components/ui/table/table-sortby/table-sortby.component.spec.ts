import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortbyComponent } from './table-sortby.component';

describe('TableSortbyComponent', () => {
  let component: TableSortbyComponent;
  let fixture: ComponentFixture<TableSortbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSortbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSortbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
