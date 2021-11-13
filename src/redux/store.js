import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
/* import { examinationReducer } from "./reducers/examinationReducer";
import { commonReducer } from "./reducers/commonReducer"; */

let reducers = combineReducers({
  auth: authReducer,
  /* examination: examinationReducer,
  common: commonReducer */
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
  )
);
