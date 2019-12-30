import todoSaga from './todoRedux/sagas';
import userSagas from './userRedux/saga';
import {all} from 'redux-saga/effects';

function* rootSagas() {
  yield all([...userSagas]);
}

export default rootSagas;
