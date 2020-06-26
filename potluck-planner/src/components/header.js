import React from 'react';
import {Link} from 'react-router-dom';



function Header(){
    function logout(){
        window.localStorage.removeItem('token')
    }
    return(
        <header>
            <h1><a href='https://jonivander.github.io/UI/' style={{color: 'white'}}>Potluck Planner</a></h1>
            <nav>
            <Link to='/dashboard'><button>Dashboard</button></Link>
            <Link to='/hostform'><button>Host an Event</button></Link>
            <Link to='/searchform'><button>Search for Events</button></Link>
            <Link to='/'><button onClick={logout}>Log Out</button></Link>
            </nav>
        </header>
    )
}

export default Header;