import { expect, test } from '../src/mocks/test'

test('should be 1', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('[data-testid="fetch-test"]')).toHaveText('1')
})
