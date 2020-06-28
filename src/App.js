import React, { Component } from 'react';
import './App.css';
import Amplify , { Storage } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

//@material-ui stuff
import Button from '@material-ui/core/Button';
//import Dashboard from './components/dashboard/Dashboard';

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ProfilePage from './components/Pages/ProfilePage';
import ErrorPage from './components/Pages/ErrorPage';
import Navigation from './components/Navigation';

import PresentationPage from './components/Pages/PresentationPage';

Amplify.configure(aws_exports);

Storage.configure({
  bucket: "rc01-s3-images-bucket",//"arn:aws:s3:::rc01-s3-images-bucket",
  region: "us-west-2",
  identityPoolId: "us-west-2:e4c29fee-09a3-42e1-b4cf-65abeeb66502"
});

//Create context for userProfile and all its details
const Mycontext = React.createContext();

class App extends Component {

  state = { userProfile: undefined }

  getImageURL = async (clipImageLocation)=>{

    console.log('getting what here',clipImageLocation);
 
    var ar = clipImageLocation.split("/");
    //we expect bucket name, identityId, presentation Id, clipdatetime
    var bucketname = ar[0];
    //var fileAccess = ar[1];
    var idenId = ar[2];
    var presId= ar[3];
    var clipDT = ar[4];
  
    console.log('getImageURL breakdown', bucketname, '~',idenId, '~',presId, '~',clipDT)
  
    try {
      var url = await Storage.get(presId + '/' + clipDT, { level: 'protected', identityId: idenId })
      console.log("getImageURL true url:", url);
      return url;
    }
    catch(err){
      console.log("getImageURL error", err)
    }  
  
  }  

  ensureProfileExists = async(props) => {
    const credentials = await Auth.currentCredentials();
    
    var IdentityId = credentials.data.IdentityId;
    
    console.log("user's idenity Id:", IdentityId);

    //assuming usernameis the unique identifier, check if we already have a profile for him
    const existingUserProfiles = await API.graphql(graphqlOperation(queries.listUserProfiles, 
                                      { filter: { id: { eq: IdentityId } } }));

    var profiles = existingUserProfiles.data.listUserProfiles.items;

    if (profiles.length > 0) {

      this.setState({ userProfile: profiles[0] })

      console.log("User has existing UserProfile", this.state.userProfile);
    }
    else {
      console.log("No existing UserProfile found, creating one")

      //If we don't have a profile yet, insert a profile for this user using their email address. 
      //We can copy any other attributes to populate profile
      const CreateUserProfileInput = { id: IdentityId, userName: this.props.authData.username }

      const CreateUserProfile = await API.graphql(graphqlOperation(mutations.createUserProfile, { input: CreateUserProfileInput }));

      this.setState({ userProfile: CreateUserProfile.data.createUserProfile })

      console.log("Created user profile succesfully ", this.state.userProfile);
    }    

  }

  CreateWatcherForPresentation = async (presentation) => {

      var watchPres = presentation;
      //console.log("creatign watcher for",watchPres);
      //alert("creating watcher for own presentation, not actual use case but temp, remove")
      //this.props.presentationId
      var dateObj = new Date();

      //If we don't have a profile yet, insert a profile for this user using their email address
      const CreateWatcherInput = {
        id: uuidv4(),
        joinedAT: dateObj.toISOString(),
        watcherUserId: this.state.userProfile.id,
        watcherPresentationWatchedId: watchPres.id,
        title: watchPres.title,
        frontClipURL: watchPres.frontClipURL,
        presentationId : watchPres.id
      }

      console.log("will create watcher with input: ", CreateWatcherInput);

      const CreateWatcher = await API.graphql(graphqlOperation(mutations.createWatcher, { input: CreateWatcherInput }));

      this.setState({ watcherInfo: CreateWatcher.data.createWatcher })

      console.log("Created watcher succesfully ");
  }

  CreatePresentedPresentation = async () => {

    const PresentationDetails = {
      description: 'some new description',
      startDateTime: Date.now().toISOString,
      title: 'some new title',
      presentationPresenterId: this.state.userProfile.id
    };

    const newPresentation = await API.graphql(graphqlOperation(mutations.createPresentation, { input: PresentationDetails }))
      .catch((err) => console.log("error creating presentation", err));

    this.setState({ presentingPresentation: newPresentation.data.createPresentation })

    console.log("Presented Presentation created..", this.state.presentingPresentation);
  }

  async componentDidMount() {
    await this.ensureProfileExists(this.props);

    //translate all images to URLs here we khalass
    //get prestation items and map them throu
    console.log("exploreing: ",this.state.userProfile.presentationsPresented.items);

    var xy = this.state.userProfile.presentationsPresented.items[0].frontClipURL;

    xy = await this.getImageURL(xy);

    console.log("exploring ",xy);

    var presItems = this.state.userProfile.presentationsPresented.items;

    var i;
    for (i = 0; i < presItems.length; i++) { 
      console.log("frontClip ",i, presItems[i].frontClipURL);
      presItems[i].frontClipURL = await this.getImageURL( presItems[i].frontClipURL );
      console.log("frontClip ",i, presItems[i].frontClipURL);
    }

    //Important to force refresh/re-render
    this.setState({something:'ay haga'})  

  }

  render() {
    return (
      <Mycontext.Provider context={
        {state: this.state, 
        CreateWatcherForPresentation: this.CreateWatcherForPresentation,
        CreatePresentedPresentation: this.CreatePresentedPresentation,
        getImageURL : this.getImageURL
        }}>
      <BrowserRouter>
        <div>
          <Navigation />

          <p>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

            <Button variant="contained" color="primary" onClick={this.CreatePresentedPresentation.bind(this)}>
              Create Presented Presentation
            </Button>   
          </p>


          <Switch>
            <Route path="/" exact render={(props) => <HomePage userProfile={this.state.userProfile} {...props} />} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile" render={(props)=> <ProfilePage authData={this.props.authData} />}/>
            
            <Route path="/presentation/:id" render={(props) => <PresentationPage
                userProfile={this.state.userProfile} 
                presentation={this.state.userProfile===undefined?
                              undefined
                              :
                              this.state.userProfile.presentationsPresented.items.find((p)=>p.id===props.match.params.id)}
                addWatcherFn={this.CreateWatcherForPresentation}
                {...props}            
            /> }/>
            <Route component={ErrorPage} />
          </Switch>

        </div>
      </BrowserRouter>
      </Mycontext.Provider>
    );
  }
}

export default withAuthenticator(App, true);
