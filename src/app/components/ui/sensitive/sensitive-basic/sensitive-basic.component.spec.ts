import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveBasicComponent } from './sensitive-basic.component';

describe('SensitiveBasicComponent', () => {
  let component: SensitiveBasicComponent;
  let fixture: ComponentFixture<SensitiveBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensitiveBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensitiveBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
