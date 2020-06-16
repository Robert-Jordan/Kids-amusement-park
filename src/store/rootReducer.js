import { combineReducers } from 'redux';
import registration from '../views/registration/reducer';
import authentication from '../views/authentication/reducer';
import profile from '../views/profile/reducer';
import categories from '../views/category/reducer';
import checkout from '../views/checkout/reducer';

const root = combineReducers({
    registration,
    authentication,
    profile,
    categories,
    checkout,
});

export default root;