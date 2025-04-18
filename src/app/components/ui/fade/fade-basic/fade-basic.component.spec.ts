import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeBasicComponent } from './fade-basic.component';

describe('FadeBasicComponent', () => {
  let component: FadeBasicComponent;
  let fixture: ComponentFixture<FadeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
