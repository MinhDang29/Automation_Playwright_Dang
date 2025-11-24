import { APIRequestContext, APIResponse } from "playwright";
import { SignUpAPI } from "./sign-up-api";
import { SignInAPI } from "./sign-in-api";
import { ArticleAPI } from "./articles";

export class POMManager {
    request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    getSignUpAPI(): SignUpAPI {
        return new SignUpAPI(this.request);
    }

    getSignInAPI(): SignInAPI {
        return new SignInAPI(this.request);
    }

    getArticlesAPI(): ArticleAPI {
        return new ArticleAPI(this.request);
    }
}