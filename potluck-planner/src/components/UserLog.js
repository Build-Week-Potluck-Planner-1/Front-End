import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {userLogin} from '../actions/login';
import axiosWithAuth from '../utils/axiosWithAuth'

const blankLog = {
	email: '',
	password: ''
  };

function UserLog(props) {
	const [logEntries, setLogEntries] = useState(blankLog);
	const {userLogin} = props;
	const history = useHistory();
	
	const changeHandler = event =>{
		const name=event.target.name;
		const value=event.target.value;

		setLogEntries({
			...logEntries,
			[name]: value
		});
	};

	const onSubmit = event => {
		event.preventDefault();
		axiosWithAuth()
        .post('/api/auth/login', logEntries)
        .then(res=>{
            window.localStorage.setItem('token', res.data.authToken)
        })
        .catch(err=>{
            console.error(err);
		})
		.finally(()=>
			history.push('/dashboard')
		);
		
	}

    return (
        <div className='mainDiv'>
			<div className='pageTitle'>
				<h2>Login</h2>
			</div>
			<form>
				<div className='inputField'>
					<label>Enter Email:</label>
					<input 
					type='email' 
					name='email' 
					value={logEntries.email}
					onChange={changeHandler}
					/>
				</div>
				<div className='inputField'>
					<label>Enter Password:</label>
					<input 
					type='password' 
					name='password' 
					maxLength='30' 
					value={logEntries.password}
					onChange={changeHandler}
					/>
				</div>
				<div className='buttonsGroup'>
					<div>
						<button type='submit' onSubmit={onSubmit}>Login</button>
						<button>Cancel</button>
					</div>
					<div className='buttonLink'>
                        <Link to='/register'>
							<button>Create New Account</button>
						</Link>
					</div>
				</div>
			</form>
			<Link to='/dashboard'>shouldn't work</Link>
		</div>
    );
}

export default UserLog;