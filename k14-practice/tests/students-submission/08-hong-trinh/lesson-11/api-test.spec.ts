import { APIResponse, expect, request, test } from '@playwright/test';
import { url } from 'inspector';

test.describe.serial("API testing", async () => {
    const baseURL: string = "https://conduit-api.bondaracademy.com/";

    // Create radome email and username
    const generateRandomUser = () => {
        const randomInt = Math.floor(Math.random() * 900) + 1;
        const randomEmail = `trinh${randomInt}@gmail.com`;
        const randomUserName = `trinh${randomInt}`;

        return { email: randomEmail, username: randomUserName };
        console.log(randomEmail);
        console.log(randomUserName);

    }
    const newUser = generateRandomUser();

    let token: string;
    let slug: string;
    let idCommentArr: Array<string> = [];

    test("1. Sign up", async ({ request }) => {
        const endpoint: string = "api/users";
        const response: APIResponse = await request.post(baseURL + endpoint, {
            data: {
                "user": {
                    "email": newUser.email,
                    "username": newUser.username,
                    "password": "abc12345678"
                }
            }
        })
        // Sign up successfully
        const responseBody = await response.json();
        const statusCode: number = response.status();
        expect(statusCode).toEqual(201);
        console.log('new user ' + newUser.email);
        console.log('new email ' + newUser.username);

    });

    test("2. Login and create new article", async ({ request }) => {

        await test.step("Login succesull", async () => {
            const endpoint: string = "api/users/login";
            const response: APIResponse = await request.post(baseURL + endpoint, {
                data: {
                    "user": {
                        "email": newUser.email,
                        "password": "abc12345678"
                    }
                }
            })

            // Kiem tra login thanh cong
            const statusCode: number = response.status();
            expect(statusCode).toEqual(200);
            const jsonResponse = await response.json()
            token = jsonResponse.user.token;

        })

        await test.step("Add new article name", async () => {
            const endpoint: string = "api/articles/";
            const response: APIResponse = await request.post(baseURL + endpoint, {
                headers: {
                    "authorization": `Token ${token}`
                },
                data: {
                    "article": {
                        "title": "API in Playwright",
                        "description": "How to use Playwright to create article",
                        "body": "add article",
                        "tagList": [
                            "Playwright VietNam, pw, pw-k6"
                        ]
                    }
                }

            })

            // Check created artical successfully
            const statusCode: number = response.status();
            expect(statusCode).toEqual(201);
            const jsonResponse = await response.json();
            slug = jsonResponse.article.slug;

        })
    })

    test("3. Add comment", async ({ request }) => {
        await test.step("Add 5 comments", async () => {
            const endpoint: string = `api/articles/${slug}/comments`;
            for (let i = 1; i <= 5; i++) {
                const response: APIResponse = await request.post(baseURL + endpoint, {
                    headers: {
                        "authorization": `Token ${token}`
                    },
                    data: {
                        "comment": {
                            "body": `comment 0${i}`
                        }
                    }
                })
                const statusCode: number = response.status();
                expect(statusCode).toEqual(200);
                console.log(response.json());
                const jsonResponse = await response.json();
                const commentId: string = jsonResponse.comment.id;
                idCommentArr.push(commentId);

            }
            console.log(idCommentArr);
        })
    })

    test("4. Delete comment", async ({ request }) => {
        await test.step("Delete comment 02 and 05", async () => {
            for (let i = 0; i <= 4; i++) {
                if (i == 1 || i == 4) {
                    const endpoint: string = `api/articles/${slug}/comments/${idCommentArr[i]}`;
                    const response: APIResponse = await request.delete(baseURL + endpoint, {
                        headers: {
                            "authorization": `Token ${token}`
                        }
                    })
                    // Check deleted successfully
                    const statusCode: number = response.status();
                    expect(statusCode).toEqual(200);
                }

            }
        })
    })

    test("5. Update article", async ({ request }) => {
        await test.step("Update articale created", async () => {
            const endpoint: string = `api/articles/${slug}`;
            const response: APIResponse = await request.put(baseURL + endpoint, {
                headers: {
                    "authorization": `Token ${token}`
                },
                data: {
                    "article": {
                        "title": "API in Playwright - updated",
                        "description": "How to use Playwright to create articl and update article",
                        "body": "add article",
                        "tagList": [
                            "Playwright VietNam, pw, pw-k6"
                        ]
                    }
                }

            })

            // Check updated successfully
            const statusCode: number = response.status();
            expect(statusCode).toEqual(200);
            const jsonResponse = await response.json();
            slug = jsonResponse.article.slug;
        })
    })

    test("6. Delete article", async ({ request }) => {
        await test.step("Delete article created at step2", async () => {
            const endpoint: string = `api/articles/${slug}`;
            const response: APIResponse = await request.delete(baseURL + endpoint, {
                headers: {
                    "authorization": `Token ${token}`
                }
            })
            // Check updated successfully
            const statusCode: number = response.status();
            expect(statusCode).toEqual(204);

        })
    })

})
