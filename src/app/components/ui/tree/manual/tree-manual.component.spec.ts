import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeManualComponent } from './tree-manual.component';

describe('TreeManualComponent', () => {
  let component: TreeManualComponent;
  let fixture: ComponentFixture<TreeManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeManualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
