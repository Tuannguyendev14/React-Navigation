import * as types from '../constants/actionTypes';

var initialState = {
  tasks: {},
  error: {},
  loading: false,
};

var tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {...state, tasks: action.payload};

    case types.DELETE_TASK:
      return {...state, tasks: action.payload};

    case types.UPDATE_TASK:
      return {...state, tasks: action.payload};

    case types.FETCH_TASKS:
      return {...state, loading: true};

    case types.FETCH_TASKS_SUCCESS:
      console.log(action.type);
      return {...state, tasks: action.payload, loading: false};

    case types.FETCH_TASKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default tasks;
