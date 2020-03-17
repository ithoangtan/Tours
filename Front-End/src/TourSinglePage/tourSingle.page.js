import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../_actions/tour.actions";
import * as imageActions from "../_actions/image.actions";
import * as scheduleActions from "../_actions/schedule.actions";

import TourSingleContainer from "./tourSingle.container";

class TourSinglePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tourById: {},
         listImageByIdTour: [],
         scheduleByIdTour: {},
         haveData: false
      };
   }

   fetch = async () => {
      const { idTour } = this.props.match.params;

      const {
         tourAllActions,
         imageAllActions,
         scheduleAllActions
      } = this.props;

      //load Tour byId
      const { fetchTourByIdRequest } = tourAllActions;
      await fetchTourByIdRequest(idTour);

      //Load images with idTour
      const { fetchListImageByIdTourRequest } = imageAllActions;
      await fetchListImageByIdTourRequest(idTour);

      //Load schedule with idTour
      const { fetchScheduleByIdTourRequest } = scheduleAllActions;
      await fetchScheduleByIdTourRequest(idTour);
   };
   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      });
      this.fetch();

      const { tourById, listImageByIdTour, scheduleByIdTour } = this.props;
      this.setState({
         tourById,
         listImageByIdTour,
         scheduleByIdTour,
         haveData: true
      });
   }

   render() {
      const { tourById, listImageByIdTour, scheduleByIdTour } = this.props;
      return (
         <TourSingleContainer
            tourById={tourById}
            scheduleByIdTour={scheduleByIdTour}
            listImageByIdTour={listImageByIdTour}
            {...this.props}
         />
      );
   }
}
TourSinglePage.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchTourByIdRequest: PropTypes.func
   }),
   scheduleAllActions: PropTypes.shape({
      fetchScheduleByIdTourRequest: PropTypes.func
   }),
   imageAllActions: PropTypes.shape({
      fetchListImageByIdTourRequest: PropTypes.func
   }),
   tourById: PropTypes.object,
   listImageByIdTour: PropTypes.array,
   scheduleByIdTour: PropTypes.object
};

const mapStateToProps = state => {
   return {
      tourById: state.tour.tourById,
      listImageByIdTour: state.image.listImageByIdTour,
      scheduleByIdTour: state.schedule.scheduleByIdTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch),
      imageAllActions: bindActionCreators(imageActions, dispatch),
      scheduleAllActions: bindActionCreators(scheduleActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TourSinglePage);
