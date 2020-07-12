import * as userService from '../../api/index';

export const UPDATE_REQUEST = 'USERS_UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'USERS_UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'USERS_UPDATE_FAILURE';
export const UPDATE_COMPLETED = 'USERS_UPDATE_COMPLETED';
export const update = user => async (dispatch) => {
  dispatch({
    type: UPDATE_REQUEST
  });
  return new Promise(async (resolve, reject) => {
    const updatedUser = await userService.update(user);
    if (updatedUser.status === 200) {
      dispatch({
        type: UPDATE_SUCCESS
      });
      return resolve({
        profileDataUpdated: true,
      });
    } else {
      dispatch({
        type: UPDATE_FAILURE,
        errorMessage: updatedUser.data.errorMessage
      });
      return reject({
        profileDataUpdated: false,
        errorMessage: updatedUser.data.errorMessage
      });
    }
  });
};

export const GET_USER_CREDENTIALS_SUCCESS = 'GET_USER_CREDENTIALS_SUCCESS';
export const GET_USER_CREDENTIALS_FAILURE = 'GET_USER_CREDENTIALS_FAILURE';
export const getUserCredentials = () => async (dispatch) => {
  const updatedUser = await userService.getUserCredentials();
  if (updatedUser.status === 200) {
    dispatch({
      type: GET_USER_CREDENTIALS_SUCCESS,
      firstName: updatedUser.data.firstName,
      lastName: updatedUser.data.lastName,
      email: updatedUser.data.email,
    });
  } else {
    dispatch({
      type: GET_USER_CREDENTIALS_FAILURE,
      errorMessage: updatedUser.data.errorMessage,
    });
  }
};