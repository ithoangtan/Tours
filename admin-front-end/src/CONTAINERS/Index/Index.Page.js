import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/func.contants";

import SideBarContainer from "../ParentContainer/sideBar.container";
import IndexWrapperContainer from "./IndexContent/indexWrapper.container";
class IndexPage extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
      // const { tourAllActions } = this.props;
      // const { fetchListTourRequest } = tourAllActions;
      // fetchListTourRequest();
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
         <div id="page-top">
            {/* Page Wrapper */}
            <div id="wrapper">
               {/* Sidebar */}
               <SideBarContainer />
               {/* End of Sidebar */}
               {/* Content Wrapper */}
               <IndexWrapperContainer />
               {/* End of Content Wrapper */}
            </div>
            {/* End of Page Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
               <i className="fas fa-angle-up" />
            </a>
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
