import { APIRequestContext, APIResponse } from "playwright";

export class SignUpAPI {
    request: APIRequestContext;
    baseUrl = 'https://conduit-api.bondaracademy.com';
    endpointSignUp = '/api/users';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    /**
     * Sign up to Conduit API
     * @param email: email of user  
     * @param username 
     * @param password 
     * @returns response
     */
    async signUp(email: string, username: string, password: string): Promise<APIResponse> {
        const requestURL: string = `${this.baseUrl}${this.endpointSignUp}`;
        const res = await this.request.post(requestURL, {
            data: {
                'user': {
                    'email': email,
                    'password': password,
                    'username': username
                }
            }
        });
        return res; 
    }
}
