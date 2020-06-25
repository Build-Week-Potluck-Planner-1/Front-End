import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function SearchEvents(props) {
    const [searchEvents, getAllEvents] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/api/potlucks')
            .then(responseSearch => {
                console.log('Showing data from responseSearch:', responseSearch.data);
                getAllEvents(responseSearch.data);
                console.log('Display searchEvents:', searchEvents);
            })
            .catch(responseError => {
                console.log('Error in searching for potlucks');
            })
    }, []);

    return (
        <div className='eventContainer'>
            {searchEvents.map(eventItem => (
                <PotluckDetails key={eventItem.id} theEvent={eventItem} />
            ))}
        </div>
    );
}

function PotluckDetails({theEvent}) {
    const {locationName, role, locationAddress, locationStreet, locationCity, locationState, locationPostcode, locationCountry, userId} = theEvent;
    let userStatus = '';

    console.log('PotluckDetails tests below');
    console.log('locationName is:', locationName);
    console.log('role is:', role);

    if(role === 0) {
        userStatus = 'Host';
    } else {
        userStatus = 'Guest';
    }

    return (
        <Link to={`/searchform/${theEvent.id}`}>
            <div className='eventTitleCard'>
                <h1>{locationName}</h1>
                <p>{userStatus}</p>
            </div>
        </Link>
    );
}

export default SearchEvents;