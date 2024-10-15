import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderOptionsComponent } from './loader-options.component';

describe('LoaderOptionsComponent', () => {
  let component: LoaderOptionsComponent;
  let fixture: ComponentFixture<LoaderOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
