import * as types from '../constants/actionTypes';
import _ from 'lodash';
import store from '../store';

export const addTask = newTask => {
  return {
    type: types.ADD_TASK,
    newTask,
  };
};

export const addTaskSuccess = newTask => {
  const tasks = store.getState().task.tasks;
  return {
    type: types.ADD_TASK_SUCCESS,
    payload: [...tasks, newTask],
  };
};

export const addTaskFailure = error => {
  return {
    type: types.ADD_TASK_FAILURE,
    payload: error,
  };
};

export const fetchTasks = () => {
  return {
    type: types.FETCH_TASKS,
  };
};

export const fetchTasksSuccess = tasks => {
  // console.log(tasks);
  return {
    type: types.FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTasksFailure = error => {
  return {
    type: types.FETCH_TASKS_FAILURE,
    payload: error,
  };
};

export const deleteTask = id => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};

export const deleteTaskSuccess = id => {
  const tasks = store.getState().task.tasks;
  const newArr = _.filter(tasks, item => item.id !== id);
  return {
    type: types.DELETE_TASK_SUCCESS,
    payload: newArr,
  };
};

export const updateTask = (id, task) => {
  return {
    type: types.UPDATE_TASK,
    id,
    task,
  };
};

export function updateTaskSuccess(id, task) {
  const tasks = store.getState().task.tasks;
  const index = tasks.findIndex(function(task) {
    return task.id === id;
  });
  //console.log('index', index);
  tasks[index].taskName = task.taskName;
  tasks[index].date = task.date;

  return {
    type: types.UPDATE_TASK_SUCCESS,
    payload: [...tasks],
  };
}
