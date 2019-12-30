export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

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
