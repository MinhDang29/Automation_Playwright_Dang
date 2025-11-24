import { test } from '@playwright/test';

test.beforeEach(async () => {
    console.log("Before each: Login");
});

test.afterEach(async () => {
    console.log("After each: Clean up data");
});

test("Without fixture", async () => {
    console.log("Test actions");
});