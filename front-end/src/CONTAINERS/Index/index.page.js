import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

//import components
import BannerContainer from "../Banner/banner.container";
import BookingPartContainer from "../BookingPart/bookingPart.container";
import TopPlace1Container from "../TopPlace/topPlace1.container";
import TopPlace2Container from "../TopPlace/topPlace2.container";
import IndestriesContainer from "../Industries/industries2.container";
import TopPlace3Container from "../TopPlace/topPlace3.container";
import Indestries2Container from "../Industries/Industries.container";

class IndexPage extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   componentDidMount() {
      const { tourAllActions } = this.props;
      const { fetchListTourRequest } = tourAllActions;
      fetchListTourRequest();
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
            <BannerContainer />
            <BookingPartContainer />
            <TopPlace1Container />
            <TopPlace2Container />
            <IndestriesContainer />
            <TopPlace3Container />
            <Indestries2Container />
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
