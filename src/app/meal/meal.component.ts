import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})

export class MealComponent implements OnInit {
  // test:any = {
  //   "meal": {
  //       "idMeal": "53073",
  //       "strMeal": "Eggplant Adobo",
  //       "strDrinkAlternate": null,
  //       "strCategory": "Vegetarian",
  //       "strArea": "Filipino",
  //       "strInstructions": "1.\tSlice 1 lb. small Japanese or Italian eggplant (about 3) into quarters lengthwise, then cut crosswise into 2\"-wide pieces. Place in a medium bowl. Add 1 Tbsp. sugar, 1 tsp. Diamond Crystal or ½ tsp. Morton kosher salt, and ½ tsp. freshly ground black pepper. Toss to evenly coat eggplant and let sit at room temperature at least 20 minutes and up to 2 hours.\r\n2.\tPeel and thinly slice 8 garlic cloves. Add 3 Tbsp. vegetable oil and half of garlic to a medium Dutch oven or other heavy pot. Cook over medium-high heat, stirring constantly with a wooden spoon, until light golden and crisp, about 5 minutes. Using a slotted spoon, transfer garlic chips to a plate; season lightly with salt.\r\n3. Place 4 oz. ground pork in same pot and break up into small pieces with wooden spoon. Season with ¼ tsp. Diamond Crystal or Morton kosher salt and cook, undisturbed, until deeply browned underneath, about 5 minutes. Using a slotted spoon, transfer to another plate, leaving fat behind in the pot.\r\n4. Place eggplant on a clean kitchen towel and blot away any moisture the salt has drawn out.\r\n5. Working in batches and adding more oil if needed, cook eggplant in the same pot until lightly browned, about 3 minutes per side. Transfer to a plate with pork.\r\n6. Pour 1½ cups of water into the pot and scrape up browned bits from the bottom with a wooden spoon. Add remaining garlic, 3 Tbsp. coconut vinegar or unseasoned rice vinegar, 2 Tbsp. soy sauce, 2 bay leaves, 1 tsp. freshly ground black pepper, and remaining 1 Tbsp. sugar. Bring to a simmer, then return pork and eggplant to pot. Reduce heat to medium-low, partially cover, and simmer until eggplant is tender and silky and sauce is reduced by half, 20–25 minutes. Taste and season with more salt and pepper and add a little more sugar if needed.\r\n7. Top with garlic chips and serve with cooked white rice.\r\n",
  //       "strMealThumb": "https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg",
  //       "strTags": null,
  //       "strYoutube": "https://www.youtube.com/watch?v=pKXACYjwMns",
  //       "strIngredient1": "Egg Plants",
  //       "strIngredient2": "Sugar",
  //       "strIngredient3": "Salt",
  //       "strIngredient4": "Pepper",
  //       "strIngredient5": "Garlic",
  //       "strIngredient6": "Olive Oil",
  //       "strIngredient7": "Ground Pork",
  //       "strIngredient8": "Rice Vinegar",
  //       "strIngredient9": "Soy Sauce",
  //       "strIngredient10": "Bay Leaf",
  //       "strIngredient11": "",
  //       "strIngredient12": "",
  //       "strIngredient13": "",
  //       "strIngredient14": "",
  //       "strIngredient15": "",
  //       "strIngredient16": "",
  //       "strIngredient17": "",
  //       "strIngredient18": "",
  //       "strIngredient19": "",
  //       "strIngredient20": "",
  //       "strMeasure1": "1 lb",
  //       "strMeasure2": "2 tbs",
  //       "strMeasure3": "1 tsp ",
  //       "strMeasure4": "1 tsp ",
  //       "strMeasure5": "1 whole",
  //       "strMeasure6": "3 tbs",
  //       "strMeasure7": "4 oz ",
  //       "strMeasure8": "3 tbs",
  //       "strMeasure9": "2 tbs",
  //       "strMeasure10": "2",
  //       "strMeasure11": " ",
  //       "strMeasure12": " ",
  //       "strMeasure13": " ",
  //       "strMeasure14": " ",
  //       "strMeasure15": " ",
  //       "strMeasure16": " ",
  //       "strMeasure17": " ",
  //       "strMeasure18": " ",
  //       "strMeasure19": " ",
  //       "strMeasure20": " ",
  //       "strSource": "https://salu-salo.com/eggplant-adobo/",
  //       "strImageSource": null,
  //       "strCreativeCommonsConfirmed": null,
  //       "dateModified": null
  //   }
  // };

  mealImg:any;
  mealTitle:any;
  steps:any[] = [];;
  ingredients:any[] = [];
  ingredientsAmts:any[] = [];;

  @Input() meal:any;
  constructor(){}

  ngOnInit(){
    console.log(this.meal);
    this.mealTitle = this.meal.meals[0]["strMeal"];
    this.mealImg = this.meal.meals[0]["strMealThumb"];
    this.getIngredients()
    this.getIngredientAmts();
    this.getSteps();
  }

  getIngredients(){
    for(let i = 1; i <=20; i++){
      if(this.meal["meals"]["strIngredient"+i] != "")
        //console.log(this.test["meal"]["strIngredient"+i]);
        this.ingredients.push(this.meal.meals[0]["strIngredient"+i]);
    }
    //console.log(this.ingredients);
  }

  getIngredientAmts(){
    for(let i = 1; i <=20; i++){
      if(this.meal["meals"]["strMeasure"+i] != " ")
        //console.log(this.test["meal"]["strIngredient"+i]);
        this.ingredientsAmts.push(this.meal.meals[0]["strMeasure"+i]);
    }
    //console.log(this.ingredientsAmts);
  }

  getSteps(){
    const tempSteps = this.meal.meals[0]["strInstructions"].split('\r\n');
    if(tempSteps[tempSteps.length-1]=="") {tempSteps.pop();}
    for(let i = 0; i < tempSteps.length; i++){
      if(tempSteps[i].charAt(0) == i+1){
        tempSteps[i] = tempSteps[i].substring(3);
      }
    }
    this.steps = tempSteps.filter(item => item !== "" && !item.toUpperCase().includes("STEP"));
    //console.log(this.steps);
  }

}
"Preheat the oven to 180C/350F/Gas 4.\r\n\r\nFor the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.\r\n\r\nSprinkle over the flour and cook for a further 2-3 minutes.\r\n\r\nAdd the garlic and all the vegetables and fry for 1-2 minutes.\r\n\r\nStir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste. Season with salt and freshly ground black pepper.\r\n\r\nCover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.\r\n\r\nFor the dumplings, sift the flour, baking powder and salt into a bowl.\r\nAdd the suet and enough water to form a thick dough.\r\n\r\nWith floured hands, roll spoonfuls of the dough into small balls.\r\n\r\nAfter two hours, remove the lid from the stew and place the balls on top of the stew. Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have swollen and are tender. (If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.)\r\n\r\nTo serve, place a spoonful of mashed potato onto each of four serving plates and top with the stew and dumplings. Sprinkle with chopped parsley."