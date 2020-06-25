import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function SearchEvents(props) {
    const [searchEvents, getAllEvents] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [newEvents, setNewEvents] = useState(searchEvents);


    const filterEvents = (event)=>{
        const value = event.target.value;
        setSearchVal(value)
        setNewEvents(searchEvents.filter(potluck=>{
            if(!searchVal){
                return SearchEvents
            }else{
                return potluck.locationName.toLowerCase().includes(value.toLowerCase())
            }
            
        }));
    }

    useEffect(() => {
        axiosWithAuth().get('/api/potlucks')
            .then(responseSearch => {
                getAllEvents(responseSearch.data);
                setNewEvents(responseSearch.data);
            })
            .catch(responseError => {
                console.log('Error in searching for potlucks');
            })
    }, []);

    return (
        <>
        <label>
            Search Events 
            <input
                value={searchVal}
                onChange={filterEvents}
            />
        </label>
        <div className='eventContainer'>
            {newEvents.map(eventItem => (
                <PotluckDetails key={eventItem.potluckId} theEvent={eventItem} />
            ))}
        </div>
        </>
    );
}

function PotluckDetails({theEvent}) {
    const {locationName, role} = theEvent;
    let userStatus = '';

    if(role === 0) {
        userStatus = 'Host';
    } else {
        userStatus = 'Guest';
    }

    return (
        <Link to={`/searchform/${theEvent.potluckId}`}>
            <div className='eventTitleCard'>
                <h1>{locationName}</h1>
                <p>{userStatus}</p>
            </div>
        </Link>
    );
}

export default SearchEvents;