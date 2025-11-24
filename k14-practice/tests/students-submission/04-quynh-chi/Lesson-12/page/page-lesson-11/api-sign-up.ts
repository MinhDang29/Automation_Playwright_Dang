import { APIRequestContext, APIResponse } from "playwright";
import { BaseAPI } from "./api-base";

interface SignUpParams {
  email: string;
  password: string;
  username: string;
}
export class SignUpAPI extends BaseAPI {
  baseURL: string = "https://conduit-api.bondaracademy.com/api";
  endPointSignUp: string = "/users";

  constructor(request: APIRequestContext) {
    super(request);
  }
  /**
   *
   * @param param: object email, username, password
   * @returns response API sign up
   */
  async signUpAPI(param: SignUpParams): Promise<APIResponse> {
    const requestURL = this.baseURL + this.endPointSignUp;
    const response = await this.request.post(requestURL, {
      data: {
        user: {
          email: param.email,
          password: param.password,
          username: param.username,
        },
      },
    });
    return response;
  }
}
