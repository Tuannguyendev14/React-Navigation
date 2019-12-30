import {call, put, takeLatest} from 'redux-saga/effects';
import {ADD_USER} from './actions';
import {register} from '../../api/user';

export function* registerSaga(action) {
  try {
    const response = yield call(register, action.data);
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
  }
}

const userSagas = () => [takeLatest(ADD_USER, registerSaga)];

export default userSagas();
