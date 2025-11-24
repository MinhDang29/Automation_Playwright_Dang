import { test } from '@playwright/test'

test.describe('demo global settings', async () => {
    test('test demo', async ({ }) => {
        console.log('code test ');
    })

    test('test demo2 ', async ({ }) => {
        console.log('code here1');
    })
})
