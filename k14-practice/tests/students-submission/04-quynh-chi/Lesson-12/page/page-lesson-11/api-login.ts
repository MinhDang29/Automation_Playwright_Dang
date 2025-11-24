import { APIRequestContext, APIResponse } from "playwright";
import { SignUpAPI } from "./api-sign-up";
import { BaseAPI } from "./api-base";

interface paramLogin {
  email: string;
  password: string;
}
export class LoginAPI extends BaseAPI {
  endPointLogin = "/users/login";
  token: string;

  constructor(request: APIRequestContext) {
    super(request);
  }

  async loginAPI(param: paramLogin): Promise<APIResponse> {
    let requestURL = this.baseURL + this.endPointLogin;
    let response = await this.request.post(requestURL, {
      data: {
        user: {
          email: param.email,
          password: param.password,
        },
      },
    });
    let responseBody = await response.json();
    this.token = responseBody?.user?.token;
    return response;
  }
}
