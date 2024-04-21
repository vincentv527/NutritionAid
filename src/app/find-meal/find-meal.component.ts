import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MealserviceComponent } from '../services/mealservice/mealservice.component';

@Component({
  selector: 'app-find-meal',
  templateUrl: './find-meal.component.html',
  styleUrl: './find-meal.component.css'
})
export class FindMealComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number = 0;
  color: string = "rgba(189, 195, 1991, .4)";

  choosenMeal:any;
  ciaChoices: any[] = [];
  mealChoices: any[] = [];
  showChoices: boolean = false;
  showMeals: boolean = false;
  ciaChoiceChoosen: any;

  constructor(private mealService: MealserviceComponent){}

  onClickArea(){
    this.choosenMeal = false;
    this.showChoices = false;
    this.ciaChoiceChoosen = "area"
    this.ciaChoices = [];
    this.mealChoices = [];
    this.mealService.getAreas().subscribe((data: any)=>{
      for(let i = 0; i < data.meals.length; i++){
        this.ciaChoices.push(data.meals[i]["strArea"]);
      }
      this.showChoices = true;
      console.log(this.ciaChoices);
    })
  }

  onClickCat(){
    this.choosenMeal = false;
    this.showChoices = false;
    this.ciaChoiceChoosen = "cat"
    this.ciaChoices = [];
    this.mealChoices = [];
    this.mealService.getCats().subscribe((data:any)=>{
      for(let i = 0; i < data.meals.length; i++){
        this.ciaChoices.push(data.meals[i]["strCategory"]);
      }
      this.showChoices = true;
      console.log(this.ciaChoices);
    })
  }

  onClickIng(){
    this.choosenMeal = false;
    this.showChoices = false;
    this.ciaChoiceChoosen = "ing"
    this.ciaChoices = [];
    this.mealChoices = [];
    this.mealService.getIngs().subscribe((data:any)=>{
      for(let i = 0; i < data.meals.length; i++){
        this.ciaChoices.push(data.meals[i]["strIngredient"]);
      }
      this.showChoices = true;
      console.log(data);
    })
  }

  onClickChoice(choiceString: string){
    choiceString = choiceString.replaceAll(" ","_");
    console.log("Choice: " + choiceString);
    this.ciaChoices = [];
    this.mealChoices = [];

    switch(this.ciaChoiceChoosen){
      case "cat":{
        this.mealService.getMealByCat(choiceString).subscribe((data: any)=>{
          for(let i = 0; i < data.meals.length; i++){
            this.mealChoices.push(data.meals[i]);
          }
          this.showChoices = false;
          this.showMeals = true;
          console.log(this.mealChoices);
          console.log(data);
        });
        break;
      }
      case "ing":{
        this.mealService.getMealByIng(choiceString).subscribe((data:any)=>{
          for(let i = 0; i < data.meals.length; i++){
            this.mealChoices.push(data.meals[i]);
          }
          this.showChoices = false;
          this.showMeals = true;
          console.log(this.mealChoices);
          console.log(data);
        });
        break;
      }
      case "area":{
        this.mealService.getMealByArea(choiceString).subscribe((data:any)=>{
          for(let i = 0; i < data.meals.length; i++){
            this.mealChoices.push(data.meals[i]);
          }
          this.showChoices = false;
          this.showMeals = true;
          console.log(this.mealChoices);
          console.log(data);
        });
        break;
      }
    }
  }

  onClickMeal(id){
    this.showMeals = false;
    this.showChoices = false;
    this.mealService.getMealById(id).subscribe((data:any)=>{
      this.choosenMeal = data;
    })
  }
}
