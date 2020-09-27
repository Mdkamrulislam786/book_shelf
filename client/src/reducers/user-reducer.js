import { USER_LOGIN, USER_AUTH, GET_USER_POSTS } from "../actions/type";

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case USER_AUTH:
      return {
        ...state,
        login: action.payload,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    default:
      return state;
  }
}
