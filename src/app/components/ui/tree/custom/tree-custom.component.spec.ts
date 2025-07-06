import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCustomComponent } from './tree-custom.component';

describe('TreeCustomComponent', () => {
  let component: TreeCustomComponent;
  let fixture: ComponentFixture<TreeCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
