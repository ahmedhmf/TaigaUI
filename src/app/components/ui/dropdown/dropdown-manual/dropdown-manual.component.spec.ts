import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownManualComponent } from './dropdown-manual.component';

describe('DropdownManualComponent', () => {
  let component: DropdownManualComponent;
  let fixture: ComponentFixture<DropdownManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownManualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
