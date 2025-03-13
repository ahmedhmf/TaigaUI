import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeArrayComponent } from './tree-array.component';

describe('TreeArrayComponent', () => {
  let component: TreeArrayComponent;
  let fixture: ComponentFixture<TreeArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
