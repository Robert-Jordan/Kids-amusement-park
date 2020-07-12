import { combineReducers } from 'redux';
import registration from '../components/registration/reducer';
import authentication from '../components/authentication/reducer';
import profile from '../components/profile/reducer';
import categories from '../components/category/reducer';
import checkout from '../components/checkout/reducer';

const root = combineReducers({
    registration,
    authentication,
    profile,
    categories,
    checkout,
});

export default root;