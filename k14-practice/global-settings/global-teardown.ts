import { test as teardown } from '@playwright/test';

teardown('clean db ', async ({ }) => {
    console.log('clean db test ...');
})