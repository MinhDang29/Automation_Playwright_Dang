import { test } from '@playwright/test';

test("Locale", async ({ page}) => {
    await page.goto("https://material.playwrightvn.com/017-detect-user-agent.html");
});

test("Color scheme", async ({ page}) => {
    await page.goto("https://playwright.dev/docs/emulation#color-scheme-and-media");
})