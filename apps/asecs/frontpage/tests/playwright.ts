import { test, expect } from '@playwright/test';

test.describe('Glimja Smoke Tests', () => {
  test('Complete purchase flow', async ({ page }) => {
    // Start from the homepage
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Om Glimja – din hälsokostbutik på nätet' })).toBeVisible();


    // Navigate to a collection
    await page.click('text=Juicer');
    await expect(page).toHaveURL(/.*juice/);

    // Navigate to a product
    await page.click('.s-bRCV1Kfifybz');
    await expect(page).toHaveURL(/.*produkt\/.*/);

    // Add to cart
    await page.click('button:has-text("Lägg i varukorgen")');

    // Open mini cart
    await page.click('button[data-type="drawer-toggle"]');
    await expect(page.locator('.mini-cart')).toBeVisible();
    await expect(page.locator('aside')).toBeVisible();

    // Go to checkout
    await page.click('text=Gå till kassan');
    await expect(page).toHaveURL(/.*kassa/);

    // Verify Klarna Checkout is loaded
    await expect(page.frameLocator('#klarna-checkout-iframe').locator('#klarna-checkout-wrapper')).toBeVisible();

    // Complete Klarna Checkout (this part might need to be adjusted based on the test environment)
    // await page.frameLocator('#klarna-checkout-iframe').locator('input[name="email"]').fill('test@example.com');
    // await page.frameLocator('#klarna-checkout-iframe').locator('input[name="postal_code"]').fill('12345');
    // await page.frameLocator('#klarna-checkout-iframe').locator('button:has-text("Köp")').click();

    // // Verify order confirmation
    // await expect(page).toHaveURL(/.*kassa\/tack/);
    // await expect(page.locator('text=Tack för din beställning')).toBeVisible();
  });
});