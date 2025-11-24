import { APIRequestContext, APIResponse } from "playwright";

export class SignInAPI {
    request: APIRequestContext;
    baseUrl = 'https://conduit-api.bondaracademy.com';
    endpointSignIn = '/api/users/logi';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    /**
     * Sign in to Conduit API
     * @param email: email of user  
     * @param password 
     * @returns response
     */
    async signIn(userInfo: { email: string, password: string }): Promise<APIResponse> {
        const requestURL: string = `${this.baseUrl}${this.endpointSignIn}`;
        const res = await this.request.post(requestURL, {
            data: {
                'user': {
                    'email': userInfo.email,
                    'password': userInfo.password,
                }
            }
        });
        return res;
    }
}