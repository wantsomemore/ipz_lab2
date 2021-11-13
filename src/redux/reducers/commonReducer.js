import {
  SET_SERVER_ERROR,
  SET_FETCHING_IN_PROCESS,
  SET_ROLE,
} from "../types/types";

const initialState = {
  role: null,
  serverError: null,
  fetchingInProcess: false,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVER_ERROR:
      return Object.assign({}, state, { serverError: action.serverError });
    case SET_FETCHING_IN_PROCESS:
      return Object.assign({}, state, {
        fetchingInProcess: action.fetchingInProcess,
      });
    case SET_ROLE:
      return Object.assign({}, state, { role: action.role });
    default:
      return state;
  }
};
