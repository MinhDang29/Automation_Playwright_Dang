import { APIResponse, expect, test } from '@playwright/test';

test.describe("API testing", () => {
    const baseURL: string = "https://conduit-api.bondaracademy.com/";
    const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNDA2fSwiaWF0IjoxNzQ5OTEyNjQyLCJleHAiOjE3NTUwOTY2NDJ9.Av4-ETny4QpDY7gbeAzkYccJECDThsbGjhNFGNBacYg";

    test("Get articles", async ({ request }) => {
        const endpoint: string = "api/articles?limit=10&offset=0";
        const response: APIResponse = await request.get(baseURL + endpoint);
        const responseBody = await response.json();
        console.log(responseBody);

        const statusCode: number = response.status();
        expect(statusCode).toEqual(200);

        const articlesCount: number = responseBody.articles.length;
        expect(articlesCount).toEqual(10)
    });

    test("Login", async ({ request }) => {
        const endpoint = "api/users/login";
        const response: APIResponse = await request.post(baseURL + endpoint, {
            data: {
                "user": {
                    "email": "teovn84@gmail.com",
                    "password": "teo@123"
                }
            }
        });

        const statusCode: number = response.status();
        expect(statusCode).toEqual(200);

        const responseBody = await response.json();
        console.log(responseBody);
        const token = responseBody.user.token;
        expect(token).not.toBeNull();
    });

    test("Create new article", async ({ request }) => {
        const endpoint = "/api/articles/";
        const response: APIResponse = await request.post(baseURL + endpoint, {
            headers: {
                authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNDA2fSwiaWF0IjoxNzQ5OTEyNzc3LCJleHAiOjE3NTUwOTY3Nzd9.K85HqZrmgMjUFWhbpiyNhFGfLwY3ZvRgs2ccjP1kmSw`
            },
            data: {
                "article": {
                    "title": "K14 class - mnetor",
                    "description": "assss",
                    "body": "#Hello",
                    "tagList": [
                        "test3"
                    ]
                }
            }
        });

        const statusCode: number = response.status();
        expect(statusCode).toEqual(201);

        const responseBody = await response.json();
        console.log(responseBody);
    })
});

