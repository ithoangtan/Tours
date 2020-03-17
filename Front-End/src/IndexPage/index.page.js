import React, { Component } from "react";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

import HeaderContainer from "../_components/Header/header.container";
import BestTourContainer from "../_components/Tour/bestTour.container";
import ServiceSection from "../_components/ServiceSection/serviceSection.container";
import ThingsToKnowContainer from "../_components/ThingsToKnow/thingsToKnow.container";
import HappyTravelerSaysContainer from "../_components/HappyTravelerSays/happyTravelerSay.container";
import RecentStoriesContainer from "../_components/RecentStories/recentStories.container";

class IndexPage extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   fetch = async () => {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   };
   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0
      });
      this.fetch();
   }

   renderBoard() {
      let xhtml = null;
      return xhtml;
   }

   handleCloseForm = () => {
      this.setState({});
   };

   render() {
      return (
         <>
            <HeaderContainer />
            <BestTourContainer />
            <RecentStoriesContainer />
            <HappyTravelerSaysContainer />
            <ThingsToKnowContainer />
            <ServiceSection />
         </>
      );
   }
}

export default IndexPage;
