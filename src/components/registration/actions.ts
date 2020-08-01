import { RegisterRequestAction, RegisterSuccessAction, RegisterFailureAction, RegistrationResultModel, User } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import * as apiService from '../../services/api/index';

export const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE';

// check ho to properly call actions
export const register = (user: User): ThunkAction<Promise<RegistrationResultModel>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<RegistrationResultModel> => {
    return new Promise<RegistrationResultModel>(async (resolve: any, reject: any) => {
      dispatch(registerRequest(user));
      const registeredUser = await apiService.register(user);
      if (registeredUser.status === 200) {
        dispatch(registerSuccess);
        return resolve({
            successfulRegistration: true,
            errorMessage: ''
          });
      } else {
        dispatch(registerFailure(user));
        return reject({
          successfulRegistration: false,
          errorMessage: registeredUser.data.errorMessage
        });
      }
    })
  }
}

export const registerRequest = (user: User): RegisterRequestAction =>
  ({
    type: REGISTER_REQUEST,
    user
  });

export const registerSuccess = (): RegisterSuccessAction =>
  ({
    type: REGISTER_SUCCESS
  });

export const registerFailure = (user: User): RegisterFailureAction =>
  ({
    type: REGISTER_FAILURE,
    user
  });