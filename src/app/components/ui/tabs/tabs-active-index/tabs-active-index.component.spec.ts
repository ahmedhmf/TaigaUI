import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsActiveIndexComponent } from './tabs-active-index.component';

describe('TabsActiveIndexComponent', () => {
  let component: TabsActiveIndexComponent;
  let fixture: ComponentFixture<TabsActiveIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsActiveIndexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsActiveIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
