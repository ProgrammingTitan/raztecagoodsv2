import React, { useState, useContext, Component } from 'react'
import {useHistory} from 'react-router-dom';
import './Contact.css';
// import UserContext from '../../context/UserContext';
// import ErrorNotice from '../../misc/ErrorNotice';


export default function Contact(props) {
    

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [description,setDescription] = useState();
    const [error, setError] = useState();

    // const {setUserData} = useContext(UserContext);
    const history = useHistory();


    const submit = async (e) => {
        
        e.preventDefault();
        try{

    
        // setError("Thank you for your submission! We will contact you soon for further details!");
        // window.location.reload(false);
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        sendFeedback(serviceID, templateId, { from_name: name, message: description , reply_to: email, phone_number: phoneNumber })
        
       
        // window.location.reload(false);
        alert("Message Sent! Thank you for the feedback");
        window.location.reload(false);
    }catch (err) {
        console.log(err);
        // err.response.data.msg && setError(err.response.data.msg);
    }

    };

    
    const sendFeedback = (serviceID, templateId, variables) => {
        
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    return (
        <div>
            <div className="crop">
            <img className='header-pic' src='https://cache.marriott.com/marriottassets/destinations/hero/palm-springs-destination.jpg?interpolation=progressive-bilinear' />
            </div>
        <div className="page">
            <alert>help</alert>
            <h1 className="control-panel-heading">Contact Us:</h1>
            {/* {error && <ErrorNotice message={error} clearError={ () => setError(undefined)} /> } */}
            <form className="form" onSubmit={submit}  enctype="multipart/form-data">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange = {e => setName(e.target.value)}/>

                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="text"onChange = {e => setPhoneNumber(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange = {e => setEmail(e.target.value)}/>
                
                <label htmlFor="description">Feedback</label>
                <input id="description" type="text"  value={props.description} onChange = {e => setDescription(e.target.value)}/>

                <input type = "submit" className="order-submit" value="Contact Us" />
            </form>

            </div>
        </div>
    );
}