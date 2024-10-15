import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCustomWidthComponent } from './loader-custom-width.component';

describe('LoaderCustomWidthComponent', () => {
  let component: LoaderCustomWidthComponent;
  let fixture: ComponentFixture<LoaderCustomWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderCustomWidthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderCustomWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
