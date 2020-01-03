import todoSagas from './todoRedux/saga';
import userSagas from './userRedux/saga';
import {all} from 'redux-saga/effects';

function* rootSagas() {
  yield all([...userSagas, ...todoSagas]);
}

export default rootSagas;
