import axiosWithAuth from '../utils/axiosWithAuth';

export const LOGIN = 'LOGIN';
export const UPDATE_LOGIN = 'UPDATE_LOGIN';
export const SET_ERROR = 'SET_ERROR';

export const userLogin = user => dispatch => {
    dispatch({
        type: LOGIN,
        payload: user
    });
    axiosWithAuth()
        .post('/api/auth/login', user)
        .then(res=>{
            window.localStorage.setItem('token', res.data.authToken)
        })
        .catch(err=>{
            console.error(err);
        });
};