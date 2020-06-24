import React, {useState} from 'react';
import {connect} from 'react-redux';
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

function HostEvent(props) {
    const {addPotluck} = props
    const [eventVals, setEventVals] = useState(initialVals);

    const changeHandler = event =>{
        const name = event.target.name;
        const value = event.target.value;

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
                    onChange={changeHandler}
                    />
                </div>
            </div>
            <div className='formInputDiv'>
                <div><label>State:</label></div>
                <div>
                    <select
                     name='locationState'
                     value={eventVals.locationState}
                     onChange={changeHandler}
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
                    onChange={changeHandler}
                    >
                        <CountryList/>
                    </select>
                </div>
            </div>
            <div className='formInputDiv'>
                <button>Create Event</button>
                <button>Cancel</button>
            </div>
        </form>
    );
}

export default connect(null, {addPotluck})(HostEvent);