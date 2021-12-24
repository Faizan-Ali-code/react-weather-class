import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers/index";
// import { reducer } from "./reducers/weatherReducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

// export const store = createStore(reducer);
