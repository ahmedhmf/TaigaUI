import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupVerticalComponent } from './group-vertical.component';

describe('GroupVerticalComponent', () => {
  let component: GroupVerticalComponent;
  let fixture: ComponentFixture<GroupVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
