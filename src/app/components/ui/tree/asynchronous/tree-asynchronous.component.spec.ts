import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeAsynchronousComponent } from './tree-asynchronous.component';

describe('TreeAsynchronousComponent', () => {
  let component: TreeAsynchronousComponent;
  let fixture: ComponentFixture<TreeAsynchronousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeAsynchronousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeAsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
