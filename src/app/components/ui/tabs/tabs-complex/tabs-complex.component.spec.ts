import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComplexComponent } from './tabs-complex.component';

describe('TabsComplexComponent', () => {
  let component: TabsComplexComponent;
  let fixture: ComponentFixture<TabsComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
