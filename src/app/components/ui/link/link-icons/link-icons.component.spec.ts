import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIconsComponent } from './link-icons.component';

describe('LinkIconsComponent', () => {
  let component: LinkIconsComponent;
  let fixture: ComponentFixture<LinkIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
