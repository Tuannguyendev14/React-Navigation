import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  LOG_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './actions';

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
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case LOG_IN:
      return {...state, loading: true};

    case LOGIN_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case LOGIN_FAILURE:
      return {...state, error: action.payload, loading: false};

    case LOGOUT_SUCCESS:
      // console.log(action.type);
      return {...initialState};

    default:
      return state;
  }
};
export default userReducer;
