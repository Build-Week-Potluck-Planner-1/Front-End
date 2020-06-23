import {REGISTER, UPDATE_REGISTER} from '../actions/register';
const initialState = {
    isFetchingData: false,
    username: '',
    email: '',
    firstName: '',
    lastName: ''
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
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
      default: return state
    };
};