import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {deletePotluck} from '../actions/deletePotluck';
import styled from 'styled-components';
import {addGuest} from '../actions/addGuest';

const StyledCard = styled.div`
    width: 40%;
    margin: 1% 30%;
    border: 2px solid gainsboro;
    text-align: center;
    
    button{
       margin: 0 2% 5% 2%;
    }
`



function EventCard(){
    const {id} = useParams();
    const history = useHistory();
    const potlucks = useSelector((state)=>state.potlucks);
    const [potluck, setPotluck] = useState({})
    const dispatch = useDispatch();    

    const initialGuestVals = {
        potluckId: id,
        role: 1,
        email: ''
    };

    const [guestVals, setGuestVals] = useState(initialGuestVals);

    const onChange= event =>{
        const name = event.target.name;
        const value = event.target.value;

        setGuestVals({
            ...guestVals,
            [name]: value
        });
    };

    const submitGuest = event =>{
        event.preventDefault();
        dispatch(addGuest(guestVals));
        setGuestVals(initialGuestVals);
    };

    function deleteEvent(){
        dispatch(deletePotluck(potluck.locationName));
        history.push('/dashboard');

    }

    useEffect(()=>{
        potlucks.forEach(potluck=>{
            if (potluck.id === Number(id)){
            setPotluck(potluck)};
        });
    })

    return(
        <StyledCard>
            <h1>{potluck.locationName}</h1>
            <p>{potluck.locationAddress} {potluck.locationStreet}</p>
            <p>{potluck.locationCity}, {potluck.locationState}, {potluck.locationCountry} </p>
            <p>{potluck.role===0 ? 'Host': 'Guest'}</p>
            {potluck.role===0 && <>
            <Link to={`/editing/${id}`}>
                <button>Edit</button> 
            </Link>    
                <br/>
                <button onClick={deleteEvent}>Delete</button>
                <br/>
                <label>Add Guest:&nbsp;
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        value={guestVals.email}
                        onChange= {onChange}
                    />
                    <button onClick={submitGuest}>Submit</button>
                </label>

            </>}
            
        </StyledCard>
    )
}

export default EventCard;