import axiosWithAuth from '../utils/axiosWithAuth';

export const ADD_GUEST = 'ADD_GUEST';
export const UPDATE_GUESTS = 'UPDATE_GUESTS';
export const RESET_SUCCESS = 'RESET_SUCCESS';
const SET_ERROR = 'SET_ERROR';

export const addGuest = guest => dispatch => {
    dispatch({
        type: ADD_GUEST
    });
    axiosWithAuth()
        .post('/api/potlucks/user/add', guest)
        .then(res=>{
            dispatch({
                type: UPDATE_GUESTS
            })
        })
        .catch(err=> {
            console.error(err);
            dispatch({
                type: SET_ERROR, payload: err
            });
        })
        .finally(()=>{
            setTimeout(()=>{
                dispatch({
                    type: RESET_SUCCESS
                }, 2000)
            })
        })
};