import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeMultilineComponent } from './fade-multiline.component';

describe('FadeMultilineComponent', () => {
  let component: FadeMultilineComponent;
  let fixture: ComponentFixture<FadeMultilineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeMultilineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeMultilineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
