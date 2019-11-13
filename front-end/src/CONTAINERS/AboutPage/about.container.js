import React, { Component } from "react";
import AboutTravelandContainer from "../AboutTraveland/aboutTraveland.container";
import HappyTravelerSayContainer from "../HappyTravelerSays/happyTravelerSay.container";
import ThingsToKnowContainer from "../ThingsToKnow/thingsToKnow.container";

export default class AboutContainer extends Component {
   render() {
      return (
         <div>
            <div>
               <br />
               <br />
               <br />
            </div>
            <AboutTravelandContainer />
            <HappyTravelerSayContainer />
            <ThingsToKnowContainer />
         </div>
      );
   }
}
