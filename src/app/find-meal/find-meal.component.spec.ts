import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMealComponent } from './find-meal.component';

describe('FindMealComponent', () => {
  let component: FindMealComponent;
  let fixture: ComponentFixture<FindMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindMealComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
