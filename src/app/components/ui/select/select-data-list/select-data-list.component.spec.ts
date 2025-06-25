import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDataListComponent } from './select-data-list.component';

describe('SelectDataListComponent', () => {
  let component: SelectDataListComponent;
  let fixture: ComponentFixture<SelectDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDataListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
