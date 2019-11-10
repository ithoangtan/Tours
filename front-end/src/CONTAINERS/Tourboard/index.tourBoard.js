import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

class TourBoard extends Component {
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
      return <div className="">ádas á da dá á đá ấ sdaas a sd</div>;
   }
}

TourBoard.propTypes = {
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
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TourBoard);
