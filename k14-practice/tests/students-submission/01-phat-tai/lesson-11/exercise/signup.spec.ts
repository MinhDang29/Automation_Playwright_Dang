import { test, expect } from "@playwright/test";
import { url } from "inspector";
const email = "tranptaiqc@gmail.com";
const username = "tranptai1";
const password = "0000000Bt";
const baseUrl: string = "https://conduit-api.bondaracademy.com";
let token = "";
let slug = "";
let listSlug: string[] = [];
let listIdCmt: string[] = [];

test.describe("Lesson 11", async () => {
  test("Test 1: đăng ký tài khoản", async ({ request }) => {
    await test.step("Đăng ký tài khoản", async () => {
      const requestUrl: string = `${baseUrl}/api/users`;
      const response = await request.post(requestUrl, {
        data: {
          user: {
            email: email,
            username: username,
            password: password,
          },
        },
      });

      //expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(201);

      const resBody = await response.json();
      const actualEmail: string = resBody["user"]["email"];
      const actualUsername: string = resBody["user"]["username"];
      expect(actualEmail).toBe(email);
      expect(actualUsername).toBe(username);
    });

    test("Test 2: đăng nhập tài khoản", async ({ request }) => {
      await test.step("Đăng nhập tài khoản", async () => {
        const requestUrl: string = `${baseUrl}/api/users/login`;
        const response = await request.post(requestUrl, {
          data: {
            user: {
              email: email,
              password: password,
            },
          },
        });
        //expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const resBody = await response.json();
        token = resBody["user"]["token"];
        expect(token).toBeDefined();
        const actualEmail: string = resBody["user"]["email"];
        const actualUsername: string = resBody["user"]["username"];
        expect(actualEmail).toBe(email);
        expect(actualUsername).toBe(username);
      });

      await test.step("Tạo bài viết", async () => {
        const requestUrl: string = `${baseUrl}/api/articles`;
        const response = await request.post(requestUrl, {
          headers: {
            Authorization: `Token ${token}`,
          },
          data: {
            article: {
              title: "API in Playwright",
              description: "How to use Playwright to create articles",
              body: "Nội dung bài viết 1",
              tagList: [" Playwright Viet Nam", "pw", "pw-k14"],
            },
          },
        });
        //expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201);
        const resBody = await response.json();
        slug = resBody["article"]["slug"];
        expect(slug).toBeDefined();
        const actualTitle: string = resBody["article"]["title"];
        const actualDescription: string = resBody["article"]["description"];
        const actualBody: string = resBody["article"]["body"];
        expect(actualTitle).toBe("API in Playwright");
        expect(actualDescription).toBe(
          "How to use Playwright to create articles"
        );
        expect(actualBody).toBe("Nội dung bài viết 1");
        listSlug.push(slug);
      });
    });

    test("Test 3: Thêm mới 5 comment", async ({ request }) => {
      let url: string = `${baseUrl}/api/articles/${slug}/comments`;

      for (let i = 0; i <= 5; i++) {
        const response = await request.post(url, {
          headers: {
            authorization: `Token ${token}`,
          },
          data: {
            comment: {
              body: `Comment 0${i}`,
            },
          },
        });
        //expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const resBody = await response.json();
        const actualBody: string = resBody["comment"]["body"];
        expect(actualBody).toBe(`Comment 0${i}`);
        listIdCmt.push(resBody["comment"]["id"]);
        url = `${baseUrl}/api/articles/${slug}/comments`; // Reset URL for next comment
        if (i === 5) {
          url = `${baseUrl}/api/articles/${slug}/comments`; // Reset URL for next comment
        }
        if (actualBody == `Comment 02` || actualBody == `Comment 05`) {
          listSlug.push(slug);
          listIdCmt.push(resBody["comment"]["id"]);
          throw new Error(
            `Expected last comment to be 'Comment 05', but got '${actualBody}'`
          );
        }
      }
    });

    test("Test 4: Cmt 2 và cmt5", async ({ request }) => {
      for (let i = 0; i < listIdCmt.length; i++) {
        const url: string = `${baseUrl}/api/articles/${listSlug[i]}/comments/${listIdCmt[i]}`;
        const response = await request.delete(url, {
          headers: {
            authorization: `Token ${token}`,
          },
        });
        //expect(response.ok()).toBeTruthy();

        expect(response.status()).toBe(200);
      }
    });

    test("Test 5: Xoá bài viết", async ({ request }) => {
      const url: string = `${baseUrl}/api/articles/${slug}`;
      const response = await request.delete(url, {
        headers: {
          authorization: `Token ${token}`,
        },
      });
      //expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(204);
    });
  });
});
