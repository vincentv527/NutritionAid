import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MealserviceComponent {

  constructor(private http:HttpClient) {

  }

  getRandomMeal(){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    return this.http.get(mealUrl);
  }

  getAreas(){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    return this.http.get(mealUrl);
  }

  getCats(){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    return this.http.get(mealUrl);
  }

  getIngs(){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
    return this.http.get(mealUrl);
  }

  getMealByIng(choiceString){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+choiceString;
    console.log("URL: " + mealUrl);
    return this.http.get(mealUrl);
  }

  getMealByCat(choiceString){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+choiceString;
    console.log("URL: " + mealUrl);
    return this.http.get(mealUrl);
  }

  getMealByArea(choiceString){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a="+choiceString;
    console.log("URL: " + mealUrl);
    return this.http.get(mealUrl);
  }

  getMealById(id){
    const mealUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id;
    console.log("URL: " + mealUrl);
    return this.http.get(mealUrl);
  }

}
