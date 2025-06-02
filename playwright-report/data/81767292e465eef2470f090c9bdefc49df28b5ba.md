# Test info

- Name: Confomap Live Dashboard Test >> verifies live dashboard elements
- Location: C:\Users\delun\OneDrive\Documents\work\confomap-dashboard\e2e-tests\live-dashboard.spec.js:20:3

# Error details

```
TimeoutError: page.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[name="Email"]')

    at C:\Users\delun\OneDrive\Documents\work\confomap-dashboard\e2e-tests\live-dashboard.spec.js:12:16
```

# Page snapshot

```yaml
- heading "Bandwidth Quota Exceeded" [level=1]
- paragraph: This site has exceeded its monthly quota for bandwidth. It must be upgraded via the Firebase console before it can begin serving traffic again.
- heading "This is my site. What do I do?" [level=2]
- paragraph:
  - text: Visit the
  - link "Firebase console":
    - /url: https://console.firebase.google.com/
  - text: and upgrade the billing plan for this project. If you encounter any issues upgrading, please
  - link "reach out to support":
    - /url: https://firebase.google.com/support/contact/account-services/
  - text: for additional help.
- link:
  - /url: https://firebase.google.com
  - img
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test.describe('Confomap Live Dashboard Test', () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     // Navigate to the login page
   6 |     await page.goto('https://confomap.com/auth/login');
   7 |
   8 |     // Fill in login form
   9 |     const username = process.env.CONFOMAP_USERNAME || require('../playwright.env.json').username;
  10 |     const password = process.env.CONFOMAP_PASSWORD || require('../playwright.env.json').password;
  11 |
> 12 |     await page.fill('input[name="Email"]', username);
     |                ^ TimeoutError: page.fill: Timeout 10000ms exceeded.
  13 |     await page.fill('input[name="password"]', password);
  14 |     await page.click('button[type="Login"]');
  15 |
  16 |     // Verify redirect to dashboard
  17 |     await expect(page).toHaveURL(/.*dashboard/);
  18 |   });
  19 |
  20 |   test('verifies live dashboard elements', async ({ page }) => {
  21 |     // Verify Documents card
  22 |     await expect(page.locator('text=0')).toBeVisible(); // Documents count from screenshot
  23 |     await expect(page.locator('text=Documents')).toBeVisible();
  24 |     await expect(page.locator('button', { hasText: 'View Documents' })).toBeVisible();
  25 |
  26 |     // Verify Departments card
  27 |     await expect(page.locator('text=0')).toBeVisible(); // Departments count
  28 |     await expect(page.locator('text=Departments')).toBeVisible();
  29 |     await expect(page.locator('button', { hasText: 'View Departments' })).toBeVisible();
  30 |
  31 |     // Verify Users card
  32 |     await expect(page.locator('text=1')).toBeVisible(); // Users count
  33 |     await expect(page.locator('text=Users')).toBeVisible();
  34 |     await expect(page.locator('button', { hasText: 'View Users' })).toBeVisible();
  35 |
  36 |     // Verify Clauses card
  37 |     await expect(page.locator('text=0')).toBeVisible(); // Clauses count
  38 |     await expect(page.locator('text=Clauses')).toBeVisible();
  39 |     await expect(page.locator('button', { hasText: 'View Clauses' })).toBeVisible();
  40 |
  41 |     // Verify Evidences card
  42 |     await expect(page.locator('text=0')).toBeVisible(); // Evidences count
  43 |     await expect(page.locator('text=Evidences')).toBeVisible();
  44 |     await expect(page.locator('button', { hasText: 'View Evidences' })).toBeVisible();
  45 |   });
  46 | });
```