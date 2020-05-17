import { combineReducers } from 'redux';
import registration from '../views/registration/reducer';
import authentication from '../views/authentication/reducer';
import profile from '../views/profile/reducer';

const root = combineReducers({
    registration,
    authentication,
    profile,
});

export default root;