import { test, expect } from '@playwright/test';

test.describe('POST - Post', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://pw-practice-dev.playwrightvn.com/wp-admin');
    await page.fill('#user_login', 'k14-khoa');
    await page.fill('#user_pass', 'WNyFt(fsb60Is^NVYkIooEIi');
    await page.click('#wp-submit');
  });
// Add tag failed
  test('@POST_TAG_001: Tag - add tag failed', async ({ page }) => {
    await page.click('text=Posts');
    await page.click('text=Tags');
    await page.click('#submit'); // Click Add New Tag
    await expect(page.locator('.error')).toHaveText('A name is required for this term.');
    
    await page.fill('#tag-name', 'lesson tag');
    await page.click('#submit');
    await expect(page.locator('.error')).toHaveText('A term with the name provided already exists in this taxonomy.');
  });
// Add tag success
  test('@POST_TAG_002: Tag - add tag success', async ({ page }) => {
    await page.click('text=Posts');
    await page.click('text=Tags');
    
    await page.fill('#tag-name', 'tag ha-khoa');
    await page.click('#submit');
    await expect(page.locator('.updated')).toHaveText('Tag added.');
    await expect(page.locator('#the-list')).toContainText('tag ha-khoa');

    await page.fill('#tag-name', 'tag ha-khoa 02');
    await page.fill('#tag-slug', 'tag-ha-khoa-02');
    await page.click('#submit');
    await expect(page.locator('.updated')).toHaveText('Tag added.');
    await expect(page.locator('#the-list')).toContainText('tag ha-khoa 02');
  });
// Remove special character
  test('@POST_TAG_002: Tag - slug auto remove special character', async ({ page }) => {
    await page.click('text=Posts');
    await page.click('text=Tags');
    await page.fill('#tag-name', 'tag ha-khoa 03');
    await page.fill('#tag-slug', 'Đây là tag đặc biệt @100 $200');
    await page.click('#submit');
    await expect(page.locator('.updated')).toHaveText('Tag added.');
    await expect(page.locator('#the-list')).toContainText('day-la-tag-dac-biet-100-200');
  });
});
