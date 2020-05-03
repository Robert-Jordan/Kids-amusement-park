import * as userService from '../../api/index';

export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';
export const login = (username, password) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });
  return new Promise(async (resolve, reject) => {
    const result = await userService.login(username, password);
    if (result.status === 200 && result !== undefined) {
      localStorage.setItem('token', result.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        id: result.data.id,
        token: result.data.token
      });
      return resolve({
        successfulLogin: true,
        errorMessage: ''
      });
    } else {
      localStorage.removeItem('token');
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: result.data.errorMessage
      });
      return reject({
        successfulLogin: false,
        errorMessage: result.data.errorMessage
      });
    }
  });
};

export const LOGOUT_REQUEST = 'USERS_LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'USERS_LOGOUT_SUCCESS';
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST
  });
  dispatch({
    type: LOGOUT_SUCCESS
  });
  localStorage.removeItem('token');
};


export const CHECK_TOKEN_REQUEST = 'CHECK_TOKEN_REQUEST';
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_FAILURE = 'CHECK_TOKEN_FAILURE';
export const checkToken = token => async (dispatch) => {
  dispatch({
    type: CHECK_TOKEN_REQUEST
  });
  const result = await userService.checkToken(token);
  if (result.status === 200 && result !== undefined) {
    localStorage.setItem('token', result.data.token);
    dispatch({
      type: CHECK_TOKEN_SUCCESS,
      token: result.data.token,
      id: result.data.id
    });
  } else {
    localStorage.removeItem('token');
    dispatch({
      type: CHECK_TOKEN_FAILURE
    });
  }
};