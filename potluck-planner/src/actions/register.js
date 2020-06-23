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
            //Peter's Test
            console.log('newUser in register.js is:', newUser);
            console.log('res in register.js is:', res);
            //End of Peter's Test
        })
        .catch(err=>{
            console.error(err);
        });
};