import React, { Component } from "react";
import AboutTravelandContainer from "../AboutTraveland/aboutTraveland.container";
import HappyTravelerSayContainer from "../HappyTravelerSays/happyTravelerSay.container";
import ThingsToKnowContainer from "../ThingsToKnow/thingsToKnow.container";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

export default class AboutContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }
   render() {
      return (
         <div>
            <div className="mb-5"></div>
            <AboutTravelandContainer />
            <HappyTravelerSayContainer />
            <ThingsToKnowContainer />
         </div>
      );
   }
}
