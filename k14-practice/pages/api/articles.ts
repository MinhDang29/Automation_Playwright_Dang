import { APIRequestContext, APIResponse } from "playwright";

export class ArticleAPI {
    request: APIRequestContext;
    baseUrl = 'https://conduit-api.bondaracademy.com';
    endpointCreateArticle = '/api/articles';
    endpointSignIn = '/api/users/logi';
    token: string;

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
        const resBody = await res.json();
        this.token = resBody.user.token;
        return res;
    }

    async createArticles(article: {title: string, body: string, tagList?: Array<string>, description?: string}) {
        const requestURL = `${this.baseUrl}${this.endpointCreateArticle}`;
        const res: APIResponse = await this.request.post(requestURL, {
            headers: {
                "authorization": this.token,
            },
            data: {
                article: article
            }
        })
        return res;
    }

    async addComment(title, comment) {
        // Call method getSlugFromTitle  > return slug 
        // Call API add comment 
    }

    async getSlugFromTitle(title) {
        // call API get slug
    }
}