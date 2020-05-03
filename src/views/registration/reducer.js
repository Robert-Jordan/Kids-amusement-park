import * as userConstants from './actions';

const initialState = { isRegistering: false, registered: false, errorMessage: '' };

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...state, isRegistering: true };
    case userConstants.REGISTER_SUCCESS:
      return { ...state, isRegistering: false, registered: true };
    case userConstants.REGISTER_FAILURE:
      return { ...state, errorMessage: action.errorMessage, isRegistering: false };
    default:
      return state;
  }
};

export default registrationReducer;
