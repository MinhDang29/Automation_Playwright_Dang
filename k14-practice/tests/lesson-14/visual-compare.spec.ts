import { test, expect } from '@playwright/test';

test("Visual compare", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await expect(page).toHaveScreenshot("home-page.png")
});

test("Compare locator", async ({ page}) => {
    const containerLoc = page.locator("//div[@class = 'container']");
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await expect(containerLoc).toHaveScreenshot("container.png")
});

test("Mask", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await expect(page).toHaveScreenshot("mask-color.png", {
        mask: [page.locator("//div[@id = 'ads-here']")],
        maskColor: "#000000"
    })
});


