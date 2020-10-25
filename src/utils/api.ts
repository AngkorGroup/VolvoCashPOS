import axios, { AxiosInstance } from 'axios';
import { API_URL } from "@env";

export interface IToken {
  token?: string;
}

export interface Header {
  Accept: string,
  'Content-Type': string,
}

export class Api {
  public headers: Header;
  public token: string;
  public api: AxiosInstance;

  constructor(json: IToken = {}) {
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    this.token = json.token || '';
    this.api = axios.create({
      baseURL: API_URL
    });
  }

  getHeaders() {
    if (this.token) {
      return ({
        ...this.headers,
        Authorization: `Bearer ${this.token}`
      });
    }
    else {
      return this.headers;
    }
  }

  get(url: string) {
    return this.api
      .get(url, { headers: this.getHeaders() })
      .then(response => response.data)
      .catch(err => {
        console.log(err.response);
      });
  }

  post(url: string, body: any) {
    return this.api
      .post(url, body, { headers: this.getHeaders() })
      .then(response => response.data)
      .catch(err => {
        console.log(err.response);
      });
  }

  put(url: string, body: any) {
    return this.api
      .post(url, body, { headers: this.getHeaders() })
      .then(response => response.data)
      .catch(err => {
        console.log(err.response);
      });
  }
}
