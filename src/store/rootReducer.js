import { combineReducers } from 'redux';
import registration from '../views/registration/reducer'

const root = combineReducers({
    registration,
});

export default root;