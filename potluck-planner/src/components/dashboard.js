import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {checkDelete} from '../actions/checkDelete';

/*
const StyledCards = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 1% 30%;
    text-align: center;
    align-content: center;

    a{
        text-decoration: none;
        color: black;
        border: 1px solid gainsboro;
        height: 3%;
        margin: 1% 0;
        font-size: 2rem;
        font-weight: bolder;

        &:hover{
            background: rgb(200, 200, 210);
        }
    }
`
*/

//Certain edits made by Peter. See above for original
const StyledCards = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 1% 30%;
    text-align: center;
    align-content: center;

    a{
        transform: skew(20deg);
        text-decoration: none;
        color: #990000;
        border: 4px solid #FFD700;
        background: linear-gradient(to top right, #FED23B, #FEE589, #FED23B);
        box-shadow: -10px 10px 10px #FEE589C0;
        height: 3%;
        margin: 2% 0;
        font-size: 2rem;
        font-weight: bolder;

        &:hover{
            background: rgb(200, 200, 210);
        }
    }

    .eventName {
        transform: skew(-20deg);
        padding: 5%;
    }
`

function Dashboard() {
    const dispatch = useDispatch()
    const potlucks = useSelector((state)=>state.potlucks)
    useEffect(()=>{
        dispatch(checkDelete())
    }, [])

    return(
        <>
        {potlucks.length === 0 ? 
            (<h1 style={{textAlign: 'center'}}>No Potlucks Yet</h1>)
            :
        (<StyledCards>
        {potlucks.map(potluck=>{
            return(
                <Link 
                to= {`/searchform/${potluck.id}`} 
                key={potluck.id}
                >
                    <div className='eventName'>{potluck.locationName}</div>
                </Link>
            )
        })}
        </StyledCards> )}
        </>
    );
};

export default Dashboard;