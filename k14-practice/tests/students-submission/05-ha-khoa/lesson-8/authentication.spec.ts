import { test, expect } from '@playwright/test';

test.describe('AUTH - Authentication', () => {

  const loginUrl = 'https://pw-practice-dev.playwrightvn.com/wp-admin';

  test.beforeEach(async ({ page }) => {
    await page.goto(loginUrl);
  });
// Login fail
  test('@AUTH_001: Login fail', async ({ page }) => {
    await test.step('Điền username/password sai', async () => {
      await page.fill('#user_login', 'k13-khoa');
      await page.fill('#user_pass', '123456');
    });

    await test.step('Click nút đăng nhập', async () => {
      await page.click('#wp-submit');
    });

    await test.step('Kiểm tra lỗi hiển thị', async () => {
      await expect(page.locator('#login_error')).toContainText(
        'Error: The username wrong-user is not registered on this site.'
      );
    });
  });
// Login success
  test('@AUTH_002: Login success', async ({ page }) => {
    await page.fill('#user_login', 'k14-khoa');
    await page.fill('#user_pass', 'WNyFt(fsb60Is^NVYkIooEIi');
    await page.click('#wp-submit');

    await expect(page).toHaveURL(/.*\/wp-admin/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Dashboard');
    await expect(page.getByRole('heading', { level: 2, name: 'At a Glance' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Activity' })).toBeVisible();
  });
});
