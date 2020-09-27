import { combineReducers } from "redux";
import user from "./user-reducer";
import books from "./book-reducers";

const rootReducer = combineReducers({
  user,
  books,
});
export default rootReducer;
