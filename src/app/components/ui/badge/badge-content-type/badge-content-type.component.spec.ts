import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeContentTypeComponent } from './badge-content-type.component';

describe('BadgeContentTypeComponent', () => {
  let component: BadgeContentTypeComponent;
  let fixture: ComponentFixture<BadgeContentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeContentTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeContentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
