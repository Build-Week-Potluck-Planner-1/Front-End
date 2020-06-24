import axiosWithAuth from '../utils/axiosWithAuth';

export const EDIT_POTLUCK = 'EDIT_POTLUCK';
export const UPDATE_POTLUCK = 'UPDATE_POTLUCK';
const SET_ERROR = 'SET_ERROR';

export const editPotluck = newPotluck => dispatch => {
    dispatch({
        type: EDIT_POTLUCK
    });
    axiosWithAuth()
        .put(`/api/potlucks/${newPotluck.id}`, newPotluck)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.error(err);
        });
};