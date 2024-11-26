import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCustomComponent } from './block-custom.component';

describe('BlockCustomComponent', () => {
  let component: BlockCustomComponent;
  let fixture: ComponentFixture<BlockCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
