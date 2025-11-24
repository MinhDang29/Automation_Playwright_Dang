import { APIRequestContext, APIResponse } from "playwright";
import { ArticleAPI } from "./api-create-article";
import { BaseAPI } from "./api-base";

export class CommentArticleAPI extends BaseAPI {
  endpointComment: string;
  endpointDeleteComment: string;
  token: string;

  constructor(request: APIRequestContext, slugArticle: string, token: string) {
    super(request);
    this.endpointComment = `/articles/${slugArticle}/comments`;
    this.endpointDeleteComment = `/articles/${slugArticle}/comments/:id`;
    this.token = token;
  }

  async commentArticleAPI(body: string): Promise<APIResponse> {
    let requestURL = this.baseURL + this.endpointComment;
    let response = await this.request.post(requestURL, {
      headers: { authorization: `Token ${this.token}` },
      data: { comment: { body } },
    });
    return response;
  }

  async getCommentAPI(): Promise<APIResponse> {
    let requestURL = this.baseURL + this.endpointComment;
    let response = await this.request.get(requestURL, {
      headers: { authorization: `Token ${this.token}` },
    });
    return response;
  }

  async deleteCommentAPI(id: number): Promise<APIResponse> {
    let requestURL =
      this.baseURL + this.endpointDeleteComment.replace(":id", id.toString());
    let response = await this.request.delete(requestURL, {
      headers: { authorization: `Token ${this.token}` },
    });
    return response;
  }
}
