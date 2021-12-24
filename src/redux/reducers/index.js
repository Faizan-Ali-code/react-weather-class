import { combineReducers } from "redux";
import { reducer } from "./weatherReducers";

export const reducers = combineReducers({ todos: reducer });
