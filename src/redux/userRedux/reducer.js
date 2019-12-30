import {ADD_USER, ADD_USER_SUCCESS, ADD_USER_FAILURE} from './actions';

const initialState = {
  data: {},
  error: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, loading: true};

    case ADD_USER_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case ADD_USER_FAILURE:
      return {...state, error: action.payload, loading: false};

    default:
      return state;
  }
};
export default userReducer;
