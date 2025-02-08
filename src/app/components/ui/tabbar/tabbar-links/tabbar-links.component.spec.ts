import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarLinksComponent } from './tabbar-links.component';

describe('TabbarLinksComponent', () => {
  let component: TabbarLinksComponent;
  let fixture: ComponentFixture<TabbarLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbarLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabbarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
