import { test, expect } from '@playwright/test';
import { ConduitPageAPI } from './page/01-conduit-api-page';

test.describe('Exercise 11', async () => {
    const email = 'newuser29112@gmail.com';
    const username = 'plwvn-k1x122';
    const password = '1234561111'
    let slug = '';
    let listSlug: string[] = [];
    let listIdCmt: string[] = [];

    let conduitAPI: ConduitPageAPI;

    test.beforeEach(({ request }) => {
        conduitAPI = new ConduitPageAPI(request, 'https://conduit-api.bondaracademy.com/api');
    });

    test('Test 1: đăng ký tài khoản', async () => {
        const response = await conduitAPI.register(email, password, username);

        // verify status code
        expect(response.status()).toBe(201);

        // verify data response
        const resBody = await response.json();
        expect(resBody.user.email).toBe(email);
        expect(resBody.user.username).toBe(username);
    });

    test('Test 2', async () => {
        await test.step('Đăng nhập vào tài khoản đã tạo ở test 1', async () => {
            const response = await conduitAPI.logIn(email, password);

            // verify status code
            expect(response.status()).toBe(200);
        })

        await test.step('Tạo mới article', async () => {
            const info = {
                title: 'Exercise Lesson 12',
                description: 'How to use Playwright to create article',
                body: 'Hello',
                tagList: [
                    'Playwright Viet Nam, pw, pw-k11, k11-practice'
                ]
            }

            await conduitAPI.getToken(email, password);
            const response = await conduitAPI.createNewArticle({
                title: info.title,
                description: info.description,
                body: info.body,
                tagList: info.tagList
            })

            // verify status code
            expect(response.status()).toBe(201)
            const resBody = await response.json();

            // get slug article
            slug = resBody['article']['slug'];
            console.log(`slug: ${slug}`)
        })
    })

    test('Test 3: Thêm mới 5 comment', async () => {
        await conduitAPI.getToken(email, password);
        for (let i = 0; i <= 5; i++) {
            const bodyCmt = `Comment 0${i}`;
            const response = await conduitAPI.addNewComment(slug, bodyCmt);

            // verify status code
            expect(response.status()).toBe(200);

            // verify response data
            const resBody = await response.json();
            expect(resBody['comment']['body']).toBe(`Comment 0${i}`);

            // get data comment 02, 05
            if (resBody['comment']['body'] == 'Comment 02' || resBody['comment']['body'] == 'Comment 05') {
                listSlug.push(slug); // [Slug02, Slug05]
                listIdCmt.push(resBody['comment']['id']); // [Id02, Id05]
            }
        }
    })

    test('Test 4: Xoá “Comment 02”, “Comment 05” đã tạo ở test 3', async () => {
        await conduitAPI.getToken(email, password);
        for (let i = 0; i < listIdCmt.length; i++) {
            const response = await conduitAPI.deleteComment(listSlug[i], listIdCmt[i]);
            expect(response.status()).toBe(200);
        }
    })

    test('Test 6: Xóa article đã tạo ở test 2', async ({ }) => {
        await conduitAPI.getToken(email, password);
        const response = await conduitAPI.deleteArticle(slug);
        expect(response.status()).toBe(204);
    })
})