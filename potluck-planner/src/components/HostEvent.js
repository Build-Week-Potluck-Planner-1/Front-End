import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {addPotluck} from '../actions/addPotluck';
import CountryList from './countryList';
import StateList from './stateList';

const initialVals = {
    locationName: '',
    locationAddress: '',
    locationStreet: '',
    locationCity: '',
    locationState: '',
    locationPostcode: '',
    locationCountry: ''
}

const clearErrs = {
    locationName: '',
    locationAddress: '',
    locationStreet: '',
    locationPostcode: ''
};

const hostSchema = yup.object().shape({
    locationName: yup
        .string()
        .min(4, 'Event name requires a minimum of 4 characters')
        .required('An Event Name is required for all events'),
    locationAddress: yup
        .number()
        .required("An Address Number is required. Enter '0' if no known address, like public parks"),
    locationStreet: yup
        .string()
        .min(2, 'Two characters minimum required for Street names')
        .required('A Street name is required to submit this form.'),
    locationPostcode: yup
        .string()
        .required('Postal code of location is needed for all events.')
});

function HostEvent(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [eventVals, setEventVals] = useState(initialVals);
    const [hostingErrors, setHostErrors] = useState(clearErrs);

    const changeHandler = event =>{
        const name = event.target.name;
        const value = event.target.value;

        yup
        .reach(hostSchema, name)
        .validate(value)
        .then(() => {
            setHostErrors({...hostingErrors, [name]: ''});
        })
        .catch(hErrors => {
            setHostErrors({...hostingErrors, [name]: hErrors.errors[0]});
        })

        if (name==='locationAddress'){
            setEventVals({
                ...eventVals,
                [name]: Number(value)
            })
        } else {
            setEventVals({
            ...eventVals,
            [name]: value
            });
        };
    };

    const changeOptional = function(optEvent) {
        const {name, value} = optEvent.target;
        setEventVals({...eventVals, [name]: value});
    };

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(addPotluck(eventVals))
        //Peter's Test to clear form after pressing 'Create Event'
        setEventVals(initialVals);
        history.push(`/dashboard`)
    }

    return (
        <div className='locationForm'>
            <form onSubmit={handleSubmit}>
                <h2>Host a New Event</h2>
                <h3>Fill out Location of Event below:</h3>
                <div className='formInputDiv'>
                    <div><label>Name of Event:</label></div>
                    <div>
                        <input 
                        type='text' 
                        name='locationName' 
                        value={eventVals.locationName}
                        onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='formInputDiv'>
                    <div>
                        <label>Address #:</label>
                    </div>
                    <div>
                        <input 
                        type='number' 
                        name='locationAddress'
                        value={eventVals.locationAddress}
                        onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='formInputDiv'>
                    <div>
                        <label>Street:</label>
                    </div>
                    <div>
                        <input 
                        type='text' 
                        name='locationStreet' 
                        value={eventVals.locationStreet}
                        onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='formInputDiv'>
                    <div>
                        <label>City:</label>
                    </div>
                    <div>
                        <input 
                        type='text' 
                        name='locationCity' 
                        value={eventVals.locationCity}
                        onChange={changeOptional}
                        />
                    </div>
                </div>
                <div className='formInputDiv'>
                    <div><label>State:</label></div>
                    <div>
                        <select
                        name='locationState'
                        value={eventVals.locationState}
                        onChange={changeOptional}
                        >
                            <StateList/>
                        </select>
                    </div>
                </div>
                <div className='formInputDiv'>
                    <div>
                        <label>ZIP Code:</label>
                    </div>
                    <div>
                        <input 
                        type='text' 
                        name='locationPostcode' 
                        value={eventVals.locationPostcode}
                        onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='formInputDiv'>
                    <div><label>Country:</label></div>
                    <div>
                        <select 
                        name='locationCountry'
                        value={eventVals.locationCountry}
                        onChange={changeOptional}
                        >
                            <CountryList/>
                        </select>
                    </div>
                </div>
                <div className='formInputDiv'>
                    <button>Create Event</button>
                    <button>Cancel</button>
                </div>
                <div className='errorsDiv'>
                    <div>{hostingErrors.locationName}</div>
                    <div>{hostingErrors.locationAddress}</div>
                    <div>{hostingErrors.locationStreet}</div>
                    <div>{hostingErrors.locationPostcode}</div>
                </div>
            </form>
        </div>
    );
}

export default HostEvent;