import {combineReducers} from 'redux';
import { userReducer } from './userReducer';
import { eventReducer } from './eventReducer';

const reducer = combineReducers({userReducer, eventReducer})

export default reducer;