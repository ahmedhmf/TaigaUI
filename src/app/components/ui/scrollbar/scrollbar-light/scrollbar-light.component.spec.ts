import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarLightComponent } from './scrollbar-light.component';

describe('ScrollbarLightComponent', () => {
  let component: ScrollbarLightComponent;
  let fixture: ComponentFixture<ScrollbarLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollbarLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
