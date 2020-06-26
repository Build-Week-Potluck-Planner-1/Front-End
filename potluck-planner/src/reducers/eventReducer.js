import {REGISTER, UPDATE_REGISTER} from '../actions/register';
import {ADD_POTLUCK, UPDATE_POTLUCKS, SET_ERROR} from '../actions/addPotluck';
import {GET_POTLUCKS, SET_POTLUCKS} from '../actions/getPotlucks';
import {EDIT_POTLUCK, UPDATE_POTLUCK} from '../actions/editPotluck';
import {DELETE_POTLUCK} from '../actions/deletePotluck';
import {CHECK_DELETE} from '../actions/checkDelete'
import {ADD_GUEST, UPDATE_GUESTS, RESET_SUCCESS} from '../actions/addGuest'

const initialState = {
    isFetchingData: false,
    potlucks: [],
    deletePotlucks: '',
    error: '',
    success: false
}

export const reducer = (state = initialState, action)=>{
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
        case ADD_GUEST:
            return{
                ...state,
                isFetchingData: true
            }
        case UPDATE_GUESTS:
            return{
                ...state,
                success: true,
                isFetchingData: false
            }
        case RESET_SUCCESS:
            return{
                ...state,
                success: false
            }
        case CHECK_DELETE:
            return{
                ...state,
                potlucks: state.potlucks.filter(potluck=>{
                    return potluck.locationName !== state.deletePotlucks
                })
            }
        case DELETE_POTLUCK:
            return{
                ...state,
                deletePotlucks: action.payload
            }
        case GET_POTLUCKS:
            return{
                ...state,
                isFetchingData: true
            }
        case EDIT_POTLUCK:
            return{
                ...state,
                isFetchingData: true
            }
        case UPDATE_POTLUCK:
            return{
                ...state,
                isFetchingData: false,
                potlucks: state.potlucks.map((potluck)=>{
                    if(potluck.id === action.payload.id){
                        return {...action.payload, role: potluck.role}
                    }else{
                        return potluck
                    }
                })
            }
        case ADD_POTLUCK:
            return{
                ...state,
                isFetchingData: true,
            }
        case UPDATE_POTLUCKS:
            return{
                ...state,
                isFetchingData: false,
                potlucks: [action.payload, ...state.potlucks]
            }
        case SET_POTLUCKS:
            return{
                ...state,
                isFetchingData: false,
                potlucks: action.payload
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default: return state
    };
};
