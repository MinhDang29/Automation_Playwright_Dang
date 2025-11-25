import { APIRequestContext } from '@playwright/test';

export class ConduitPageAPI {
    request: APIRequestContext;
    baseUrl: string;
    token: string;

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    }

    async register(email: string, password: string, username: string) {
        const url = `${this.baseUrl}/users`
        const response = await this.request.post(url, {
            data: {
                'user': {
                    'email': email,
                    'password': password,
                    'username': username
                }
            }
        })

        return response;
    }

    async logIn(email: string, password: string) {
        const url = `${this.baseUrl}/users/login`
        const response = await this.request.post(url, {
            data: {
                'user': {
                    'email': email,
                    'password': password,
                }
            }
        });

        return response;
    }

    async getToken(email: string, password: string) {
        const response = await this.logIn(email, password);
        const resBody = await response.json();
        this.token = resBody['user']['token'];
    }

    async createNewArticle(info: {
        title: string,
        description: string,
        body: string,
        tagList: string[]
    }) {
        const url = `${this.baseUrl}/articles/`;
        const response = await this.request.post(url, {
            headers: {
                authorization: `Token ${this.token}`
            },
            data: {
                'article': {
                    'title': info.title,
                    'description': info.description,
                    'body': info.body,
                    'tagList': info.tagList
                }
            }
        });

        return response;
    }

    async addNewComment(slug: string, bodyCmt: string) {
        const url = `${this.baseUrl}/articles/${slug}/comments`;
        const response = await this.request.post(url, {
            headers: {
                authorization: `Token ${this.token}`,
            },
            data: {
                'comment': {
                    'body': bodyCmt
                }
            }
        });

        return response;
    }


    async deleteComment(slug: string, idCmt: string) {
        const url = `${this.baseUrl}/articles/${slug}/comments/${idCmt}`;
        const response = await this.request.delete(url, {
            headers: {
                authorization: `Token ${this.token}`,
            },
        });

        return response;
    }

    async deleteArticle(slug: string) {
        const url = `${this.baseUrl}/articles/${slug}`;
        const response = await this.request.delete(url, {
            headers: {
                authorization: `Token ${this.token}`,
            },
        });
        return response;
    }
}

