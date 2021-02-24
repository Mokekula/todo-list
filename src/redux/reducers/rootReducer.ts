import { combineReducers } from "redux";
import { loaderReducer } from "./loaderReducer";
import { notesReducer } from "./notesReducer";

export const rootReducer = combineReducers({
  loader: loaderReducer,
  notes: notesReducer,
});