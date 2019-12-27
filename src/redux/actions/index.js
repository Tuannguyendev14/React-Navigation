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
  const newArr = _.filter(tasks, item => item.key !== id);
  return {
    type: types.DELETE_TASK,
    payload: newArr,
  };
};

export function onUpdateTask(id, text) {
  const tasks = store.getState().task.tasks;

  const index = tasks.findIndex(function(task) {
    return task.key === id;
  });
  // tasks[index].taskName = text;
  console.log('ok');
  return {
    type: types.UPDATE_TASK,
    payload: [...tasks],
  };
}
