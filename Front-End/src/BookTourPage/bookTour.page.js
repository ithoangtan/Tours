import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../_actions/tour.actions";
import * as imageActions from "../_actions/image.actions";

import BookTourContainer from "./bookTour.container";

class BookTourPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tourById: {},
         listImageByIdTour: [],
         haveData: false
      };
   }

   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      });
      // funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
      const { idTour } = this.props.match.match.params;

      const { tourAllActions, imageAllActions } = this.props;

      //load Tour byId
      const { fetchTourByIdRequest } = tourAllActions;
      fetchTourByIdRequest(idTour);

      //Load images with idTour
      const { fetchListImageByIdTourRequest } = imageAllActions;
      fetchListImageByIdTourRequest(idTour);

      const { tourById, listImageByIdTour, scheduleByIdTour } = this.props;
      this.setState({
         tourById,
         listImageByIdTour,
         scheduleByIdTour,
         haveData: true
      });
   }

   render() {
      const { tourById, listImageByIdTour } = this.props;
      return (
         <BookTourContainer
            {...this.props}
            tourById={tourById}
            listImageByIdTour={listImageByIdTour}
         />
      );
   }
}
BookTourPage.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchTourByIdRequest: PropTypes.func
   }),
   imageAllActions: PropTypes.shape({
      fetchListImageByIdTourRequest: PropTypes.func
   }),
   tourById: PropTypes.object,
   listImageByIdTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      tourById: state.tour.tourById,
      listImageByIdTour: state.image.listImageByIdTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch),
      imageAllActions: bindActionCreators(imageActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTourPage);
