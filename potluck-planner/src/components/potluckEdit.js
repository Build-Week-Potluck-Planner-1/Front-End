import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {editPotluck} from '../actions/editPotluck'
import {useDispatch, useSelector} from 'react-redux'

const EditForm = styled.form`
    width: 80%;
    margin: 1% 10%;
    display: flex;
    flex-direction: column;
    align-content: center;

    input{
        margin: 1% 0;
    }
`

function PotluckEdit (){
    const {id} = useParams();
    const potlucks = useSelector((state)=>state.potlucks);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(potlucks)
    const [potluckVals, setPotluckVals] = useState({});

    const onChange = event =>{
        const name = event.target.name;
        const value = event.target.value;

        setPotluckVals({
            ...potluckVals,
            [name]: value
        })
    }

    console.log(potluckVals.id)
    const handleSubmit = event =>{
        event.preventDefault();
        const newPotluck ={
            id: potluckVals.id,
            locationAddress: potluckVals.locationAddress,
            locationCity: potluckVals.locationCity,
            locationCountry: potluckVals.locationCountry,
            locationName: potluckVals.locationName,
            locationPostcode: potluckVals.locationPostcode,
            locationState: potluckVals.locationState,
            locationStreet: potluckVals.locationStreet
        }
        dispatch(editPotluck(newPotluck));
        history.push(`/dashboard`);
    }

    useEffect(()=>{
        potlucks.forEach(potluck=>{
            if (potluck.id === Number(id)){
            setPotluckVals(potluck)
        };
    })}, []);
    return(
        <EditForm onSubmit={handleSubmit}>
            <h2>Edit Potluck</h2>    
            <label>
                Event Name
                <input
                type='text'
                name='locationName'
                placeholder='Event Name'
                value= {potluckVals.locationName}
                onChange={onChange}
            />
            </label>
            <label>
                Address
                <input
                type='text'
                name='locationAddress'
                placeholder='address'
                value= {potluckVals.locationAddress}
                onChange={onChange}
            />
            </label>            
            <label>
                City
                <input
                type='text'
                name='locationCity'
                placeholder='city'
                value= {potluckVals.locationCity}
                onChange={onChange}
            />
            </label>            
            <label>
                Country
                <input
                type='text'
                name='locationCountry'
                placeholder='country'
                value= {potluckVals.locationCountry}
                onChange={onChange}
            />
            </label>            
            <label>
                Zip Code
                <input
                type='text'
                name='locationPostcode'
                placeholder='Postal code'
                value= {potluckVals.locationPostcode}
                onChange={onChange}
            />
            </label>            
            <label>
                State
                <input
                type='text'
                name='locationState'
                placeholder= 'state'
                value= {potluckVals.locationState}
                onChange={onChange}
            />
            </label>            
            <label>
                Street
                <input
                type='text'
                name='locationStreet'
                placeholder = 'street'
                value= {potluckVals.locationStreet}
                onChange={onChange}
            />
            </label>
            <button>Submit</button>
            
        </EditForm>
    )
}

export default PotluckEdit;