import { Token } from "@/models/browser/Token";
import axios, { AxiosInstance } from "axios";

export class Api {
  protected apiClient: AxiosInstance;
  protected endpoint: string;
  constructor(endpoint: string) {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3000",
      timeout: 1000,
      headers: {
        ContentType: "application/json",
        Accept: "application/json",
        Authorization: Token.exists() ? `Bearer ${Token.get()}` : "",
      },
    });
    this.endpoint = endpoint;
  }

  protected getRequest = <T>(node: string): Promise<T> => {
    return this.apiClient.get(this.endpoint + node).then((res) => res.data);
  };

  protected postRequest = <T, S>(node: string, payload: S): Promise<T> => {
    return this.apiClient
      .post(this.endpoint + node, payload)
      .then((res) => res.data);
  };
}
