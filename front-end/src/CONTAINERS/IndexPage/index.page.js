import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

import HeaderContainer from "../Header/header.container";
import SearchEngineContainer from "../SearchEngine/searchEngine.container";
import BestTourContainer from "../Tour/bestTour.container";
import ServiceSection from "../ServiceSection/serviceSection.container";
import AboutTravelandContainer from "../AboutTraveland/aboutTraveland.container";
import ThingsToKnowContainer from "../ThingsToKnow/thingsToKnow.container";
import HappyTravelerSaysContainer from "../HappyTravelerSays/happyTravelerSay.container";
import RecentStoriesContainer from "../RecentStories/recentStories.container";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";
class IndexPage extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   componentDidMount() {
      // const { tourAllActions } = this.props;
      // const { fetchListTourRequest } = tourAllActions;
      // fetchListTourRequest();
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }

   renderBoard() {
      const { listTour } = this.props;
      let xhtml = null;
      return xhtml;
   }

   handleCloseForm = () => {
      this.setState({});
   };

   render() {
      return (
         <div>
            <HeaderContainer />
            <SearchEngineContainer />
            <BestTourContainer />
            <ServiceSection />
            <AboutTravelandContainer />
            <ThingsToKnowContainer />
            <HappyTravelerSaysContainer />
            <RecentStoriesContainer />
         </div>
      );
   }
}

IndexPage.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchListTourRequest: PropTypes.func
   }),
   listTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTour: state.tour.listTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
