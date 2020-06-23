import axiosWithAuth from '../utils/axiosWithAuth';

export const REGISTER = 'REGISTER';
export const UPDATE_REGISTER = 'UPDATE_REGISTER';
export const SET_ERROR = 'SET_ERROR';

export const userReg = newUser => dispatch => {
    dispatch({
        type: REGISTER
    });
    axiosWithAuth()
        .post('/api/auth/register', newUser)
        .then(res=>{
            dispatch({
                type: UPDATE_REGISTER
        });
        })
        .catch(err=>{
            console.error(err);
        });
};