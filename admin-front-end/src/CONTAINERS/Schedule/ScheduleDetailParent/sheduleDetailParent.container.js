import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "../../../actions/tour.actions";
import * as scheduleActions from "../../../actions/schedule.actions";

import SideBarContainer from "../../ParentContainer/sideBar.container";
import ScheduleDetailWrapperContainer from "./ScheduleDetailContentWrapper/scheduleDetailWrapper.container";

class WrapperTableParentContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         scheduleByIdTour: {},
         tour: {}
      };
   }

   componentDidMount() {
      // const { record } = this.props.location.state;
      if (this.props.match !== null) {
         const { idTour } = this.props.match.params;

         //Load data tour by Id tour
         const { tourAllActions } = this.props;
         const { fetchTourByIdRequest } = tourAllActions;
         fetchTourByIdRequest(idTour);

         //Load data schedule by id tour
         const { scheduleAllActions } = this.props;
         const { fetchScheduleByIdTourRequest } = scheduleAllActions;
         fetchScheduleByIdTourRequest(idTour);

         //Save on state
         const { scheduleByIdTour, tour } = this.props;
         this.setState({
            scheduleByIdTour,
            tour
         });
      } //end if
   }

   render() {
      const { tour, scheduleByIdTour } = this.props;
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer {...this.props} />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <ScheduleDetailWrapperContainer
               {...this.props}
               tour={tour}
               scheduleByIdTour={scheduleByIdTour}
            />
            {/* End of Content Wrapper */}
         </div>
      );
   }
}

WrapperTableParentContainer.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchTourByIdRequest: PropTypes.func,
      fetchScheduleByIdTourRequest: PropTypes.func
   }),
   scheduleByIdTour: PropTypes.object,
   tour: PropTypes.object
};

const mapStateToProps = state => {
   return {
      tour: state.tour.tourById,
      scheduleByIdTour: state.schedule.scheduleByIdTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch),
      scheduleAllActions: bindActionCreators(scheduleActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(WrapperTableParentContainer);
