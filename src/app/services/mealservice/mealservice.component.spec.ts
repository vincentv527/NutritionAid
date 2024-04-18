import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealserviceComponent } from './mealservice.component';

describe('MealserviceComponent', () => {
  let component: MealserviceComponent;
  let fixture: ComponentFixture<MealserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
