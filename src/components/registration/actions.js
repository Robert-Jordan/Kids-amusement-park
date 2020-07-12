import * as userService from '../../api/index';

export const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE';

export const register = user => async (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
    user
  });
  return new Promise(async (resolve, reject) => {
    const registeredUser = await userService.register(user);
    if (registeredUser.status === 200) {
      dispatch({
        type: REGISTER_SUCCESS
      });
      return resolve({
        successfulRegistration: true,
        errorMessage: ''
      });
    } else {
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: registeredUser.data.errorMessage
      });
      return reject({
        successfulRegistration: false,
        errorMessage: registeredUser.data.errorMessage
      });
    }
  });
};