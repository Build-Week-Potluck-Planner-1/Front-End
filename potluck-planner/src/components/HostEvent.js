import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addPotluck} from '../actions/addPotluck';
import CountryList from './countryList';
import StateList from './stateList';
import * as yup from 'yup';

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
    locationPostalcode: yup
        .string()
        .required('Postal code of location is needed for all events.')
});

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
  locationPostcode: '',
}

function HostEvent(props) {
    const {addPotluck} = props
    const [eventVals, setEventVals] = useState(initialVals);
    const [hostingErrors, setHostErrors] = useState(clearErrs)

    const changeHandler = event =>{
        const name = event.target.name;
        const value = event.target.value;
        yup
        .reach(hostSchema, name)
        .validate(value)
        .then(() => {
           if (name==='locationAddress'){
               setEventVals({...eventVals, [name]: Number(value)})
           } else {
              setEventVals({...eventVals, [name]: value});
           };
         })
         .catch(hErrors => {
           setHostErrors({...hostingErrors, [name]: hErrors.errors[0]});
          })
    };
    
      const optionalHandler = event =>{
        const name = event.target.name;
        const value = event.target.value;
        
        setEventVals({...eventVals, [name]: value});

    };

    const handleSubmit = event =>{
        event.preventDefault();
        addPotluck(eventVals)
    }

    return (
        <form className='locationForm' onSubmit={handleSubmit}>
            <h2>Host a New Event</h2>
            <h3>Fill out Location of Event below:</h3>
            <div className='formInputDiv'>
                <div><label>Name/Descr of Location:</label></div>
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
                    onChange={optionalHandler}
                    />
                </div>
            </div>
            <div className='formInputDiv'>
                <div><label>State:</label></div>
                <div>
                    <select
                     name='locationState'
                     value={eventVals.locationState}
                     onChange={optionalHandler}
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
                    onChange={optionalHandler}
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
                    <div>{hostingErrors.locationPostalcode}</div>
                </div>
            </form>
        </div>
    );
}

export default connect(null, {addPotluck})(HostEvent);