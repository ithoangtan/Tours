import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

//import components
import BannerApp from "../Banner/banner.app";
import BookingPartApp from "../BookingPart/bookingPart.app";
import TopPlace1App from "../TopPlace/topPlace1.app";
import TopPlace2App from "../TopPlace/topPlace2.app";
import IndestriesApp from "../Industries/industries2.app";
import TopPlace3App from "../TopPlace/topPlace3.app";
import IndestriesApp2 from "../Industries/Industries.app";

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
            <BannerApp />
            <BookingPartApp />
            <TopPlace1App />
            <TopPlace2App />
            <IndestriesApp />
            <TopPlace3App />
            <IndestriesApp2 />
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
