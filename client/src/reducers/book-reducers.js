import {
  GET_BOOKS,
  GET_BOOK_W_REVIEWER,
  CLEAR_W_REVIEWER,
  ADD_BOOK,
  CLEAR_NEWBOOK,
  GET_USER_POSTS,
} from "../actions/type";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        list: action.payload,
      };
    case GET_BOOK_W_REVIEWER:
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer,
      };
    case CLEAR_W_REVIEWER:
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer,
      };
    case ADD_BOOK:
      return {
        ...state,
        newBook: action.payload,
      };
    case CLEAR_NEWBOOK:
      return {
        ...state,
        newBook: action.payload,
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
