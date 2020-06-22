import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

function UserLog(props) {
    const {loginSubmit} = props;
    return (
        <div className='mainDiv'>
			<div className='pageTitle'>
				<h2>Login</h2>
			</div>
			<form onSubmit={loginSubmit}>
				<div className='inputField'>
					<label>Enter Email:</label>
					<input type='email' name='logEmail' />
				</div>
				<div className='inputField'>
					<label>Enter Password:</label>
					<input type='password' name='logPassword' maxLength='30' />
				</div>
				<div class='buttonsGroup'>
					<div>
						<button type='submit'>Login</button>
						<button>Cancel</button>
					</div>
					<div class='buttonLink'>
                        <Link to='/register'><button>Create New Account</button></Link>
					</div>
				</div>
			</form>
		</div>
    );
}

export default UserLog;