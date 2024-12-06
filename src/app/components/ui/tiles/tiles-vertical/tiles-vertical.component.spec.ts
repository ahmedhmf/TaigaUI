import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesVerticalComponent } from './tiles-vertical.component';

describe('TilesVerticalComponent', () => {
  let component: TilesVerticalComponent;
  let fixture: ComponentFixture<TilesVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilesVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
