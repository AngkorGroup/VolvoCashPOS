import axios, { AxiosInstance } from 'axios';
import { API_URL } from '@env';
import { getUserToken } from './storage';

export interface IToken {
  token?: string;
}

export interface Header {
  Accept: string;
  'Content-Type': string;
  Authorization?: string;
}

export class Api {
  public headers: Header;
  public token: string;
  public api: AxiosInstance;

  constructor(json: IToken = {}) {
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    this.token = json.token || '';
    this.api = axios.create({
      baseURL: API_URL,
    });
  }

  generateHeaders() {
    return getUserToken().then((token) => {
      if (!token) {
        return this.headers;
      }
      return {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      };
    });
  }

  get(url: string) {
    return this.generateHeaders().then((headers) =>
      this.api
        .get(url, { headers })
        .then((response) => response.data)
        .catch((err) => {
          throw err.response?.data.errorMessage;
        }),
    );
  }

  post(url: string, body: any) {
    return this.generateHeaders().then((headers) =>
      this.api
        .post(url, body, { headers })
        .then((response) => response.data)
        .catch((err) => {
          throw err.response?.data.errorMessage;
        }),
    );
  }

  put(url: string, body: any) {
    return this.generateHeaders().then((headers) =>
      this.api
        .put(url, body, { headers })
        .then((response) => response.data)
        .catch((err) => {
          throw err.response?.data.errorMessage;
        }),
    );
  }

  delete(url: string) {
    return this.generateHeaders().then((headers) =>
      this.api
        .delete(url, { headers })
        .then((response) => response.data)
        .catch((err) => {
          throw err.response?.data.errorMessage;
        }),
    );
  }
}

export const api = new Api();
