import {combineReducers} from 'redux';

import task from './tasks';
// import {firestoreReducer} from 'redux-firestore';

const myReducer = combineReducers({
  task,
  // firestore: firestoreReducer,
});

export default myReducer;
