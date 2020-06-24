import {ADD_POTLUCK, UPDATE_POTLUCKS, SET_ERROR} from '../actions/addPotluck';
import {GET_POTLUCKS, UPDATE_MY_POTLUCKS} from '../actions/getPotlucks';

const initialState = {
    isFetchingData: false,
    potlucks: [],
    myPotlucks: [],
}

export const eventReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_POTLUCK:
            return{
                ...state,
                isFetchingData: true
            }
        case UPDATE_POTLUCKS:
            return{
                ...state,
                isFetchingData: false
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false
            }
        default: return state
    };
};