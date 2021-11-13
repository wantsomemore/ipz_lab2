import { AUTH_SET_USER_IS_DOCTOR, AUTH_SET_USER_AUTH } from "../types/types";

const initialState = {
  isDoctor: null,
  login: null,
  id: null,
  token: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER_IS_DOCTOR:
      return Object.assign({}, state, {
        isDoctor: action.isDoctor,
      });
    case AUTH_SET_USER_AUTH:
      return Object.assign({}, state, {
        login: action.userData.login,
        id: action.userData.id,
        isAuthenticated: true,
        token: action.userData.token,
      });
    default:
      return state;
  }
};
