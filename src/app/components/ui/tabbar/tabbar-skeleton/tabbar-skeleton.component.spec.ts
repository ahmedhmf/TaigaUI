import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarSkeletonComponent } from './tabbar-skeleton.component';

describe('TabbarSkeletonComponent', () => {
  let component: TabbarSkeletonComponent;
  let fixture: ComponentFixture<TabbarSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbarSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabbarSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
