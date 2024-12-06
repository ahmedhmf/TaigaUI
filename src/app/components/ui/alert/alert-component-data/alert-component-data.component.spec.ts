import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponentDataComponent } from './alert-component-data.component';

describe('AlertComponentDataComponent', () => {
  let component: AlertComponentDataComponent;
  let fixture: ComponentFixture<AlertComponentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponentDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertComponentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
