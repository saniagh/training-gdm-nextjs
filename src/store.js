import { createStore, applyMiddleware } from 'redux';
import { createRootReducer } from './rootReducer.js';
import thunk from 'redux-thunk';

let generateNewStore;

if (process.env.NODE_ENV === 'development') {
	const { composeWithDevTools } = require('redux-devtools-extension');
	generateNewStore = initialState => {
		return createStore(
			createRootReducer(),
			initialState,
			composeWithDevTools(
				applyMiddleware(thunk),
			)
		);
	};
} else {
	generateNewStore = initialState => {
		return createStore(
			createRootReducer(),
			initialState,
			applyMiddleware(thunk)
		);
	}
}

export default generateNewStore;
