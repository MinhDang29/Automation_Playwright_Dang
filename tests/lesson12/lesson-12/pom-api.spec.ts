import { test, expect, APIResponse } from '@playwright/test';
import { SignUpAPI } from '../../pages/api/sign-up-api';
import { SignInAPI } from '../../pages/api/sign-in-api';
import { sign } from 'crypto';
import { ArticleAPI } from '../../pages/api/articles';
import { POMManager } from '../../pages/api/pom-api-manager';

const email = 'playwrightvn1401255@gmail.com';
const username = 'plw14011255';
const password = '1234562255';
const userInfo = {
    "email": "playwrightvn1401255@gmail.com",
    "password": "1234562255"
};
const articleInfo = {
    'title': 'API in Playwright 0',
    'description': 'How to use Playwright to create article',
    'body': 'Hello',
    'tagList': [
        'Playwright Viet Nam, pw, pw-k13'
    ]
}
const baseUrl: string = 'https://conduit-api.bondaracademy.com'
let token = '';
let slug = '';
let listSlug: string[] = [];
let listIdCmt: string[] = [];

let signUpAPI: SignUpAPI;
let signInAPI: SignInAPI;
let articleAPI: ArticleAPI;
let pomAPIManager: POMManager;

test.describe('Exercise 11', async () => {
    test('Test 1: đăng ký tài khoản', async ({ request }) => {
        pomAPIManager = new POMManager(request);
        signUpAPI = pomAPIManager.getSignUpAPI();

        const response: APIResponse = await signUpAPI.signUp(email, username, password);

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
            signInAPI = new SignInAPI(request);
            const response: APIResponse = await signInAPI.signIn(userInfo);

            // verify status code
            expect(response.status()).toBe(200);

            // get token
            const resBody = await response.json();
            token = resBody.user.token;
        })

        await test.step('Tạo mới article', async () => {
            articleAPI = new ArticleAPI(request);
            articleAPI.token = token;

            const response = await articleAPI.createArticles(articleInfo);

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