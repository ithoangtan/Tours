import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "../_actions/tour.actions";

import TourDetailContainer from "./tourDetail.container";
import SearchEngineTourPage from "../_components/SearchEngine/searchEngineTourPage.container";

import { Typography, Rate, Checkbox, Spin, Radio } from "antd";
import { Icon } from "@ant-design/compatible";

const { Title, Text, Paragraph } = Typography;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const CheckboxGroup = Checkbox.Group;

// const plainOptions = [
//    "Ưu đãi nhất",
//    "Tiết kiệm nhất",
//    "Cao cấp",
//    "Event đặc biệt",
//    "Mùa hè"
// ];
const costOption = [
   //Mức giá
   "< 1.000.000",
   "1 - 2.000.000",
   "2 - 4.000.000",
   "> 4.000.000"
];

const tourTypeOption = [
   //Loại tour
   "Còn chỗ",
   "Trọn gói",
   "Không vé máy bay",
   "Khởi hành mỗi ngày",
   "Cho đoàn doanh nghiệp"
];
const serviceMore = [
   //Dịch vụ đi kèm
   "Hướng dẫn viên",
   "Vé tham quan",
   "Xe đưa đón",
   "Hỗ trợ người  khuyết tật "
];
const tourTheme = [
   //Tour theo chủ đề
   "Khám phá Biển đảo",
   "Mua sắm, lễ hội",
   "Tuần trăng mật",
   "Giađình Nghĩ dưỡng",
   "Người cao tuổi",
   "Liên tuyến, Xuyên Việt"
];

const defaultCheckedListCostOption = [];
const defaultCheckedListTourTypeOption = [];
const defaultCheckedListServiceMore = [];
const defaultCheckedListTourTheme = [];

class TourContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         valueStar: 0,
         value2: 1,
         checkedListFilterCostOption: defaultCheckedListCostOption,
         checkedListFilterTourTypeOption: defaultCheckedListTourTypeOption,
         checkedListFilterServiceMore: defaultCheckedListServiceMore,
         checkedListFilterTourTheme: defaultCheckedListTourTheme,
         indeterminateCostOption: true,
         indeterminateTourTypeOption: true,
         indeterminateServiceMore: true,
         indeterminateTourTheme: true,
         checkAllCostOption: false,
         checkAllTourTypeOption: false,
         checkAllServiceMore: false,
         checkAllTourTheme: false,
         haveData: false,
         listTour: [],
         loading: true,
         rows: 1,
         size: "large"
      };
   }

   handleChange = value => {
      this.setState({ valueStar: value });
   };

   onChangeCostOption = checkedListFilterCostOption => {
      this.setState({
         checkedListFilterCostOption,
         indeterminate:
            !!checkedListFilterCostOption.length &&
            checkedListFilterCostOption.length < costOption.length,
         checkAll: checkedListFilterCostOption.length === costOption.length
      });
   };

   onChangeTourTypeOption = checkedListFilterTourTypeOption => {
      this.setState({
         checkedListFilterTourTypeOption,
         indeterminate:
            !!checkedListFilterTourTypeOption.length &&
            checkedListFilterTourTypeOption.length < tourTypeOption.length,
         checkAll:
            checkedListFilterTourTypeOption.length === tourTypeOption.length
      });
   };
   onChangeServiceMore = checkedListFilterServiceMore => {
      this.setState({
         checkedListFilterServiceMore,
         indeterminate:
            !!checkedListFilterServiceMore.length &&
            checkedListFilterServiceMore.length < serviceMore.length,
         checkAll: checkedListFilterServiceMore.length === serviceMore.length
      });
   };
   onChangeTourTheme = checkedListFilterTourTheme => {
      this.setState({
         checkedListFilterTourTheme,
         indeterminate:
            !!checkedListFilterTourTheme.length &&
            checkedListFilterTourTheme.length < tourTheme.length,
         checkAll: checkedListFilterTourTheme.length === tourTheme.length
      });
   };

   onChange2 = e => {
      this.setState({
         value2: e.target.value
      });
   };

   onChangeExpand = rows => {
      this.setState({ rows });
   };

   onCheckAllChangeCostOption = e => {
      this.setState({
         checkedListFilterCostOption: e.target.checked ? costOption : [],
         indeterminateCostOption: false,
         checkAllCostOption: e.target.checked
      });
   };

   onCheckAllChangeTourTypeOption = e => {
      this.setState({
         checkedListFilterTourTypeOption: e.target.checked
            ? tourTypeOption
            : [],
         indeterminateTourTypeOption: false,
         checkAllTourTypeOption: e.target.checked
      });
   };

   onCheckAllChangeServiceMore = e => {
      this.setState({
         checkedListFilterServiceMore: e.target.checked ? serviceMore : [],
         indeterminateServiceMore: false,
         checkAllServiceMore: e.target.checked
      });
   };
   onCheckAllChangeTourTheme = e => {
      this.setState({
         checkedListFilterTourTheme: e.target.checked ? tourTheme : [],
         indeterminateTourTheme: false,
         checkAllTourTheme: e.target.checked
      });
   };

   fetch = async () => {
      const data = this.props.match.params;
      const { tourAllActions } = this.props;
      const {
         fetchListTourRequest,
         fetchListTourSearchRequest,
         fetchListTourImageRequest
      } = tourAllActions;
      if (data.keySearch !== null && data.keySearch !== undefined) {
         await fetchListTourSearchRequest(data);
      } else {
         await fetchListTourRequest();
      }
      await fetchListTourImageRequest();
   };

   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth"
      });
      const { listTour } = this.props;
      this.fetch();
      this.setState({ listTour, haveData: true });
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
      const data = this.props.match.params;
      const { listTourSearch, listImageTour } = this.props;
      const { listTour } = this.props;
      let listTours = [];
      if (data.keySearch !== null && data.keySearch !== undefined) {
         listTours = [...listTourSearch];
      } else {
         listTours = [...listTour];
      }

      if (this.state.value2 === 1)
         listTours.sort(this.compareValues("titleTour", "asc"));
      if (this.state.value2 === 2)
         listTours.sort(this.compareValues("titleTour", "desc"));
      if (this.state.value2 === 3)
         listTours.sort(this.compareValues("dateAdded", "asc"));
      if (this.state.value2 === 4)
         listTours.sort(this.compareValues("price", "asc"));
      if (this.state.value2 === 5)
         listTours.sort(this.compareValues("departureDay", "asc"));

      if (this.state.haveData && listTours.length > 0) {
         result = listTours.map((tour, index) => {
            return (
               <TourDetailContainer
                  {...this.props}
                  tour={tour}
                  key={index}
                  bookTour={false}
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

   numberStarCal(numberStar) {
      let numStar = Math.floor(numberStar);
      return (Math.round(numberStar * 10) / 10).toFixed(1) >= numStar + 0.5
         ? numStar + 0.5
         : numStar;
   }

   componentWillMount() {
      this.setState({ size: window.innerWidth > 757.98 ? "default" : "small" });
   }

   render() {
      const { valueStar, rows } = this.state;
      const radioStyle = {
         display: "block",
         height: "30px",
         lineHeight: "30px"
      };

      //Tổng số sao đánh giá của tất cả các tour tìm kiếm được
      const totalNumberStar = 4.48555555555555555555555555555555555555555555;
      const article =
         "Du lịch trong nước luôn là lựa chọn tuyệt vời. Đường bờ biển dài hơn 3260km, những khu bảo tồn thiên nhiên tuyệt vời, những thành phố nhộn nhịp, những di tích lịch sử hào hùng, nền văn hóa độc đáo và hấp dẫn, cùng một danh sách dài những món ăn ngon nhất thế giới, Việt Nam có tất cả những điều đó. Với lịch trình dày, khởi hành đúng thời gian cam kết, Vietravel là công ty lữ hành uy tín nhất hiện nay tại Việt Nam, luôn sẵn sàng phục vụ du khách mọi lúc, mọi nơi, đảm bảo tính chuyên nghiệp và chất lượng dịch vụ tốt nhất thị trường";
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row ftco-animate">
                  <div className="col-md-12 col-lg-3 left-tour-page">
                     {/* Search component */}
                     <SearchEngineTourPage />
                     {/* end Search */}

                     <div className="ht-filter-tour">
                        <div className="ht-filter-tour-page pr-4 mr-1">
                           <div className="ht-d-flex-center-center ht-search-tour-page p-2">
                              <h6 className="ht-no-p-m">Bộ Lọc</h6>
                           </div>
                           <button className="ht-accordion">Mức Giá</button>
                           <div className="ht-panel">
                              <div className="mb-3">
                                 <CheckboxGroup
                                    className="check-group-tour-left"
                                    options={costOption}
                                    value={
                                       this.state.checkedListFilterCostOption
                                    }
                                    onChange={this.onChangeCostOption}
                                 />
                                 <div
                                    style={{
                                       borderTop: "1px solid #E9E9E9"
                                    }}
                                    className="mb-1 pb-1 mt-2"
                                 >
                                    <Checkbox
                                       indeterminate={
                                          this.state.indeterminateCostOption
                                       }
                                       onChange={
                                          this.onCheckAllChangeCostOption
                                       }
                                       checked={this.state.checkAllCostOption}
                                    >
                                       Chọn lọc tất cả
                                    </Checkbox>
                                 </div>
                              </div>
                           </div>
                           <button className="ht-accordion">Loại tour</button>
                           <div className="ht-panel">
                              <div className="mb-3">
                                 <CheckboxGroup
                                    className="check-group-tour-left"
                                    options={tourTypeOption}
                                    value={
                                       this.state
                                          .checkedListFilterTourTypeOption
                                    }
                                    onChange={this.onChangeTourTypeOption}
                                 />
                                 <div
                                    style={{
                                       borderTop: "1px solid #E9E9E9"
                                    }}
                                    className="mb-1 pb-1 mt-2"
                                 >
                                    <Checkbox
                                       indeterminate={
                                          this.state.indeterminateTourTypeOption
                                       }
                                       onChange={
                                          this.onCheckAllChangeTourTypeOption
                                       }
                                       checked={
                                          this.state.checkAllTourTypeOption
                                       }
                                    >
                                       Chọn lọc tất cả
                                    </Checkbox>
                                 </div>
                              </div>
                           </div>
                           <button className="ht-accordion">
                              Dịch vụ đi kèm
                           </button>
                           <div className="ht-panel">
                              <div className="mb-3">
                                 <CheckboxGroup
                                    className="check-group-tour-left"
                                    options={serviceMore}
                                    value={
                                       this.state.checkedListFilterServiceMore
                                    }
                                    onChange={this.onChangeServiceMore}
                                 />
                                 <div
                                    style={{
                                       borderTop: "1px solid #E9E9E9"
                                    }}
                                    className="mb-1 pb-1 mt-2"
                                 >
                                    <Checkbox
                                       indeterminate={
                                          this.state.indeterminateServiceMore
                                       }
                                       onChange={
                                          this.onCheckAllChangeServiceMore
                                       }
                                       checked={this.state.checkAllServiceMore}
                                    >
                                       Chọn lọc tất cả
                                    </Checkbox>
                                 </div>
                              </div>
                           </div>
                           <button className="ht-accordion">
                              Tour theo chủ đề
                           </button>
                           <div className="ht-panel">
                              <div className="mb-3">
                                 <CheckboxGroup
                                    className="check-group-tour-left"
                                    options={tourTheme}
                                    value={
                                       this.state.checkedListFilterTourTheme
                                    }
                                    onChange={this.onChangeTourTheme}
                                 />
                                 <div
                                    style={{
                                       borderTop: "1px solid #E9E9E9"
                                    }}
                                    className="mb-1 pb-1 mt-2"
                                 >
                                    <Checkbox
                                       indeterminate={
                                          this.state.indeterminateTourTheme
                                       }
                                       onChange={this.onCheckAllChangeTourTheme}
                                       checked={this.state.checkAllTourTheme}
                                    >
                                       Chọn lọc tất cả
                                    </Checkbox>
                                 </div>
                              </div>
                           </div>
                           <div>
                              <Title level={4}></Title>
                              <span>
                                 <Rate
                                    tooltips={desc}
                                    onChange={this.handleChange}
                                    value={valueStar}
                                    character={<Icon type="star" />}
                                 />
                                 {valueStar ? (
                                    <span className="ant-rate-text">
                                       {desc[valueStar - 1]}
                                    </span>
                                 ) : (
                                    ""
                                 )}
                              </span>
                           </div>
                        </div>

                        <Title level={4} className="pt-3">
                           Bộ Lọc
                        </Title>
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
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-9 ftco-animate right-tour-page">
                     {/* Rendder TOURS */}
                     <div className="row justify-content-center pb-1">
                        <div className="col-md-12 ftco-animate d-flex ht-info-container-tour-page">
                           <h4 className="mb-2 mt-2 ml-1">
                              Tour {`khuyến mãi`}
                              {/* khuyễn mãi có thể thay thế bằng 2 hoặc 3 từ: Nha Trang || Đà Lạt || ,.... */}
                           </h4>
                           <div className="ht-d-flex-start-center">
                              <p className="ht-info-title-tour-page">
                                 Có <strong>{`xx00`}</strong> tour khởi hành
                                 theo ngày đã chọn
                              </p>
                           </div>
                           <div className="ht-info-rate-tour-page ht-d-flex-start-center">
                              <Rate
                                 allowHalf
                                 tooltips={desc}
                                 disabled
                                 defaultValue={this.numberStarCal(
                                    totalNumberStar
                                 )}
                                 character={<Icon type="star"></Icon>}
                                 //Phải làm tròn số với đơn vị 0.5
                                 size="small"
                                 className="mr-1 height-40"
                              ></Rate>{" "}
                              <p className="ht-no-p-m">
                                 {`  `}
                                 <strong>
                                    {" "}
                                    {Math.round(totalNumberStar * 100) /
                                       100}{" "}
                                 </strong>
                                 với <strong>{`xx00`} </strong>đánh giá
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="row justify-content-center pb-1 ml-2 mr-2">
                        <Paragraph
                           ellipsis={{
                              rows,
                              expandable: true,
                              suffix: "--ithoangtan"
                           }}
                           title={`${article}--ithoangtan`}
                           className="ht-describe-info-tour-page"
                        >
                           {article}
                        </Paragraph>
                     </div>
                     <div className="row justify-start-end pb-1 mb-4 ml-1 ht-tool-tour-page">
                        <button
                           className="btn btn-sm ht-tool-tour-page-item ht-tool-tour-page-item-focused"
                           type="button"
                        >
                           Phổ biến nhất
                        </button>
                        <div className="dropdown">
                           <button
                              className="btn btn-sm dropdown-toggle ht-tool-tour-page-item"
                              type="button"
                              id="dropdownMenu1"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              Giá
                           </button>
                           <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenu1"
                           >
                              <button
                                 className="dropdown-item btn-sm ht-tool-tour-page-item"
                                 type="button"
                              >
                                 Tăng dần
                              </button>
                              <button
                                 className="dropdown-item btn-sm ht-tool-tour-page-item"
                                 type="button"
                              >
                                 Giảm dần
                              </button>
                           </div>
                        </div>
                        <div className="dropdown">
                           <button
                              className="btn btn-sm dropdown-toggle ht-tool-tour-page-item"
                              type="button"
                              id="dropdownMenu3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              Số ngày đi
                           </button>
                           <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenu3"
                           >
                              <button
                                 className="dropdown-item btn-sm ht-tool-tour-page-item"
                                 type="button"
                              >
                                 Tăng dần
                              </button>
                              <button
                                 className="dropdown-item btn-sm ht-tool-tour-page-item"
                                 type="button"
                              >
                                 Giảm dần
                              </button>
                           </div>
                        </div>
                        <button
                           className="btn btn-sm ht-tool-tour-page-item"
                           type="button"
                        >
                           Sắp khởi hành
                        </button>
                        <button
                           className="btn btn-sm ht-tool-tour-page-item"
                           type="button"
                        >
                           Đánh giá cao
                        </button>
                        <button
                           className="btn btn-sm ht-tool-tour-page-item"
                           type="button"
                        >
                           Khuyến mãi
                        </button>
                     </div>
                     <div className="ht-list-tour-container">
                        <Spin
                           tip="loading... data"
                           spinning={this.state.loading}
                        >
                           {this.renderTours()}
                        </Spin>
                     </div>
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
      fetchListTourSearchRequest: PropTypes.func,
      fetchPostTourRequest: PropTypes.func,
      fetchDeleteTourRequest: PropTypes.func,
      fetchPatchTourRequest: PropTypes.func,
      fetchListTourImageRequest: PropTypes.func
   }),
   listTour: PropTypes.array,
   listTourSearch: PropTypes.array,
   listImageTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTour: state.tour.listTour,
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
export default connect(mapStateToProps, mapDispatchToProps)(TourContainer);
