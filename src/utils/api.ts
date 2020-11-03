import axios, { AxiosInstance } from 'axios';
import { API_URL } from '@env';

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

  setToken(token: string) {
    this.headers = {
      ...this.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  getHeaders() {
    return this.headers;
  }

  get(url: string) {
    return this.api
      .get(url, { headers: this.headers })
      .then((response) => response.data)
      .catch((err) => {
        throw err.message;
      });
  }

  post(url: string, body: any) {
    return this.api
      .post(url, body, { headers: this.headers })
      .then((response) => response.data)
      .catch((err) => {
        throw err.message;
      });
  }

  put(url: string, body: any) {
    return this.api
      .put(url, body, { headers: this.headers })
      .then((response) => response.data)
      .catch((err) => {
        throw err.message;
      });
  }
}

export const api = new Api();
