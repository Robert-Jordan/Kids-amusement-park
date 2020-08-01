export interface AuthenticationState {
  loggedIn: boolean,
  loggingIn: boolean,
  loggingOut: boolean,
  userId: string,
  token: string,
  errorMessage: string,
}

export interface LoginModel {
  username: string;
  password: string;
}

export interface AuthenticationResultModel {
  successfulLogin: boolean;
  errorMessage: string;
}