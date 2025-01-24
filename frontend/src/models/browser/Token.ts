export class Token {
  private static readonly TOKEN_KEY = "dla_access_token";

  static get = (): string => {
    return localStorage.getItem(this.TOKEN_KEY) || "";
  };
  
  static set = (token: string): void => {
    localStorage.setItem(this.TOKEN_KEY, token);
  };

  static exists(): boolean {
    return !!this.get();
  };
}
