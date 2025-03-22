import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsBasicComponent } from './breadcrumbs-basic.component';

describe('BreadcrumbsBasicComponent', () => {
  let component: BreadcrumbsBasicComponent;
  let fixture: ComponentFixture<BreadcrumbsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
