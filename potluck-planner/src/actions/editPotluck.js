import axiosWithAuth from '../utils/axiosWithAuth';

export const EDIT_POTLUCK = 'EDIT_POTLUCK';
export const UPDATE_POTLUCK = 'UPDATE_POTLUCK';



export const editPotluck = newPotluck => dispatch => {
    dispatch({
        type: EDIT_POTLUCK
    });
    axiosWithAuth()
        .put(`/api/potlucks/${newPotluck.id}`, newPotluck)
        .then(res=>{
            console.log(res.data)
            dispatch({
                type: UPDATE_POTLUCK, payload: res.data
            })
        })
        .catch(err=>{
            console.error(err);
        })
};