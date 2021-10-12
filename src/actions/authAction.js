import {
  REGISTER_ERROR,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_ERROR,
  LOAD_USER,
  LOAD_USER_ERROR,
  EDIT_USER_DETAILS,
  EDIT_USER_DETAILS_ERROR,
  LOADING,
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_ERROR,
} from "./types";

import { api } from "../utils/api";

const API = "https://obscure-wildwood-53817.herokuapp.com/v1/auth"

export const loadUser = () => async (dispatch) => {
  try {
    const response = await api.get(`${API}/me`);

    dispatch({
      type: LOAD_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_ERROR,
      payload: error.response,
    });
  }
};

export const googleLogin = (body) => async (dispatch) => {
  try {
    const response = await api.post(`${API}/google`, body);
    dispatch({
      type: GOOGLE_LOGIN,
      payload: response.data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: GOOGLE_LOGIN_ERROR,
      payload: error.response,
    });
  }
};

export const loginUser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`${API}/login`, body);
    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: error.response.data,
    });
  }
};

export const registerUser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`${API}/register`, body);
    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: error.response.data,
    });
  }
};

export const editUser = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`${API}/edit`, body);
    dispatch({
      type: EDIT_USER_DETAILS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_USER_DETAILS_ERROR,
      payload: error.response.data,
    });
  }
};

export const logOutUser = () => async (dispatch) => {
  try {
    const response = await api.post("");
    dispatch({
      type: LOGOUT_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "SUCCESS",
    });
  }
};
