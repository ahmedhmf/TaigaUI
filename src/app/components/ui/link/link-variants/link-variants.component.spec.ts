import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkVariantsComponent } from './link-variants.component';

describe('LinkVariantsComponent', () => {
  let component: LinkVariantsComponent;
  let fixture: ComponentFixture<LinkVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkVariantsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
