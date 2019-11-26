import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

import TourDetailContainer from "./tourDetail.container";

import { Typography, Rate, Checkbox } from "antd";

const { Title } = Typography;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
   "Apple",
   "Pear",
   "Orange",
   "something1",
   "something2",
   "something3"
];
const defaultCheckedList = ["Apple"];

class TourContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         value: 1,
         checkedList: defaultCheckedList,
         indeterminate: true,
         checkAll: false,
         haveData: false,
         listTour: {}
      };
   }

   handleChange = value => {
      this.setState({ value });
   };

   onChange = checkedList => {
      this.setState({
         checkedList,
         indeterminate:
            !!checkedList.length && checkedList.length < plainOptions.length,
         checkAll: checkedList.length === plainOptions.length
      });
   };

   onCheckAllChange = e => {
      this.setState({
         checkedList: e.target.checked ? plainOptions : [],
         indeterminate: false,
         checkAll: e.target.checked
      });
   };

   componentDidMount() {
      const { tourAllActions } = this.props;
      const {
         fetchListTourRequest,
         fetchListTourImageRequest
      } = tourAllActions;

      fetchListTourRequest();
      fetchListTourImageRequest();

      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);

      const { listTour } = this.props;
      this.setState({ listTour, haveData: true });
   }

   renderTours() {
      let result = null;
      const { listTour, listImageTour } = this.props;

      if (this.state.haveData === true) {
         result = listTour.map((tour, index) => {
            return (
               <TourDetailContainer
                  {...this.props}
                  tour={tour}
                  key={index}
                  listImageTour={listImageTour.filter(
                     imageTour => imageTour.idTour === tour.idTour
                  )}
               />
            );
         });
      } else {
         result = <div>Không có dữ liệu</div>;
      }

      //Ở đây truyền fulloption dữ liệu vào
      //Gọi api, fetch,...... ở container này hết
      return result;
   }

   render() {
      const { value } = this.state;
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center pb-1">
                  <div className="col-md-12 heading-section text-center ftco-animate">
                     <h2 className="mb-4">All tours</h2>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 col-lg-3 ftco-animate left-tour-page">
                     <div className="">
                        <Title level={4}>Tour Class</Title>
                        <span>
                           <Rate
                              tooltips={desc}
                              onChange={this.handleChange}
                              value={value}
                           />
                           {value ? (
                              <span className="ant-rate-text">
                                 {desc[value - 1]}
                              </span>
                           ) : (
                              ""
                           )}
                        </span>
                     </div>
                     <div className="ht-filter-tour">
                        <Title level={4}>Price per day</Title>
                        <div>
                           <div
                              style={{
                                 borderBottom: "1px solid #E9E9E9"
                              }}
                              className="mb-1 pb-1"
                           >
                              <Checkbox
                                 indeterminate={this.state.indeterminate}
                                 onChange={this.onCheckAllChange}
                                 checked={this.state.checkAll}
                              >
                                 Check all
                              </Checkbox>
                           </div>
                           <CheckboxGroup
                              className="check-group-tour-left"
                              options={plainOptions}
                              value={this.state.checkedList}
                              onChange={this.onChange}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-9 ftco-animate right-tour-page">
                     {/* Rendder TOURS */}
                     {this.renderTours()}
                     {/* end Render Tours */}
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
TourContainer.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchListTourRequest: PropTypes.func,
      fetchPostTourRequest: PropTypes.func,
      fetchDeleteTourRequest: PropTypes.func,
      fetchPatchTourRequest: PropTypes.func,
      fetchListTourImageRequest: PropTypes.func
   }),
   listTour: PropTypes.array,
   listImageTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTour: state.tour.listTour,
      listImageTour: state.tour.listImageTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TourContainer);
