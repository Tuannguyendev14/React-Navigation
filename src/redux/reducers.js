import {combineReducers} from 'redux';

import task from './todoRedux/reducer';
import userReducer from './userRedux/reducer';

const myReducer = combineReducers({
  task,
  user: userReducer,
});

export default myReducer;
