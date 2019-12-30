import * as types from '../constants/actionTypes';

var initialState = {
  tasks: [
    {
      key: '1',
      taskName: 'Exercise1',
      date: '29/12/2019',
    },
    {
      key: '2',
      taskName: 'Exercise2',
      date: '29/12/2019',
    },
    {
      key: '3',
      taskName: 'Exercise3',
      date: '29/11/2019',
    },
    {
      key: '4',
      taskName: 'Exercise4',
      date: '29/11/2019',
    },
    {
      key: '5',
      taskName: 'Exercise5',
      date: '29/12/2019',
    },
    {
      key: '6',
      taskName: 'Exercise6',
      date: '29/10/2019',
    },
    {
      key: '7',
      taskName: 'Exercise7',
      date: '29/10/2019',
    },
    {
      key: '8',
      taskName: 'Exercise8',
      date: '29/12/2019',
    },
    {
      key: '9',
      taskName: 'Exercise9',
      date: '29/12/2019',
    },
  ],
};

var tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_TASKS:
      state = action.tasks;
      return state;

    case types.ADD_TASK:
      return {...state, tasks: action.payload};

    case types.DELETE_TASK:
      return {...state, tasks: action.payload};

    case types.UPDATE_TASK:
      return {...state, tasks: action.payload};

    default:
      return state;
  }
};
export default tasks;
