import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {deletePotluck} from '../actions/deletePotluck';
import styled from 'styled-components';
import {addGuest} from '../actions/addGuest';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 1% 30%;
    text-align: center;
    align-content: center;
    color: #990000;
    border: 4px solid #FFD700;
    border-radius: 20px;
    background: linear-gradient(to top right, #FED23B, #FEE589, #FED23B);
    box-shadow: -10px 10px 10px #FEE589C0;
    height: 3%;
    font-size: 2rem;
    font-weight: bolder;

        p{
            font-size: 1.6rem;
        }
        a:hover{
            cursor: pointer;
        }
        button{
            width: 20%;
            margin: 0 40%;
            background: #990000;
            color: #FED23B;
            font-weight: bold;
            border: 2px solid #FEE589;
            border-radius: 5px;

            &:hover{
                cursor: pointer;
            }
        }

        label{
            margin-bottom: 4%;
            display: flex;
            align-items: center;
            justify-content: center;

            input{
                height: 1.8rem;
                font-size: 1.2rem;
                width: 40%;
            }
            button{
                margin: 0 1%;
                font-size: 1.8rem;
                border: 2px solid #FEE589;
                border-radius: 5px;
            }
        }

    .eventName {
        transform: skew(-20deg);
        padding: 5%;
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