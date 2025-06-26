import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomContentComponent } from './select-custom-content.component';

describe('SelectCustomContentComponent', () => {
  let component: SelectCustomContentComponent;
  let fixture: ComponentFixture<SelectCustomContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCustomContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
