import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveComponentsComponent } from './sensitive-components.component';

describe('SensitiveComponentsComponent', () => {
  let component: SensitiveComponentsComponent;
  let fixture: ComponentFixture<SensitiveComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensitiveComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensitiveComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
