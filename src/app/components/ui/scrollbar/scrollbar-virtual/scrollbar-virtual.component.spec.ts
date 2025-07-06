import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarVirtualComponent } from './scrollbar-virtual.component';

describe('ScrollbarVirtualComponent', () => {
  let component: ScrollbarVirtualComponent;
  let fixture: ComponentFixture<ScrollbarVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
