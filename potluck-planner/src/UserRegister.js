import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

function UserRegister(props) {
    const {registerSubmit} = props;
    return (
        <div class='mainDiv'>
			<div class='pageTitle'>
				<h2>Register</h2>
			</div>
			<form onSubmit={registerSubmit}>
				<div class='inputField'>
					<label>Enter First Name:</label>
					<input type='text' name='userFName' maxLength='20' />
				</div>
				<div class='inputField'>
					<label>Enter Last Name:</label>
					<input type='text' name='userLName' maxLength='20' />
				</div>
				<div class='inputField'>
					<label>Enter Email:</label>
					<input type='email' name='userEmail' />
				</div>
				<div class='inputField'>
					<label>Enter Password:</label>
					<input type='password' name='userPassword' maxLength='30' />
				</div>
				<div class='buttonsGroup'>
					<div>
						<button type='submit'>Confirm</button>
						<button>Cancel</button>
					</div>
					<div class='buttonLink'>
                        <Link to='/'><button>Already have an account?</button></Link>
					</div>
				</div>
			</form>
		</div>
    );
}

export default UserRegister;