import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockGroupsComponent } from './block-groups.component';

describe('BlockGroupsComponent', () => {
  let component: BlockGroupsComponent;
  let fixture: ComponentFixture<BlockGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
