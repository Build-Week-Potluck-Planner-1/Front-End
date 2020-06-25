import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_POTLUCKS = 'GET_POTLUCKS';
const UPDATE_MY_POTLUCKS = 'UPDATE_MY_POTLUCKS';
const SET_ERROR = 'SET_ERROR';

export const getPotlucks = () => dispatch => {
    dispatch({
        type: GET_POTLUCKS
    });
    axiosWithAuth()
        .get('/api/potlucks/mine')
        .then(res=>{
            console.log('My Potlucks', res)
            dispatch({
                type: UPDATE_MY_POTLUCKS
            })
        })
        .catch(err=>console.error(err));
};