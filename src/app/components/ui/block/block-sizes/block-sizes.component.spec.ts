import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSizesComponent } from './block-sizes.component';

describe('BlockSizesComponent', () => {
  let component: BlockSizesComponent;
  let fixture: ComponentFixture<BlockSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
