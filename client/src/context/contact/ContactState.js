import React, { useReducer }from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer'; 
import {

ADD_CONTACT,
DELETE_CONTACT,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_CONTACT,
FILTER_CONTACTS,
CLEAR_FILTER

} from '../types';
//import contactContext from './contactContext';

const  ContactState = props => {
 
const initilSatate = {
    contacts:
     [
        {
            id: 1,
            name: 'Arif Ali',
            email: 'arifalidanish15@gmail.com',
            phone: '03405057916',
            type: 'personel'

        },
        {
            id: 2,
            name: 'Adeeb Raja',
            email: 'raja@gmail.com',
            phone: '444-444-55',
            type: 'personel'

        },
        {
            id: 3,
            name: 'Mati Khan',
            email: 'mati@gmail.com',
            phone: '03352521021',
            type: 'professional'
        },

    ]
};

const  [ state, dispatch] = useReducer(contactReducer, initilSatate);


//Add Contact
 
//Delete Contact

//Set Current Contact

// Clear Current Contact

//Update Contact

// Filter Contacts

//Clear Filter

return  (
<ContactContext.Provider
    value ={
        {
            contacts : state.contacts
        }}>
        
        {props.children}
</ContactContext.Provider>

); 

};

export default  ContactState;
