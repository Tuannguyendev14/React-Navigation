import {call, put, takeLatest} from 'redux-saga/effects';
import {
  ADD_USER,
  addUserSuccess,
  addUserFailure,
  LOG_IN,
  logInSuccess,
  logInFailure,
} from './actions';
import {register, login} from '../../api/user';
import {onChangeIntoMainScreen} from '../../navigation';
import {AsyncStorage} from 'react-native';

export function* registerSaga(action) {
  try {
    const response = yield call(register, action.data);
    const data = response.data;
    yield put(addUserSuccess(data));
    AsyncStorage.setItem('user', JSON.stringify(data));
    onChangeIntoMainScreen();
    console.log('response', response);
  } catch (error) {
    console.log('error', error.toJSON());
    yield put(addUserFailure({error}));
  }
}

export function* loginSaga({data}) {
  try {
    const response = yield call(login, data);
    const userData = response.data;
    console.log('userData', userData);
    AsyncStorage.setItem('user', JSON.stringify(userData));
    yield put(logInSuccess(userData));
    onChangeIntoMainScreen();
  } catch (error) {
    console.log('error', error.toJSON());
    yield put(logInFailure(error));
  }
}

const userSagas = () => [
  takeLatest(ADD_USER, registerSaga),
  takeLatest(LOG_IN, loginSaga),
];

export default userSagas();
