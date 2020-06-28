import React from 'react';
import { Redirect } from 'react-router'
import WatchersList from '../ListViews/WatchersList';

//@material-ui stuff
import Button from '@material-ui/core/Button';



function SinglePresentation(props) {

    console.log('WRITE IT ', props)

    return (
        
        <div>

            <Button variant="contained" color="primary" onClick={() => props.addWatcherFn(props.presentation.id)}>
                Create Watcher ForPresentation
            </Button>

            <div>
                <img src={props.presentation.frontClipURL} alt="Presentation Sample Slide" height="400" width="800" />
            </div>
            <div>
                <h2>{props.presentation === undefined ? 'hello' : props.presentation.title}</h2>
            </div>
            <div>
                THIS IS PRESENTATION PAGE {props.match.params.id}
            </div>
            <div>
                <WatchersList presentation={props.presentation} />
            </div>

        </div>
        
    )
}

export default function (props) {
    return(
        <div>
        {props.presentation===undefined?
        <Redirect to="/" exact/>
        : 
        <SinglePresentation {...props}/>        
        }    
        </div>        
    )
}