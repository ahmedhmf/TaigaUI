import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkLongTextComponent } from './link-long-text.component';

describe('LinkLongTextComponent', () => {
  let component: LinkLongTextComponent;
  let fixture: ComponentFixture<LinkLongTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkLongTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkLongTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
