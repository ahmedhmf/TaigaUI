import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeProgrammaticControlComponent } from './tree-programmatic-control.component';

describe('TreeProgrammaticControlComponent', () => {
  let component: TreeProgrammaticControlComponent;
  let fixture: ComponentFixture<TreeProgrammaticControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeProgrammaticControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeProgrammaticControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
