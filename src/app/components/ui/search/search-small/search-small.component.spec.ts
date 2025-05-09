import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSmallComponent } from './search-small.component';

describe('SearchSmallComponent', () => {
  let component: SearchSmallComponent;
  let fixture: ComponentFixture<SearchSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
