import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioIdentityMatcherComponent } from './radio-identity-matcher.component';

describe('RadioIdentityMatcherComponent', () => {
  let component: RadioIdentityMatcherComponent;
  let fixture: ComponentFixture<RadioIdentityMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioIdentityMatcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioIdentityMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
