import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExternalComponent } from './icon-external.component';

describe('IconExternalComponent', () => {
  let component: IconExternalComponent;
  let fixture: ComponentFixture<IconExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconExternalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
