import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLoadingUnavailableImageComponent } from './with-loading-unavailable-image.component';

describe('WithLoadingUnavailableImageComponent', () => {
  let component: WithLoadingUnavailableImageComponent;
  let fixture: ComponentFixture<WithLoadingUnavailableImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithLoadingUnavailableImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithLoadingUnavailableImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
