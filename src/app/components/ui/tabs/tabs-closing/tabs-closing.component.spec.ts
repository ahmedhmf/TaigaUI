import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsClosingComponent } from './tabs-closing.component';

describe('TabsClosingComponent', () => {
  let component: TabsClosingComponent;
  let fixture: ComponentFixture<TabsClosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsClosingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
