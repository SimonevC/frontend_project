export interface Recipe {
  name: string
  cookingTime: number
  steps: number
  mealType: string
  description: string
  image: string
  liked?: boolean
}
