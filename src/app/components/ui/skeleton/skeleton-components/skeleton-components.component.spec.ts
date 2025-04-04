import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonComponentsComponent } from './skeleton-components.component';

describe('SkeletonComponentsComponent', () => {
  let component: SkeletonComponentsComponent;
  let fixture: ComponentFixture<SkeletonComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
