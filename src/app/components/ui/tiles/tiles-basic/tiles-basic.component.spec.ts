import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesBasicComponent } from './tiles-basic.component';

describe('TilesBasicComponent', () => {
  let component: TilesBasicComponent;
  let fixture: ComponentFixture<TilesBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilesBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
