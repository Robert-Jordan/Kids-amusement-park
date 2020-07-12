import * as userConstants from './actions';

const initialState = {
  isUpdating: false,
  updated: false,
  firstName: '',
  lastName: '',
  email: '',
  errorMessage: '',
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.UPDATE_REQUEST:
      return {
        ...state,
        isUpdating: true,
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        updated: true,
      };
    case userConstants.UPDATE_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isUpdating: false,
      };
    case userConstants.GET_USER_CREDENTIALS_SUCCESS:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
      };
    case userConstants.GET_USER_CREDENTIALS_FAILURE:
      return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
};

export default updateUserReducer;
