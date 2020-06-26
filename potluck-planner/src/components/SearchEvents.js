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

    const pageStyle = function() {
        return {
            searchTool: {
                width: '300px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'black',
                color: 'white'
            },

            normalSearch: {
                width: '300px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
            },

            searchLabel: {
                fontWeight: 'bold'
            },

            searchBox: {
                backgroundColor: 'black',
                color: 'red',
                border: '1px solid red',
                borderRadius: '5px'
            },

            thePage: {
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0',
                width: '500px'
            }
        };
    };

    return (
        <>
        <div style={pageStyle().normalSearch}>
            <label>Search Events:</label>
            <input type='text' value={searchVal} onChange={filterEvents} />
        </div>
        <div style={pageStyle().thePage}>
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

    const cardStyle = function() {
        return {
            eachCard: {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                marginBottom: '20px',
                backgroundColor: '#75DAFF',
                border: '2px solid #1338BE',
                borderRadius: '0 30px 30px 0',
                boxShadow: '10px 10px 10px #75DAFF80'
            },

            theParagraph: {
                fontSize: '1.2rem',
                color: 'red',
                fontWeight: 'bold'
            }
        };
    };

    return (
        <Link to={`/searchform/${theEvent.potluckId}`}>
            <div style={cardStyle().eachCard}>
                <h1>{locationName}</h1>
                <p style={cardStyle().theParagraph}>{userStatus}</p>
            </div>
        </Link>
    );
}

export default SearchEvents;