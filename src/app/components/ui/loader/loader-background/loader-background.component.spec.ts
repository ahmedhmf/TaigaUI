import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBackgroundComponent } from './loader-background.component';

describe('LoaderBackgroundComponent', () => {
  let component: LoaderBackgroundComponent;
  let fixture: ComponentFixture<LoaderBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
