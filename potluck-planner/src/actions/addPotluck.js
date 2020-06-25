import axiosWithAuth from '../utils/axiosWithAuth';

export const ADD_POTLUCK = 'ADD_POTLUCK';
export const UPDATE_POTLUCKS = 'UPDATE_POTLUCKS';
export const SET_ERROR = 'SET_ERROR';

export const addPotluck = potluck => dispatch => {
    dispatch({
        type: ADD_POTLUCK
    });
    axiosWithAuth()
        .post('/api/potlucks', potluck)
        .then(res=>{
            dispatch({
                type: UPDATE_POTLUCKS, payload: res.data[0]
            })
        })
        .catch(err=> {
            console.error(err);
            dispatch({
                type: SET_ERROR, payload: err
            });
        });
};