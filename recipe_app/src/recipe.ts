export interface Recipe {
  name: string
  cookingTime: number
  steps: number
  mealType: string
  ingredients: Ingredient[]
  basic_people: number
  instructions: string[]
  description: string
  image: string
  seen: boolean
  liked?: boolean
  rating: number
}

export interface Ingredient {
  name: string
  quantity: number
  unit: string
}
