# PWA design

## Job Stories

- When I look at recipes, I want clear step-by-step instructions, so I can cook without getting confused
- When I find a recipe I want to save for later, I want to save it quickly to my personal collection, so I can make it again later without searching
- When I complete a recipe, I want to rate and share my recipe
- When I browse recipes on my phone during grocery shopping, I want the layout to adapt smoothly to my small screen, so I can check ingredients without scrolling endlessly
- When I install the app on my home screen, I want the icon and interface to clearly represent the app so I can find it quickly

## Example Mapping

### Rule 1:

When the user finds a recipe that they want to save for later, they can save the recipe in their app

### Example 1.1:

The one where a user scrolls through the recipes, clicks on a recipe and clicks on the 'save' button

User opens the app and navigates to the recipes page
User scrolls through the recipes page
User clicks on a recipe
User reads through the recipe
User clicks on 'save'
User goes back to the recipes page and continues scrolling other recipes

### Example 1.2:

The one where a user scrolls through the recipes, clicks on a recipe and goes back scrolling other recipes

User opens the app and navigates to the recipes page
User scrolls through the recipes page
User clicks on a recipe
User reads through the recipe
User goes back to the recipes page and continues scrolling other recipes

### Rule 2:

When viewing a recipe, the user gets a clear overview of the steps, ingredients and an image of the finished recipe

### Example 2.1:

The one where the user goes to a recipe, reads through the steps, ingredients and looks at the image and decides to make it

User opens the app and navigates to the recipes page
User scrolls through the recipes page
User clicks on a recipe
User reads through the steps
User reads the ingredients
User looks at the recipe image
User decides to make the recipe

### Example 2.2:

The one where the user goes to a recipe, reads through the steps, ingredients and looks at the image and decides not to make it

User opens the app and navigates to the recipes page
User scrolls through the recipes page
User clicks on a recipe
User reads through the steps
User reads the ingredients
User looks at the recipe image
User decides not to make the recipe

### Rule 3:

When having baked/cooked a recipe the user can rate and/or share the recipe

### Example 3.1:

User opens the app and navigates to the recipes page
User scrolls through the recipes page
User clicks on a recipe
User gives the recipe a rating

### Example 3.2:

User opens the app and navigates to the recipes page
User scrolls through the recipes page
User clicks on a recipe
User clicks on the 'share' button
User shares the recipe to a friend on iMessage

## Domain Model

```plantuml
!include https://sd42.nl/static/style-light.plantuml

entity "Recipe" as Recipe {
  *name
  *description
}

entity "User" as User {
  *name
}

entity "Seen_recipe" as Seen_recipe {
  *has_liked
}

entity "Rating" as Rating {
  *rating_number
}

entity "Ingredient" as Ingredient {
  *name
}

entity "Ingredient_amount" as Ingredient_amount {
  *quantity_per_person
}

entity "Step" as Step {
  *name
  *description
}

Recipe ||--o{ Step
User ||--o{ Rating
Rating }o--|| Recipe
User }o--o{ Seen_recipe
Seen_recipe }o--o{ Recipe
Ingredient_amount }o--|| Ingredient
Recipe ||--o{ Ingredient_amount


```

## Low Fidelity Prototype

todo: include wiretext files or link to your desing in QuantUX, Figma or ....
