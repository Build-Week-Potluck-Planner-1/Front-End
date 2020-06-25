// import axiosWithAuth from '../utils/axiosWithAuth';

export const DELETE_POTLUCK = 'DELETE_POTLUCK';

export const deletePotluck = name => dispatch => {
    dispatch({
        type: DELETE_POTLUCK, payload: name
    });
    // axiosWithAuth()
    //     .delete(`/api/potlucks/${id}`)
    //     .then(res=>console.log(res))
    //     .catch(err=>console.error(`id = ${id}`, err))
};