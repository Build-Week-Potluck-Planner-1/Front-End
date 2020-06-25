import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import HostEvent from './HostEvent';
import SearchEvents from './SearchEvents'

function Dashboard(props) {
    //const {id, firstName, lastName} = props;
    const {firstName, lastName} = {firstName: 'Joe', lastName: 'Somebody'};
    useEffect(()=>{
		axiosWithAuth()
			.get('/api/potlucks')
			.then(res=>{
				console.log('response from /potlucks', res)
			})
			.catch(err=>{console.error(err)})
			
	})
    return(
        <BrowserRouter>
            <header>
                <h1>Welcome, {firstName} {lastName}</h1>
                <nav>
                    <Link to='/events'><button>Upcoming</button></Link>
                    <Link to='/hostform'><button>Host an Event</button></Link>
                    <Link to='/searchform'><button>Search for Events</button></Link>
                    <Link to='/editprofile'><button>Edit Profile</button></Link>
                    <Link to='/'><button>Log Out</button></Link>
                </nav>
            </header>
            <Switch>
                {/* <Route exact path='/' component={App} /> */}
                {/* <Route path='/events'>
                    <Events userID={id} eventsData={eventsList} usersData={usersList} />
                </Route> */}
                <Route path='/hostform'>
                    <HostEvent />
                </Route>
                <Route path='/searchform'>
                    <SearchEvents />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Dashboard;