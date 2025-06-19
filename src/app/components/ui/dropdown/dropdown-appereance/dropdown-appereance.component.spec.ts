import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAppereanceComponent } from './dropdown-appereance.component';

describe('DropdownAppereanceComponent', () => {
  let component: DropdownAppereanceComponent;
  let fixture: ComponentFixture<DropdownAppereanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownAppereanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownAppereanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
