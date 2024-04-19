import { Component, OnInit } from '@angular/core';
import { MealserviceComponent } from '../services/mealservice/mealservice.component';

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrl: './random-meal.component.css'
})
export class RandomMealComponent {
  randomMeal: any;

  constructor(private mealService: MealserviceComponent){}

  ngOnInit():void{
    this.mealService.getRandomMeal().subscribe((data)=>{
      this.randomMeal = data;
      //console.log(this.randomMeal);
    })
  }

}
