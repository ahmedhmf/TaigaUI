import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDirectiveComponent } from './group-directive.component';

describe('GroupDirectiveComponent', () => {
  let component: GroupDirectiveComponent;
  let fixture: ComponentFixture<GroupDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
