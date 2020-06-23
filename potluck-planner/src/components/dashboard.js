import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import HostEvent from './HostEvent';

function Dashboard(props) {
    //const {id, firstName, lastName} = props;
    const {firstName, lastName} = {firstName: 'Joe', lastName: 'Somebody'};
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
            </Switch>
        </BrowserRouter>
    );
};

export default Dashboard;