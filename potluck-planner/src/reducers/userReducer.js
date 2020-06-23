import {LOGIN, UPDATE_LOGIN, SET_ERROR} from '../actions/login';
import {REGISTER, UPDATE_REGISTER} from '../actions/register';
import {LOGOUT} from '../actions/logout'
const initialState = {
    isFetchingData: false,
    username: '',
    email: '',
    firstName: '',
    lastName: ''
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
      case LOGIN: 
        return{
          ...state,
          username: action.payload.username
      }
      case REGISTER:
        return{
          ...state,
          isFetchingData: true
        }
      case UPDATE_REGISTER:
        return{
          ...state,
          isFetchingData: false
        }
      case LOGOUT:
        return{
          ...state,
          username: ''
        }
      default: return state
    };
};