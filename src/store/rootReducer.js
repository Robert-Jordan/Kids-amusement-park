import { combineReducers } from 'redux';
import registration from '../views/registration/reducer'
import authentication from '../views/authentication/reducer'

const root = combineReducers({
    registration,
    authentication,
});

export default root;