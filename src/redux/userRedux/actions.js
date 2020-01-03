export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
export const LOG_IN = 'LOG_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const addUser = data => {
  return {
    type: ADD_USER,
    data,
  };
};

export const addUserSuccess = data => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

export const addUserFailure = error => {
  return {
    type: ADD_USER_FAILURE,
    payload: error,
  };
};

export const logIn = data => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logInSuccess = data => {
  // console.log('logInSuccess', data);
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const logInFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
