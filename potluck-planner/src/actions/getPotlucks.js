import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_POTLUCKS = 'GET_POTLUCKS';
export const SET_POTLUCKS = 'SET_POTLUCKS';
const SET_ERROR = 'SET_ERROR';

export const getPotlucks = () => dispatch => {
    dispatch({
        type: GET_POTLUCKS
    });
    axiosWithAuth()
        .get('/api/potlucks')
        .then(res=>{
            console.log('Potlucks', res.data)
            const newPotlucks = res.data.map((potluck, index)=>{
                const newPotluck = {
                    id: potluck.potluckId,
                    locationName: potluck.locationName,
                    locationAddress: potluck.locationAddress,
                    locationStreet: potluck.locationStreet,
                    locationCity: potluck.locationCity,
                    locationState: potluck.locationState,
                    locationCountry: potluck.locationCountry,
                    locationPostcode: potluck.locationPostcode,
                    role: potluck.role
                }
                return newPotluck;
            })
            console.log(newPotlucks)
            dispatch({
                type: SET_POTLUCKS, payload: newPotlucks
            })
        })
        .catch(err=>{
            console.error(err)
            dispatch({
                type: SET_ERROR, payload: err
            });
        });
};