import {call, put, takeLatest} from 'redux-saga/effects';
import {fectchTasksSuccess, fectchTasksFailure} from './actions';
import * as types from '../constants/actionTypes';
import {getTasks} from '../../api/todo';
// import {onChangeIntoMainScreen} from '../../navigation';

export function* fetchTaskSaga() {
  try {
    const response = yield call(getTasks);
    const data = response.data;
    console.log('response', data);
    yield put(fectchTasksSuccess(data));
  } catch (error) {
    console.log('error', error.toJSON());
    yield put(fectchTasksFailure({error}));
  }
}

const todoSagas = () => [takeLatest(types.FETCH_TASKS, fetchTaskSaga)];

export default todoSagas();
