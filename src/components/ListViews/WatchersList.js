import React from 'react';

export default function(props){
    console.log("here at watchers list",props)
    return( 
   
        <div>
            Those are the watchers for this presentation {props.presentation===undefined?'No Presentation Selected':props.presentation.title}  
            {props.presentation===undefined||props.presentation.watchers===undefined?
            '<<no watchers to display>>'
            :
            props.presentation.watchers.items.map((watcher)=><li key={watcher.id}>{watcher.userPrfile.userName}</li>)
            
            }
        </div>
    )    
}