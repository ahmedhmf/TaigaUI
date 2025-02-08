import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarCustomizationComponent } from './tabbar-customization.component';

describe('TabbarCustomizationComponent', () => {
  let component: TabbarCustomizationComponent;
  let fixture: ComponentFixture<TabbarCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbarCustomizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabbarCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
