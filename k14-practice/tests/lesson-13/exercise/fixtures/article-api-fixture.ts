import { test as base, Page, expect, APIRequestContext } from '@playwright/test';
import { ConduitPageAPI } from '../pages/conduit-api-page';

const baseURL: string = 'https://conduit-api.bondaracademy.com/api';
const userInfo = {
    email: 'newuser291@gmail.com',
    password: '123456111',
}

const listSlug: string[] = [];
let slug = '';

const listArticle = [
    {
        title: "a1",
        description: "How to use Playwright to create article",
        body: "Hello",
        tagList: [
            "Playwright Viet Nam, pw, pw-k13"
        ]
    },
    {
        title: "a2",
        description: "How to use Playwright to create article",
        body: "Hello",
        tagList: [
            "Playwright Viet Nam, pw, pw-k13"
        ]
    }
]

let conduitAPI: ConduitPageAPI;

export const test = base.extend<{ myAPI: ConduitPageAPI }>({
    myAPI: async ({ request }, use) => {
        conduitAPI = new ConduitPageAPI(request, baseURL);
        await conduitAPI.getToken(userInfo.email, userInfo.password);

        for (const article of listArticle) {
            const response = await conduitAPI.createNewArticle(article);
            expect(response.status()).toBe(201);
            const responseBody = await response.json();
            listSlug.push(responseBody['article']['slug']);
        }
        console.log(`listSlug: ${listSlug}`);

        await use(conduitAPI);

        for (const slug of listSlug) {
            const response = await conduitAPI.deleteArticle(slug);
            expect(response.status()).toBe(204);
        }
        console.log(`Đã xoá articles: ${listSlug.join(',')}`);
    }
})



