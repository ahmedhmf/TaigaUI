import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarButtonsComponent } from './tabbar-buttons.component';

describe('TabbarButtonsComponent', () => {
  let component: TabbarButtonsComponent;
  let fixture: ComponentFixture<TabbarButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbarButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabbarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
