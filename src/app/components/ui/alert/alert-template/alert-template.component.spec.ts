import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTemplateComponent } from './alert-template.component';

describe('AlertTemplateComponent', () => {
  let component: AlertTemplateComponent;
  let fixture: ComponentFixture<AlertTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
