import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsOverflowComponent } from './breadcrumbs-overflow.component';

describe('BreadcrumbsOverflowComponent', () => {
  let component: BreadcrumbsOverflowComponent;
  let fixture: ComponentFixture<BreadcrumbsOverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsOverflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
