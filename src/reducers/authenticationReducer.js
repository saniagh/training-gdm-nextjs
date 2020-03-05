import { cloneDeep } from "lodash";

export default function authenticationReducer(state = cloneDeep(defaultState), action) {
	let newState = cloneDeep(state);
	switch (action.type) {
		default:
			return newState;
	}
};

const defaultLogin = {
	email: '',
	password: ''
};

const defaultState = {
	login: cloneDeep(defaultLogin),
	loggingIn: false
};
