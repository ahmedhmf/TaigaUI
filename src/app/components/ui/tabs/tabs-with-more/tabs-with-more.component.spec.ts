import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithMoreComponent } from './tabs-with-more.component';

describe('TabsWithMoreComponent', () => {
  let component: TabsWithMoreComponent;
  let fixture: ComponentFixture<TabsWithMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsWithMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsWithMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
