import * as userConstants from './actions';

const initialState = {
  loggedIn: false,
  loggingIn: false,
  loggingOut: false,
  userId: '',
  token: '',
  errorMessage: '',
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        userId: action.id,
        token: action.token,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        errorMessage: action.errorMessage,
      };
    case userConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true,
      };
    case userConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        loggedIn: false,
        userId: '',
        token: '',
      };
      // move to separate reducer
    case userConstants.CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        userId: action.id,
        token: action.token,
      };
    case userConstants.CHECK_TOKEN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        token: '',
      };
    default:
      return state;
  }
};

export default authenticationReducer;