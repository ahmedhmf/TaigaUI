import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfiedlSizeComponent } from './textfiedl-size.component';

describe('TextfiedlSizeComponent', () => {
  let component: TextfiedlSizeComponent;
  let fixture: ComponentFixture<TextfiedlSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfiedlSizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfiedlSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
