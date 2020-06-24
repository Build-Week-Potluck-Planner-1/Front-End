import axiosWithAuth from '../utils/axiosWithAuth';

export const ADD_GUEST = 'ADD_GUEST';
export const UPDATE_GUESTS = 'UPDATE_GUESTS';
const SET_ERROR = 'SET_ERROR';

export const addGuest = guest => dispatch =>{
    dispatch({
        type: ADD_GUEST
    });
    axiosWithAuth()
        .post('/api/potlucks/user/add', guest)
        .then(res=>{
            console.log('response from potlucks/user/add', res)
        })
        .catch(err=>console.error(err));
};