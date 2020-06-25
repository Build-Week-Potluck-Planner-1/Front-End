import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {checkDelete} from '../actions/checkDelete';

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

function Dashboard() {
    const dispatch = useDispatch()
    const potlucks = useSelector((state)=>state.potlucks)
    useEffect(()=>{
        console.log('getting potlucks')
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
                    {potluck.locationName}
                </Link>
            )
        })}
        </StyledCards> )}
        </>
    );
};

export default Dashboard;