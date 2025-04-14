import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHeaderComponent } from './food-header.component';

describe('FoodHeaderComponent', () => {
  let component: FoodHeaderComponent;
  let fixture: ComponentFixture<FoodHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
