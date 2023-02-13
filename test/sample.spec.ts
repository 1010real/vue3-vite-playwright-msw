import { expect, test } from '@playwright/test'

test('should be 1', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('[data-testid="fetch-test"]')).toHaveText('1')
})
