import {
  GET_BOOKS,
  GET_BOOK_W_REVIEWER,
  CLEAR_W_REVIEWER,
  USER_LOGIN,
  USER_AUTH,
} from "./type";
import axios from "axios";

export const getBooks = (limit = 10, start = 0, order = "asc", list = "") => {
  const request = axios
    .get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then((response) => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });
  //   const request = `/api/books?limit=${limit}&skip=${start}&order=${order}`;
  console.log(request);

  return {
    type: GET_BOOKS,
    payload: request,
  };
};

export const getBooksWithReviewer = (id) => {
  const request = axios.get(`/api/getBook?id=${id}`);

  return (dispatch) => {
    request.then(({ data }) => {
      let book = data;

      axios.get(`/api/getReviewer?id=${book.ownerId}`).then(({ data }) => {
        let response = {
          book,
          reviewer: data,
        };
        console.log(response);
        dispatch({
          type: GET_BOOK_W_REVIEWER,
          payload: response,
        });
      });
    });
  };
};
export const clearBookWithReviewer = () => {
  return {
    type: CLEAR_W_REVIEWER,
    payload: {
      book: {},
      reviewer: {},
    },
  };
};

//******USERS******//

export function loginUser({ email, password }) {
  const request = axios
    .post("/api/login", { email, password })
    .then((response) => response.data);
  console.log(request);

  return {
    type: USER_LOGIN,
    payload: request,
  };
}

export function auth() {
  const request = axios.get("/api/auth").then((response) => response.data);

  return {
    type: USER_AUTH,
    payload: request,
  };
}
