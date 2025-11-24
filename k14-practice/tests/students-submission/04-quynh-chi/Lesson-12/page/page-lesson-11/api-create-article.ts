import { APIRequestContext, APIResponse } from "playwright";
import { LoginAPI } from "./api-login";
import { BaseAPI } from "./api-base";

interface ParamArticle {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}
export class ArticleAPI extends BaseAPI {
  endpointArticle = "/articles";
  endpointGetUpdateDeleteArticle = "/articles/:slugArticle";
  loginAPI: LoginAPI;
  token: string;

  constructor(request: APIRequestContext, token: string) {
    super(request);
    this.token = token;
  }

  async createArticleAPI(article: ParamArticle): Promise<APIResponse> {
    let requestURL = this.baseURL + this.endpointArticle;
    let response = await this.request.post(requestURL, {
      headers: {
        authorization: `Token ${this.token}`,
      },
      data: { article },
    });
    return response;
  }

  async getArticleAPI(slugArticle: string): Promise<APIResponse> {
    let requestURL =
      this.baseURL +
      this.endpointGetUpdateDeleteArticle.replace(":slugArticle", slugArticle);

    let response = await this.request.get(requestURL, {
      headers: { authorization: `Token ${this.token}` },
    });
    return response;
  }

  async updateArticleAPI(
    description: string,
    title: string,
    slugArticle: string
  ): Promise<APIResponse> {
    let requestURL =
      this.baseURL +
      this.endpointGetUpdateDeleteArticle.replace(":slugArticle", slugArticle);
    const detailResponse = await this.getArticleAPI(slugArticle);
    const detailResponseBody = await detailResponse.json();
    const article = detailResponseBody.article;
    article.description = description;
    article.title = title;
    const updateArticleResponse = await this.request.put(requestURL, {
      data: { article },
      headers: { authorization: `Token ${this.token}` },
    });
    return updateArticleResponse;
  }

  async deleteArticleAPI(slugArticle: string): Promise<APIResponse> {
    let requestURL =
      this.baseURL +
      this.endpointGetUpdateDeleteArticle.replace(":slugArticle", slugArticle);
    const deleteArticleResponse = await this.request.delete(requestURL, {
      headers: { authorization: `Token ${this.token}` },
    });
    return deleteArticleResponse
  }
}
