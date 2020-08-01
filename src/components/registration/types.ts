export interface RegistrationFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptedTerms: boolean;
}

export interface RegistrationResultModel {
  successfulRegistration: boolean;
  errorMessage: string;
}

export interface RegistrationState {
  isRegistering: boolean,
  registered: boolean,
  errorMessage: string,
}

export interface RegisterRequestAction {
  type: 'USERS_REGISTER_REQUEST',
  user: User
}

export interface RegisterSuccessAction {
  type: 'USERS_REGISTER_SUCCESS'
}

export interface RegisterFailureAction {
  type: 'USERS_REGISTER_FAILURE',
  user: User
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type RegistrationActions = RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction;