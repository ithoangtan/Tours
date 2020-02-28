import React, { Component } from "react";

// import PropTypes from "prop-types";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import * as tourActions from "../_actions/tour.actions";
import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

import HeaderContainer from "../_components/Header/header.container";
// import SearchEngineContainer from "../_components/SearchEngine/searchEngine.container";
import BestTourContainer from "../_components/Tour/bestTour.container";
import ServiceSection from "../_components/ServiceSection/serviceSection.container";
import AboutTravelandContainer from "../_components/AboutTraveland/aboutTraveland.container";
import ThingsToKnowContainer from "../_components/ThingsToKnow/thingsToKnow.container";
import HappyTravelerSaysContainer from "../_components/HappyTravelerSays/happyTravelerSay.container";
import RecentStoriesContainer from "../_components/RecentStories/recentStories.container";

class IndexPage extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   fetch = async () => {
      await funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   };
   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      });
      // const { tourAllActions } = this.props;
      // const { fetchListTourRequest } = tourAllActions;
      // fetchListTourRequest();
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
            {/* <SearchEngineContainer /> */}
            <BestTourContainer />
            <RecentStoriesContainer />
            <HappyTravelerSaysContainer />
            <ThingsToKnowContainer />
            <AboutTravelandContainer />
            <ServiceSection />
         </>
      );
   }
}

IndexPage.propTypes = {
   // classes: PropTypes.object,
   // tourAllActions: PropTypes.shape({
   // fetchListTourRequest: PropTypes.func
   // }),
   // listTour: PropTypes.array
};
export default IndexPage;
