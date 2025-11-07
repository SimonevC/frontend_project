import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has header', async ({ page }) => {
  await expect(page.getByText('Recipes')).toBeVisible()
})

test('like recipe and find recipe on liked recipes page', async ({ page }) => {
  await page.goto('http://localhost:5174/discover')
  await page.getByText('Like', { exact: true }).click()
  await page.getByText('liked').click()
  await expect(page.getByText('Chocolate Lava Cake Cooking')).toBeVisible()
})

test('dislike recipe and expect to not be visible', async ({ page }) => {
  await page.goto('http://localhost:5174/discover')
  await page.getByText('Dislike').click()
  await expect(page.getByText('Chocolate Lava Cake Cooking')).toBeHidden()
})

test('view recipe on liked recipe page', async ({ page }) => {
  await page.goto('http://localhost:5174/discover')
  await page.getByText('Like', { exact: true }).click()
  await page.getByText('liked').click()
  await page.getByText('View Recipe').click()
  await expect(page.getByRole('heading', { name: 'Chocolate Lava Cake' }).nth(1)).toBeVisible()
})

test('add ingredients to shopping list', async ({ page }) => {
  await page.goto('http://localhost:5174/discover')
  await page.getByText('Like', { exact: true }).click()
  await page.getByText('liked').click()
  await page.getByText('View Recipe').click()
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`)
    dialog.dismiss().catch(() => {})
  })
  await page.getByText('Add to Shopping List').click()
  await page.getByText('shopping', { exact: true }).click()
  await expect(page.getByText('115 g Dark chocolate113 g')).toBeVisible()
})

test('remove ingredients from shopping list and get empty shopping list', async ({ page }) => {
  await page.goto('http://localhost:5174/discover')
  await page.getByText('Like', { exact: true }).click()
  await page.getByText('liked').click()
  await page.getByText('View Recipe').click()
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`)
    dialog.dismiss().catch(() => {})
  })
  await page.getByText('Add to Shopping List').click()
  await page.getByText('shopping', { exact: true }).click()
  await page.getByText('Clear Shopping List').click()
  await expect(page.getByText('Your shopping list is empty!')).toBeVisible()
})
