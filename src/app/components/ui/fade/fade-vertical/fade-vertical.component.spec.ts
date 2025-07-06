import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeVerticalComponent } from './fade-vertical.component';

describe('FadeVerticalComponent', () => {
  let component: FadeVerticalComponent;
  let fixture: ComponentFixture<FadeVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
