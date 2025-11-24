import { test, expect } from '@playwright/test';

const email = 'playwrightvn140125@gmail.com';
const username = 'plw1401125';
const password = '123456225'
const baseUrl: string = 'https://conduit-api.bondaracademy.com'
let token = '';
let slug = '';
let listSlug: string[] = [];
let listIdCmt: string[] = [];



test.describe('Exercise 11', async () => {

    test('Test 1: đăng ký tài khoản', async ({ request }) => {
        const requestUrl: string = `${baseUrl}/api/users`;
        const response = await request.post(requestUrl, {
            data: {
                'user': {
                    'email': email,
                    'password': password,
                    'username': username
                }
            }
        });

        // verify status code
        expect(response.status()).toBe(201);

        // verify data response
        const resBody = await response.json();
        const actualEmail: string = resBody.user.email;
        const actualUsername: string = resBody.user.username;

        expect(actualEmail).toBe(email);
        expect(actualUsername).toBe(username);
    });

    test('Test 2', async ({ request }) => {
        await test.step('Đăng nhập vào tài khoản đã tạo ở test 1', async () => {
            const url: string = `${baseUrl}/api/users/login`;
            const response = await request.post(url, {
                data: {
                    'user': {
                        'email': email,
                        'password': password,
                    }
                }
            });

            // verify status code
            expect(response.status()).toBe(200);

            // get token
            const resBody = await response.json();
            token = resBody.user.token;
        })

        await test.step('Tạo mới article', async () => {
            const url: string = `${baseUrl}/api/articles`;
            const response = await request.post(url, {
                headers: {
                    authorization: `Token ${token}`
                },
                data: {
                    'article': {
                        'title': 'API in Playwright 0',
                        'description': 'How to use Playwright to create article',
                        'body': 'Hello',
                        'tagList': [
                            'Playwright Viet Nam, pw, pw-k13'
                        ]
                    }
                }
            })

            // verify status code
            expect(response.status()).toBe(201)
            const resBody = await response.json();

            // get slug article
            slug = resBody.article.slug;
        })
    })

    test('Test 3: Thêm mới 5 comment', async ({ request }) => {
        let url: string = `${baseUrl}/api/articles/${slug}/comments`;
        for (let i = 0; i <= 5; i++) {
            const response = await request.post(url, {
                headers: {
                    authorization: `Token ${token}`
                },
                data: {
                    'comment': {
                        'body': `Comment 0${i}`
                    }
                }
            });

            // verify status code
            expect(response.status()).toBe(200);

            // verify response data
            const resBody = await response.json();
            const commentBody = resBody.comment.body;
            expect(commentBody).toBe(`Comment 0${i}`);

            // get data comment 02, 05
            if (commentBody == 'Comment 02' || commentBody == 'Comment 05') {
                listSlug.push(slug); // [Slug02, Slug05]
                listIdCmt.push(resBody.comment.id); // [Id02, Id05]
            }
        }
    })

    test('Test 4: Xoá “Comment 02”, “Comment 05” đã tạo ở test 3', async ({ request }) => {
        for (let i = 0; i < listIdCmt.length; i++) {
            const url: string = `${baseUrl}/api/articles/${listSlug[i]}/comments/${listIdCmt[i]}`;
            const response = await request.delete(url, {
                headers: {
                    authorization: `Token ${token}`,
                },
            });
            expect(response.status()).toBe(200);
        }
    })

    test('Test 6: Xóa article đã tạo ở test 2', async ({ request }) => {
        const url = `${baseUrl}/api/articles/${slug}`;
        const response = await request.delete(url, {
            headers: {
                authorization: `Token ${token}`,
            },
        });
        expect(response.status()).toBe(204);
    })
})