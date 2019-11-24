import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

import IndexParentContainer from "./IndexParent/indexParent.container";

class IndexPage extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   componentDidMount() {
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
            <IndexParentContainer />
            {/* End of Page Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
               <i className="fas fa-angle-up" />
            </a>
            {/* Logout Modal*/}
            <div
               className="modal fade"
               id="logoutModal"
               tabIndex={-1}
               role="dialog"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                           Ready to Leave?
                        </h5>
                        <button
                           className="close"
                           type="button"
                           data-dismiss="modal"
                           aria-label="Close"
                        >
                           <span aria-hidden="true">×</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        Select "Logout" below if you are ready to end your
                        current session.
                     </div>
                     <div className="modal-footer">
                        <button
                           className="btn btn-secondary"
                           type="button"
                           data-dismiss="modal"
                        >
                           Cancel
                        </button>
                        <Link className="btn btn-primary" to="login">
                           Logout
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
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
