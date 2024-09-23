import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconResolverComponent } from './icon-resolver.component';

describe('IconResolverComponent', () => {
  let component: IconResolverComponent;
  let fixture: ComponentFixture<IconResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconResolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
