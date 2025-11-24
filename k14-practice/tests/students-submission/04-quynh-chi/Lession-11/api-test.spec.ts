import { expect, test } from "@playwright/test";

test.describe("API Testing", () => {
  const baseURL = "https://conduit-api.bondaracademy.com/api";
  const now = new Date().getTime();
  let articleSlug = "";
  let userToken = "";

  test("Test 1", async ({ request }) => {
    const endPoint = "/users";
    const response = await request.post(baseURL + endPoint, {
      data: {
        user: {
          email: `chinguyen.11071996+${now}@gmail.com`,
          password: "12345678",
          username: `Chi_${now}`,
        },
      },
    });
    const statusCode = response.status();
    expect(statusCode).toEqual(201);
  });

  test("Test 2", async ({ request }) => {
    const endpointLogin = "/users/login";
    const endpointArticle = "/articles";

    const responseLogin = await request.post(baseURL + endpointLogin, {
      data: {
        user: {
          email: `chinguyen.11071996+${now}@gmail.com`,
          password: "12345678",
        },
      },
    });

    const statusCodeLogin = responseLogin.status();
    expect(statusCodeLogin).toEqual(200);

    const responseBodyLogin = await responseLogin.json();
    const token = responseBodyLogin?.user?.token;
    userToken = token;
    expect(token).not.toBeNull();

    const article = {
      title: "API in Playwright",
      description: "How to use Playwright to create article",
      body: "Lorem ipsum ...",
      tagList: ["pw", "pw-k6"],
    };

    const responseCreateArticle = await request.post(
      baseURL + endpointArticle,
      {
        data: { article },
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );
    const responseBodyCreateArticle = await responseCreateArticle.json();
    const slug = responseBodyCreateArticle?.article?.slug;
    articleSlug = slug;
    expect(slug).not.toBeUndefined();
    const statusCodeCreateArticle = responseCreateArticle.status();
    expect(statusCodeCreateArticle).toEqual(201);
  });

  test("Test 3", async ({ request }) => {
    const endpointComment = `/articles/${articleSlug}/comments`;

    const comment = async (body: string) =>
      await request.post(baseURL + endpointComment, {
        data: { comment: { body } },
        headers: { authorization: `Token ${userToken}` },
      });
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

  test("Test 4", async ({ request }) => {
    const endpointComment = `/articles/${articleSlug}/comments`;
    const endpointDeleteComment = `/articles/${articleSlug}/comments/:id`;
    const response = await request.get(baseURL + endpointComment, {
      headers: { authorization: `Token ${userToken}` },
    });
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
      await request.delete(
        baseURL + endpointDeleteComment.replace(":id", id.toString()),
        { headers: { authorization: `Token ${userToken}` } }
      );

    const responses = await Promise.all(
      deletedIds.map((id) => deleteComment(id))
    );

    responses.forEach((response) => {
      const statusCode = response.status();
      expect(statusCode).toEqual(200);
    });
  });

  test("Test 5", async ({ request }) => {
    const endpointArticle = `/articles/${articleSlug}`;
    const detailResponse = await request.get(baseURL + endpointArticle, {
      headers: { authorization: `Token ${userToken}` },
    });
    const detailResponseBody = await detailResponse.json();
    const article = detailResponseBody.article;
    article.description = `How to use Playwright to create article and update article ${now}`;
    article.title = `API in Playwright - updated ${now}`;
    const updateArticleResponse = await request.put(baseURL + endpointArticle, {
      data: { article },
      headers: { authorization: `Token ${userToken}` },
    });
    expect(updateArticleResponse.status()).toEqual(200);
    const updateArticleResponseBody = await updateArticleResponse.json();
    articleSlug = updateArticleResponseBody.article.slug;
  });

  test("Test 6", async ({ request }) => {
    const endpointArticle = `/articles/${articleSlug}`;
    const deleteArticleResponse = await request.delete(
      baseURL + endpointArticle,
      { headers: { authorization: `Token ${userToken}` } }
    );
    expect(deleteArticleResponse.status()).toEqual(204);
  });
});
