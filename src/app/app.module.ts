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
import { MealComponent } from './meal/meal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'findMeal',
    component: FindMealComponent
  },
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
    RandomMealComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatRippleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MealserviceComponent, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
