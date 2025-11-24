import { test, expect } from '@playwright/test';

test("Test 1", async ({ page }) => {
    await test.step('Login', async () => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php?fbclid=IwY2xjawLKCttleHRuA2FlbQIxMABicmlkETFqUkpzQnVzNGJiSmx6SlcxAR4607NpnwJRafPTpm3N4ylcsBr17h858y8bZ_TcHxzWfHF7cbCRuV7oNHc4tw_aem_1KjAYOoWm3Cl0lpghV2OQA");
        await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
        await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('k14-nhi');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Vi^2GH!PsgLxRhok#Bv@^&^J');
        await page.getByRole('button', { name: 'Log In' }).click();
    })

    await test.step('Dashboard_Mask block Activity và At Glance', async () => {
        await expect(page).toHaveScreenshot("dashboard_mask.png", {
            mask: [page.locator("//div[@id = 'postbox-container-1']")],
            maskColor: "#7134eb"
        })
    })

    await test.step('Tag', async () => {
        await page.getByRole('link', { name: 'Posts', exact: true }).click();
        await page.getByRole('link', { name: 'Tags' }).click();
        await expect(page).toHaveScreenshot("tag.png",{ 
            fullPage: true, 
        })
    })
});


