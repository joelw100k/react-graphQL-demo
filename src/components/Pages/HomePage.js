import React from 'react';

import PresentationsList from '../ListViews/PresentationsList';
import DecktopManagerDownload from '../Views/UtilityDownloadView';



export default function (props) {

    var presentedPresentations = props.userProfile === undefined ? undefined : props.userProfile.presentationsPresented.items;
    var watchedPresentations = props.userProfile === undefined ? undefined : props.userProfile.presentationsWatched.items;

    return (
        <div >
            <p> Welcomw to PrimaDeck Main Hom Page </p>

            <p>Presenting? Download the tool here:</p>
            <DecktopManagerDownload />

            <br></br>
            <PresentationsList title="Presented Presentations" presentations={presentedPresentations} />
            <PresentationsList title="Watched Presentations" presentations={watchedPresentations} />

            <h2>GraphQL APIs</h2>
            <p>list presentation history for a watcher</p>

            <p>get comments for a presentation, has a clipId</p>
            <p>get clips of a presentation</p>
            <p><del>get user profile for user</del></p>
            <p>get presentation Id by search code</p>
            <p>get presentation for watcher </p>
        </div>
    )
}