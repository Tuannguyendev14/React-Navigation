import * as types from '../constants/actionTypes';
import _ from 'lodash';
import store from '../store';

export const addTask = newTask => {
  const tasks = store.getState().task.tasks;
  return {
    type: types.ADD_TASK,
    payload: [...tasks, newTask],
  };
};

export const actDeleteTask = id => {
  const tasks = store.getState().task.tasks;
  const newArr = _.filter(tasks, item => item.id !== id);
  return {
    type: types.DELETE_TASK,
    payload: newArr,
  };
};

export function updateTask(id, task) {
  const tasks = store.getState().task.tasks;
  const index = tasks.findIndex(function(task) {
    return task.id === id;
  });
  //console.log('index', index);
  tasks[index].taskName = task.taskName;
  tasks[index].date = task.date;

  return {
    type: types.UPDATE_TASK,
    payload: [...tasks],
  };
}

export const fetchTasks = () => {
  return {
    type: types.FETCH_TASKS,
  };
};

export const fectchTasksSuccess = tasks => {
  // console.log(tasks);
  return {
    type: types.FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fectchTasksFailure = error => {
  return {
    type: types.FETCH_TASKS_FAILURE,
    payload: error,
  };
};
