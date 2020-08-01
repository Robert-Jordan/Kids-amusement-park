import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { UserProfileModel as User, UpdateProfileResultModel } from './types';
import * as userService from '../../services/api/index';

export const UPDATE_REQUEST = 'USERS_UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'USERS_UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'USERS_UPDATE_FAILURE';
export const UPDATE_COMPLETED = 'USERS_UPDATE_COMPLETED';
export const update = (user: User): ThunkAction<Promise<UpdateProfileResultModel>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<UpdateProfileResultModel> => {
    return new Promise<UpdateProfileResultModel>(async (resolve: any, reject: any) => {
      dispatch({ type: UPDATE_REQUEST });
      const updatedUser = await userService.update(user);
      if (updatedUser.status === 200) {
        dispatch({ type: UPDATE_SUCCESS });
        return resolve({ profileDataUpdated: true });
      } else {
        dispatch({
          type: UPDATE_FAILURE,
          errorMessage: updatedUser.data !== undefined ? updatedUser.data.errorMessage : 'Error'
        });
        return reject({
          profileDataUpdated: false,
          errorMessage: updatedUser.data !== undefined ? updatedUser.data.errorMessage : 'Error'
        });
      }
    })
  }
}

export const GET_USER_CREDENTIALS_SUCCESS = 'GET_USER_CREDENTIALS_SUCCESS';
export const GET_USER_CREDENTIALS_FAILURE = 'GET_USER_CREDENTIALS_FAILURE';
export const getUserCredentials = (userId: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const updatedUser = await userService.getUserCredentials(userId);
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
  }
}