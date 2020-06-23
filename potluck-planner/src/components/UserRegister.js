import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {userReg} from '../actions/register'
import {connect} from 'react-redux'

const blankReg = {
	firstName: '',
	lastName: '',
	email: '',
	password: ''
  };

function UserRegister(props) {
	const {userReg} = props;
	const [regEntries, setRegEntries] = useState(blankReg);
	const history = useHistory();

	const changeHandler = event=>{
		const name = event.target.name;
		const value = event.target.value;

		setRegEntries({
			...regEntries,
			[name]: value
		});
	}
	
	const onSubmit = event => {
		event.preventDefault();
		regEntries.firstName.trim()
		regEntries.lastName.trim()
		regEntries.email.trim()
		regEntries.password.trim()
		userReg(regEntries);
		history.push('/')

	}
    return (
        <div class='mainDiv'>
			<div class='pageTitle'>
				<h2>Register</h2>
			</div>
			<form onSubmit={onSubmit}>
				<div class='inputField'>
					<label>Enter First Name:</label>
					<input 
					type='text' 
					name='firstName' 
					maxLength='50' 
					onChange={changeHandler}
					value={regEntries.firstName}
					/>
				</div>
				<div class='inputField'>
					<label>Enter Last Name:</label>
					<input 
					type='text' 
					name='lastName' 
					maxLength='50' 
					onChange={changeHandler}
					value={regEntries.lastName}
					/>
				</div>
				<div class='inputField'>
					<label>Enter Email:</label>
					<input 
					type='email' 
					name='email' 
					onChange={changeHandler}
					value={regEntries.email}
					/>
				</div>
				<div class='inputField'>
					<label>Enter Password:</label>
					<input 
					type='password' 
					name='password' 
					maxLength='30' 
					onChange={changeHandler}
					value={regEntries.password}
					/>
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
};


export default connect(null, {userReg})(UserRegister);