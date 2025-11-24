import { APIRequest, APIRequestContext } from "playwright";

export class BaseAPI {
  request: APIRequestContext;
  baseURL: string = "https://conduit-api.bondaracademy.com/api";

  constructor(request: APIRequestContext) {
    this.request = request
  }
}
