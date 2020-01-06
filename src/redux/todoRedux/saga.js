import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchTasksSuccess,
  fetchTasksFailure,
  deleteTaskSuccess,
  addTaskSuccess,
  addTaskFailure,
  updateTaskSuccess,
} from './actions';
import * as types from '../constants/actionTypes';
import {getTasks, deleteTask, addTask, updateTask} from '../../api/todo';

export function* fetchTaskSaga() {
  try {
    const response = yield call(getTasks);
    const data = response.data;
    // console.log('response', data);
    yield put(fetchTasksSuccess(data));
  } catch (error) {
    console.log('error', error.toJSON());
    yield put(fetchTasksFailure({error}));
  }
}

export function* addTaskSaga({newTask}) {
  try {
    const response = yield call(addTask, newTask);
    // console.log(newTask);
    const task = response.data;
    // console.log('Success', task);
    yield put(addTaskSuccess(task));
  } catch (error) {
    console.log('error', error);
    yield put(addTaskFailure(error));
  }
}

export function* deleteTaskSaga({id}) {
  try {
    const response = yield call(deleteTask, id);
    const data = response.data;
    // console.log(id);
    yield put(deleteTaskSuccess(id));
  } catch (error) {
    console.log(error);
    //yield put(deleteTaskFailure({error}));
  }
}

export function* updateTaskSaga({id, task}) {
  try {
    const response = yield call(updateTask, id, task);
    const data = response.data;
    console.log(id, task);
    yield put(updateTaskSuccess(id, task));
  } catch (error) {
    console.log(error);
    //yield put(updateTaskFailure({error}));
  }
}

const todoSagas = () => [
  takeLatest(types.FETCH_TASKS, fetchTaskSaga),
  takeLatest(types.ADD_TASK, addTaskSaga),
  takeLatest(types.DELETE_TASK, deleteTaskSaga),
  takeLatest(types.UPDATE_TASK, updateTaskSaga),
];

export default todoSagas();
