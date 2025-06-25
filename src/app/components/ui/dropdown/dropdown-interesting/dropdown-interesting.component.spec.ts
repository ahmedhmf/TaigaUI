import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInterestingComponent } from './dropdown-interesting.component';

describe('DropdownInterestingComponent', () => {
  let component: DropdownInterestingComponent;
  let fixture: ComponentFixture<DropdownInterestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownInterestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownInterestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
