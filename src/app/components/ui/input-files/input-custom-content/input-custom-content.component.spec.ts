import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomContentComponent } from './input-custom-content.component';

describe('InputCustomContentComponent', () => {
  let component: InputCustomContentComponent;
  let fixture: ComponentFixture<InputCustomContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCustomContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
