import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithDirectiveComponent } from './dialog-with-directive.component';

describe('DialogWithDirectiveComponent', () => {
  let component: DialogWithDirectiveComponent;
  let fixture: ComponentFixture<DialogWithDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogWithDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
