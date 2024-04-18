import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent {
  @Input() meal:any;
  
  constructor(){}
}
