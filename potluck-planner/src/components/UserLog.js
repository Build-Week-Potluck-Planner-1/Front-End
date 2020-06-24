import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
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
			//Peter's Test
			console.log('Current logEntries is:', logEntries);
			console.log('Current res.data is:', res.data);
			//End of Peter's Test
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
			<form onSubmit={onSubmit}>
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
						<button type='submit'>Login</button>
						<button>Cancel</button>
					</div>
					<div className='buttonLink'>
                        <Link to='/register'>
							<button>Create New Account</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
    );
}

export default UserLog;