import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarNativeComponent } from './scrollbar-native.component';

describe('ScrollbarNativeComponent', () => {
  let component: ScrollbarNativeComponent;
  let fixture: ComponentFixture<ScrollbarNativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarNativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
