import { combineReducers, Reducer } from 'redux';
// reducers
import registrationReducer from '../../components/registration/reducer';
import authenticationReducer from '../../components/authentication/reducer';
import profileReducer from '../../components/profile/reducer';
import categoriesReducer from '../../components/category/reducer';
import checkoutReducer from '../../components/checkout/reducer';
// types
import { AuthenticationState } from '../../components/authentication/types';
import { RegistrationState } from '../../components/registration/types';
import { ProfileState } from '../../components/profile/types';
import { CategoryState } from '../../components/category/types';
import { CheckoutState } from '../../components/checkout/types';

// The top-level state object
export interface ApplicationState {
    registration: RegistrationState;
    authentication: AuthenticationState;
    profile: ProfileState;
    categories: CategoryState;
    checkout: CheckoutState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    registration: registrationReducer,
    authentication: authenticationReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    checkout: checkoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;