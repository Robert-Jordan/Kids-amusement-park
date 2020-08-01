import { RegistrationState } from './types';
import { Reducer } from 'redux';
import { REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from './actions';

// Type-safe initialState!
const initialState: RegistrationState = {
  isRegistering: false,
  registered: false,
  errorMessage: ''
};

// Unfortunately, typing of the `action` parameter seems to be broken at the moment.
// This should be fixed in Redux 4.x, but for now, just augment your types.

const registrationReducer: Reducer<RegistrationState> = (state: RegistrationState = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state, isRegistering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state, isRegistering: false, registered: true
      };
    case REGISTER_FAILURE:
      return {
        ...state, errorMessage: action.errorMessage, isRegistering: false
      };
    default:
      return state;
  }
};

export default registrationReducer;