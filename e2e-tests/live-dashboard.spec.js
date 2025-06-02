const { test, expect } = require('@playwright/test');

test.describe('Confomap Live Dashboard Test', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://confomap.com/auth/login');

    // Fill in login form
    const username = process.env.CONFOMAP_USERNAME || require('../playwright.env.json').username;
    const password = process.env.CONFOMAP_PASSWORD || require('../playwright.env.json').password;

    await page.fill('input[name="Email"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="Login"]');

    // Verify redirect to dashboard
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('verifies live dashboard elements', async ({ page }) => {
    // Verify Documents card
    await expect(page.locator('text=0')).toBeVisible(); // Documents count from screenshot
    await expect(page.locator('text=Documents')).toBeVisible();
    await expect(page.locator('button', { hasText: 'View Documents' })).toBeVisible();

    // Verify Departments card
    await expect(page.locator('text=0')).toBeVisible(); // Departments count
    await expect(page.locator('text=Departments')).toBeVisible();
    await expect(page.locator('button', { hasText: 'View Departments' })).toBeVisible();

    // Verify Users card
    await expect(page.locator('text=1')).toBeVisible(); // Users count
    await expect(page.locator('text=Users')).toBeVisible();
    await expect(page.locator('button', { hasText: 'View Users' })).toBeVisible();

    // Verify Clauses card
    await expect(page.locator('text=0')).toBeVisible(); // Clauses count
    await expect(page.locator('text=Clauses')).toBeVisible();
    await expect(page.locator('button', { hasText: 'View Clauses' })).toBeVisible();

    // Verify Evidences card
    await expect(page.locator('text=0')).toBeVisible(); // Evidences count
    await expect(page.locator('text=Evidences')).toBeVisible();
    await expect(page.locator('button', { hasText: 'View Evidences' })).toBeVisible();
  });
});