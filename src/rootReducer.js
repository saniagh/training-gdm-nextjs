import { combineReducers } from 'redux';
import authenticationReducer from './reducers/authenticationReducer.js';

export const createRootReducer = () => combineReducers({
	authentication: authenticationReducer,
});
