// import axios from "axios";
// const api = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// /**
//  intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired or user is no longer
//  authenticated.
//  logout the user if the token has expired
// **/
// api.interceptors.request.use((config) => {
//   if (localStorage.token) {
//     config.headers["Authorization"] = `bearer ${localStorage.token}`;
//     // api.defaults.headers.common["Authorization"] = `bearer ${localStorage.token}`;
//     // localStorage.setItem('token', localStorage.token);
//   }
//   return config;
// });

// export { api };

import axios from "axios";
import store from "../store";
import { LOGOUT_USER } from "../actions/types";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT_USER });
    }
    return Promise.reject(err);
  }
);

export { api };
