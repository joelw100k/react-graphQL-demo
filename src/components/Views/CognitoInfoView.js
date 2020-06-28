import React from 'react';

export default function(props){

    console.log("all props",props)
    return(
     <div>
       Hello Sire! {props.username} 

        <p>sub {props.sub}</p>
        <p>{props.email_verified? 'email verified' : 'email NOT verified'}</p>
        <p>{props.phone_number_verified? 'phone number verified' : 'phone number NOT verified'}</p>
        <p>phone_number {props.phone_number}</p>
        <p>email {props.email}</p>                                

     </div>)
  }