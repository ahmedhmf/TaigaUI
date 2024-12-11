import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementContainerComponent } from './element-container.component';

describe('ElementContainerComponent', () => {
  let component: ElementContainerComponent;
  let fixture: ComponentFixture<ElementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
