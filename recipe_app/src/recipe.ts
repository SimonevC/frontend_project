export interface Recipe {
  name: string
  cookingTime: number
  steps: number
  mealType: string
  ingredients: 
  description: string
  image: string
  seen?: boolean
  liked?: boolean
}
