import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsBasicComponent } from './tabs-basic.component';

describe('TabsBasicComponent', () => {
  let component: TabsBasicComponent;
  let fixture: ComponentFixture<TabsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
