import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsStylesComponent } from './tabs-styles.component';

describe('TabsStylesComponent', () => {
  let component: TabsStylesComponent;
  let fixture: ComponentFixture<TabsStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsStylesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
