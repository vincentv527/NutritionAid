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
    const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    return this.http.get(randomMealUrl);
  }

}
