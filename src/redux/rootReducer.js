import { combineReducers } from "redux";
import { postReducer } from "./Post/postReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
});
