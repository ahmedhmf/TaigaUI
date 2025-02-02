import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationEdgePagesComponent } from './pagination-edge-pages.component';

describe('PaginationEdgePagesComponent', () => {
  let component: PaginationEdgePagesComponent;
  let fixture: ComponentFixture<PaginationEdgePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationEdgePagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationEdgePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
