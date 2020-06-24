import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {userReg} from '../actions/register'
import {connect} from 'react-redux'

import * as yup from 'yup';

const blankReg = {
	firstName: '',
	lastName: '',
	email: '',
	password: ''
  };

  const registerSchema = yup.object().shape({
	  firstName: yup
		  .string()
		  .min(2, 'First name must be at least 2 characters long'),
	  lastName: yup
		  .string()
		  .min(2, 'Last name must be at least 2 characters long'),
	  email: yup
		  .string()
		  .required('Please enter a valid email address. This will be used as your login.'),
	  password: yup
		  .string()
		  .min(6, 'Passwords must be at least 6 characters long')
		  .required('Please enter a password to use with your email login')

  });

  const clearErrors = {
	  firstName: '',
	  lastName: '',
	  email: '',
	  password: ''
  };

function UserRegister(props) {
	const {userReg} = props;
	const [regEntries, setRegEntries] = useState(blankReg);
	const history = useHistory();

	const [registerError, setErrors] = useState(clearErrors);

	const changeHandler = event=>{
		const name = event.target.name;
		const value = event.target.value;

		yup
			.reach(registerSchema, name)
			.validate(value)
			.then(() => {
				setErrors({...registerError, [name]: ''});
			})
			.catch(changeErr => {
				setErrors({...registerError, [name]: changeErr.errors[0]});
			})

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
		//Peter's Test
		console.log('Current regEntries is:', regEntries);
		//End of Peter's Test
		history.push('/')

	}
    return (
        <div className='mainDiv'>
			<div className='pageTitle'>
				<h2>Register</h2>
			</div>
			<form onSubmit={onSubmit}>
				<div className='inputField'>
					<label>Enter First Name:</label>
					<input 
					type='text' 
					name='firstName' 
					maxLength='50' 
					onChange={changeHandler}
					value={regEntries.firstName}
					/>
				</div>
				<div className='inputField'>
					<label>Enter Last Name:</label>
					<input 
					type='text' 
					name='lastName' 
					maxLength='50' 
					onChange={changeHandler}
					value={regEntries.lastName}
					/>
				</div>
				<div className='inputField'>
					<label>Enter Email:</label>
					<input 
					type='email' 
					name='email' 
					onChange={changeHandler}
					value={regEntries.email}
					/>
				</div>
				<div className='inputField'>
					<label>Enter Password:</label>
					<input 
					type='password' 
					name='password' 
					maxLength='30' 
					onChange={changeHandler}
					value={regEntries.password}
					/>
				</div>
				<div className='buttonsGroup'>
					<div>
						<button type='submit'>Confirm</button>
						<button>Cancel</button>
					</div>
					<div className='buttonLink'>
                        <Link to='/'><button>Already have an account?</button></Link>
					</div>
				</div>
				<div className='regErrorsDiv'>
					<div>{registerError.firstName}</div>
					<div>{registerError.lastName}</div>
					<div>{registerError.email}</div>
					<div>{registerError.password}</div>
				</div>
			</form>
		</div>
    );
};


export default connect(null, {userReg})(UserRegister);