import { expect, test } from "@playwright/test";
import { SignUpAPI } from "./page/page-lesson-11/api-sign-up";
import { LoginAPI } from "./page/page-lesson-11/api-login";
import { ArticleAPI } from "./page/page-lesson-11/api-create-article";
import { CommentArticleAPI } from "./page/page-lesson-11/api-comment-article";

test.describe.serial("API Testing", () => {
  const now = new Date().getTime();

  const loginData = {
    email: `chinguyen.11071996+${now}@gmail.com`,
    password: "12345678",
    username: `Chi_${now}`,
  };
  const article = {
    title: "API in Playwright",
    description: "How to use Playwright to create article",
    body: "Lorem ipsum ...",
    tagList: ["pw", "pw-k6"],
  };

  let articleSlug = "";
  let token = "";

  let signUpAPI: SignUpAPI;
  let loginAPI: LoginAPI;
  let articleAPI: ArticleAPI;
  let commentArticleAPI: CommentArticleAPI;

  test("Test 1", async ({ request }) => {
    await test.step("Register", async () => {
      signUpAPI = new SignUpAPI(request);
      let response = await signUpAPI.signUpAPI(loginData);
      const statusCode = response.status();
      expect(statusCode).toEqual(201);
    });
  });

  test("Test 2", async ({ request }) => {
    await test.step("Login", async () => {
      loginAPI = new LoginAPI(request);
      let responseLogin = await loginAPI.loginAPI(loginData);
      const statusCodeLogin = responseLogin.status();
      expect(statusCodeLogin).toEqual(200);

      const responseBodyLogin = await responseLogin.json();
      token = responseBodyLogin?.user?.token;
      expect(token).not.toBeNull();
    });

    await test.step("Create article", async () => {
      articleAPI = new ArticleAPI(request, token);
      const responseCreateArticle = await articleAPI.createArticleAPI(article);
      const responseCreateArticleBody = await responseCreateArticle.json();
      articleSlug = responseCreateArticleBody?.article?.slug;
      expect(articleSlug).not.toBeUndefined();
      const statusCodeCreateArticle = responseCreateArticle.status();
      expect(statusCodeCreateArticle).toEqual(201);
    });
  });

  test("Test 3", async ({ request }) => {
    commentArticleAPI = new CommentArticleAPI(request, articleSlug, token);

    const comment = async (body: string) =>
      await commentArticleAPI.commentArticleAPI(body);

    await test.step("Comment", async () => {
      //Array(5).fill(0) => tạo ra 1 mảng 5 phần tử. sau đó .map(...) -> biến mảng đấy thành mảng gồm 5 phần tử là 5 promise để comment từ 1 -> 5
      const responses = await Promise.all(
        Array(5)
          .fill(0)
          .map((_, index) => comment(`Comment ${index + 1}`))
      );
      responses.forEach((response) => {
        const statusCode = response.status();
        expect(statusCode).toEqual(200);
      });
    });
  });

  test("Test 4", async ({ request }) => {
    commentArticleAPI = new CommentArticleAPI(request, articleSlug, token);

    await test.step("Delete comment", async () => {
      const response = await commentArticleAPI.getCommentAPI();
      const responseBody = await response.json();
      const comments = responseBody.comments as Array<{
        body: string;
        id: number;
      }>;
      const deletedIds = comments
        .filter(
          (comment) =>
            comment.body === "Comment 2" || comment.body === "Comment 5"
        )
        .map((item) => item.id);

      const deleteComment = async (id: number) =>
        await commentArticleAPI.deleteCommentAPI(id);

      const responses = await Promise.all(
        deletedIds.map((id) => deleteComment(id))
      );

      // expect result
      responses.forEach((response) => {
        const statusCode = response.status();
        expect(statusCode).toEqual(200);
      });
    });
  });

  test("Test 5", async ({ request }) => {
    articleAPI = new ArticleAPI(request, token);
    await test.step("Update Article", async () => {
      const updateArticleResponse = await articleAPI.updateArticleAPI(
        `How to use Playwright to create article and update article ${now}`,
        `API in Playwright - updated ${now}`,
        articleSlug
      );
      expect(updateArticleResponse.status()).toEqual(200);
      const updateArticleResponseBody = await updateArticleResponse.json();
      articleSlug = updateArticleResponseBody.article.slug;
    });
  });

  test("Test 6", async ({ request }) => {
    articleAPI = new ArticleAPI(request, token);
    await test.step("Delete article", async () => {
      const deleteArticleResponse = await articleAPI.deleteArticleAPI(
        articleSlug
      );
      expect(deleteArticleResponse.status()).toEqual(204);
    });
  });
});
