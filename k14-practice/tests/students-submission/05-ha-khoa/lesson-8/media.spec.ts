import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('MEDIA - Media', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    await page.fill('#user_login', 'k14-khoa');
    await page.fill('#user_pass', 'WNyFt(fsb60Is^NVYkIooEIi');
    await page.click('#wp-submit');
    await page.click('text=Media');
    await page.click('text=Library');
  });
// upload file success
  test('@MEDIA_FILES_001: Media - upload file success', async ({ page }) => {
    const filePath = path.resolve('tests/student-submissions/ha-khoa/lesson-8/ha-khoa.txt');
    await page.setInputFiles('input[type="file"]', filePath);
    await page.reload();
    await expect(page.locator('.attachment')).toContainText('ha-khoa.txt');
  });
});
