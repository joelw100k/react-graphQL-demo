import React from 'react';
import CognitoInfoView from '../Views/CognitoInfoView';

export default function(props){

    console.log("all props logging in profile page",props)    

    return(
        <div>
            THIS IS Profile PAGE
            <CognitoInfoView username={props.authData.username} {...props.authData.attributes}/>
        </div>
    )    
}