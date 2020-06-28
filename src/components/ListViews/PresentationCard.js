import React from 'react';
import { NavLink } from 'react-router-dom'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

import cardImagesStyles from "../../assets/jss/material-dashboard-pro-react/cardImagesStyles.jsx";

class PresentationCard extends React.Component {
  render() {
    const { classes } = this.props;
    console.log("the url:", this.props.presentation.frontClipURL);
    return (
      <NavLink to={`/presentation/${this.props.presentation.id}`}>
        <Card style={{ width: "20rem" }}>
          <img
            className={classes.cardImgTop}
            data-src="holder.js/100px180/"
            alt={this.props.presentation.frontClipURL}
            style={{ height: "180px", width: "100%", display: "block" }}
            src={this.props.presentation.frontClipURL}
            data-holder-rendered="true"
          />
          <CardBody>
            <h4>{this.props.presentation.title}</h4>
            <p>
              some text 
            </p>
          </CardBody>
        </Card>
      </NavLink>
    );
  }
}


export default withStyles(cardImagesStyles)(PresentationCard);