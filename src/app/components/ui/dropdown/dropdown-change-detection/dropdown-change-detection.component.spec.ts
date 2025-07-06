import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownChangeDetectionComponent } from './dropdown-change-detection.component';

describe('DropdownChangeDetectionComponent', () => {
  let component: DropdownChangeDetectionComponent;
  let fixture: ComponentFixture<DropdownChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownChangeDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
