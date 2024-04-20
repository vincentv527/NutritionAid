import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-meal',
  templateUrl: './find-meal.component.html',
  styleUrl: './find-meal.component.css'
})
export class FindMealComponent {
  choosenMeal:any;
  ciaChoices: any;
  profileForm = new FormGroup({
    cia: new FormControl(''),
    ciaSelection: new FormControl(''),
    mealSelection: new FormControl('')
  });
}
