import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAroundActiveComponent } from './pagination-around-active.component';

describe('PaginationAroundActiveComponent', () => {
  let component: PaginationAroundActiveComponent;
  let fixture: ComponentFixture<PaginationAroundActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationAroundActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationAroundActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
