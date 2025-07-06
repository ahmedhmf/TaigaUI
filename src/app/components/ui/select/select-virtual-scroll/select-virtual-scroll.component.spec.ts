import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVirtualScrollComponent } from './select-virtual-scroll.component';

describe('SelectVirtualScrollComponent', () => {
  let component: SelectVirtualScrollComponent;
  let fixture: ComponentFixture<SelectVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectVirtualScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
