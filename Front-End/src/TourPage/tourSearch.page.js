import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../_actions/tour.actions";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

import TourDetailContainer from "./tourDetail.container";

import { Typography, Rate, Checkbox, Spin, Radio } from "antd";

const { Title, Text } = Typography;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
   "Ưu đãi nhất",
   "Tiết kiệm nhất",
   "Cao cấp",
   "Event đặc biệt",
   "Mùa hè"
];
const defaultCheckedList = ["Ưu đãi nhất"];

class TourSearchContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         value: 1,
         value2: 1,
         checkedListFilter: defaultCheckedList,
         indeterminate: true,
         indeterminate2: true,
         checkAll: false,
         checkAll2: false,
         haveData: false,
         listTourSearch: [],
         loading: true
      };
   }
   handleChange = value => {
      this.setState({ value });
   };

   onChange = checkedListFilter => {
      this.setState({
         checkedListFilter,
         indeterminate:
            !!checkedListFilter.length &&
            checkedListFilter.length < plainOptions.length,
         checkAll: checkedListFilter.length === plainOptions.length
      });
   };

   onChange2 = e => {
      this.setState({
         value2: e.target.value
      });
   };

   onCheckAllChange = e => {
      this.setState({
         checkedListFilter: e.target.checked ? plainOptions : [],
         indeterminate: false,
         checkAll: e.target.checked
      });
   };

   fetch = async () => {
      const data = this.props.match.params;
      const { tourAllActions } = this.props;
      const {
         fetchListTourSearchRequest,
         fetchListTourImageRequest
      } = tourAllActions;
      await fetchListTourSearchRequest(data);
      await fetchListTourImageRequest();

      await funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   };

   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      });
      const { listTourSearch } = this.props;
      this.fetch();
      this.setState({ listTourSearch, haveData: true });
   }

   loaded = () => {
      this.setState(props => {
         return {
            loading: false
         };
      });
   };

   compareValues(key, order = "asc") {
      return function(a, b) {
         if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // không tồn tại tính chất trên cả hai object
            return 0;
         }

         const varA =
            typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
         const varB =
            typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

         let comparison = 0;
         if (varA > varB) {
            comparison = 1;
         } else if (varA < varB) {
            comparison = -1;
         }
         return order === "desc" ? comparison * -1 : comparison;
      };
   }

   renderTours = () => {
      let result = null;
      const { listTourSearch, listImageTour } = this.props;

      if (this.state.value2 === 1)
         listTourSearch.sort(this.compareValues("titleTour", "asc"));
      if (this.state.value2 === 2)
         listTourSearch.sort(this.compareValues("titleTour", "desc"));
      if (this.state.value2 === 3)
         listTourSearch.sort(this.compareValues("dateAdded", "asc"));
      if (this.state.value2 === 4)
         listTourSearch.sort(this.compareValues("price", "asc"));
      if (this.state.value2 === 5)
         listTourSearch.sort(this.compareValues("departureDay", "asc"));

      if (this.state.haveData && listTourSearch.length > 0) {
         result = listTourSearch.map((tour, index) => {
            return (
               <TourDetailContainer
                  {...this.props}
                  tour={tour}
                  key={index}
                  listImageTour={listImageTour.filter(
                     imageTour => imageTour.idTour === tour.idTour
                  )}
                  loaded={this.loaded}
               />
            );
         });
      } else {
         result = (
            <div className="ht-khong-tim-thay-du-lieu">
               <Title level={3}> Chưa có dữ liệu phù hợp</Title>
            </div>
         );
      }

      //Ở đây truyền fulloption dữ liệu vào
      //Gọi api, fetch,...... ở container này hết

      return result;
   };

   render() {
      const { value } = this.state;
      const radioStyle = {
         display: "block",
         height: "30px",
         lineHeight: "30px"
      };
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-md-12 heading-section text-center ftco-animate">
                     <h2 className="mb-4">Kết quả tìm kiếm:</h2>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 col-lg-3 ftco-animate left-tour-page">
                     <div className="ht-filter-tour">
                        <Title level={4}>Bộ Lọc</Title>
                        <div className="ht-filter-tour-2">
                           <div className="mb-3">
                              <Text
                                 style={{
                                    paddingBottom: "5px",
                                    borderBottom: "1px solid #E9E9E9"
                                 }}
                              >
                                 Sắp xếp theo thứ tự:
                              </Text>{" "}
                              <br></br>
                              <Radio.Group
                                 onChange={this.onChange2}
                                 value={this.state.value2}
                              >
                                 <Radio style={radioStyle} value={1}>
                                    Tên Tour
                                 </Radio>
                                 <Radio style={radioStyle} value={2}>
                                    Tên Tour (Z-A)
                                 </Radio>
                                 <Radio style={radioStyle} value={3}>
                                    Gần đây nhất
                                 </Radio>
                                 <Radio style={radioStyle} value={4}>
                                    Giá tăng dần
                                 </Radio>
                                 <Radio style={radioStyle} value={5}>
                                    Ngày khởi hành
                                 </Radio>
                              </Radio.Group>
                           </div>

                           <div className="mb-3">
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
                                    Lọc theo:
                                 </Checkbox>
                              </div>
                              <CheckboxGroup
                                 className="check-group-tour-left"
                                 options={plainOptions}
                                 value={this.state.checkedListFilter}
                                 onChange={this.onChange}
                              />
                           </div>
                        </div>
                        <div>
                           <Title level={4}>Mức độ đánh giá</Title>
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
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-9 ftco-animate right-tour-page">
                     {/* Rendder TOURS */}
                     <Spin tip="loading... data" spinning={this.state.loading}>
                        {this.renderTours()}
                     </Spin>
                     {/* end Render Tours */}
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
TourSearchContainer.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchListTourSearchRequest: PropTypes.func,
      fetchListTourImageRequest: PropTypes.func
   }),
   listTourSearch: PropTypes.array,
   listImageTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTourSearch: state.tour.listTourSearch,
      listImageTour: state.tour.listImageTour
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
)(TourSearchContainer);
