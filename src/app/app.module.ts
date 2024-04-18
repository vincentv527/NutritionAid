import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FindMealComponent } from './find-meal/find-meal.component';
import { RandomMealComponent } from './random-meal/random-meal.component';
import { HttpClientModule } from '@angular/common/http';
import { MealserviceComponent } from './services/mealservice/mealservice.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'randomMeal',
    component: RandomMealComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindMealComponent,
    RandomMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MealserviceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
