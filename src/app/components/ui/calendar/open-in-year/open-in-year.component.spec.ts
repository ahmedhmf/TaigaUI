import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInYearComponent } from './open-in-year.component';

describe('OpenInYearComponent', () => {
  let component: OpenInYearComponent;
  let fixture: ComponentFixture<OpenInYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenInYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenInYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
