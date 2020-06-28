import React from 'react';
import PresentationCard from './PresentationCard'
import { PropTypes } from 'prop-types';

export default function PresentationList(props) {

    return (
        <div >
            <h2>{props.title} </h2>
            <div >

                {props.presentations === undefined ? `There are no ${props.title}`
                    :
                    props.presentations.map((presentation) =>
                        <PresentationCard key={presentation.id} presentation={presentation} />
                    )
                }
            </div>
        </div>
    )
}


PresentationList.propTypes = {
    presentations: PropTypes.array,
}