import React, { Component } from "react";
import AboutTravelandContainer from "../_components/AboutTraveland/aboutTraveland.container";
import HappyTravelerSayContainer from "../_components/HappyTravelerSays/happyTravelerSay.container";
import ThingsToKnowContainer from "../_components/ThingsToKnow/thingsToKnow.container";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

export default class AboutContainer extends Component {
   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      });
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
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
