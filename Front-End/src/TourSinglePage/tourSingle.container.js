import React, { Component } from "react";

import { Link } from "react-router-dom";

import parseHtml from "html-react-parser";

import {
   Carousel,
   Rate,
   Tag,
   Button,
   Tooltip,
   Timeline,
   Typography,
   Tabs,
   DatePicker,
   Radio,
   Avatar,
   List,
   Modal,
   Input,
   Select,
   Slider
} from "antd";
import { Icon } from "@ant-design/compatible";
import Cookies from "js-cookie";
// import MoreTourSingle from "./moreTourSingle.container";
import TourDetailImg from "../TourPage/tourDetailImages";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";
import moment from "moment";
import NumberFormat from "react-number-format";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const { Paragraph } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

const priceSaleMomo = 1000000;
const marksEvaluate = {
   1: {
      style: {
         color: "#bfbfbf"
      },
      label: (
         <strong style={{ width: "70px", position: "absolute", left: "-25px" }}>
            "Rất tệ"
         </strong>
      )
   },
   2: {
      style: {
         color: "#fa8c16"
      },
      label: "Tạm ổn"
   },
   3: {
      style: {
         color: "#52c41a"
      },
      label: <strong>"Bình thường"</strong>
   },
   4: {
      style: {
         color: "#eb2f96"
      },
      label: "Rất tổt"
   },
   5: {
      style: {
         color: "#f5222d"
      },
      label: (
         <strong
            style={{ width: "80px", position: "absolute", right: "-25px" }}
         >
            "Tuyệt vời"{" "}
         </strong>
      )
   }
};

export default class TourSingleContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }

   componentWillMount() {
      this.setState({
         size: window.innerWidth > 757.98 ? "large" : "default"
      });
   }

   onChange(e) {
      // console.log(`checked = ${e.target.checked}`);
   }

   checkLogin = () => {
      const token = Cookies.get("token");
      const name = sessionStorage.getItem("name");
      const avatar = sessionStorage.getItem("avatar");

      return token && name && avatar;
   };

   state = {
      value: 3,
      size: "small",
      rows: 2,
      valueRatingSort: 1,
      visible: false,
      isLogin: this.checkLogin(),
      numberStarHotel: 5,
      numberStarFood: 5,
      numberStarVehicle: 5,
      numberStarTourGuide: 5,
      numberStarSchedule: 5,
      nameEvaluate: "",
      titleEveluate: "",
      contentEvaluate: "",
      typeTourEvaluate: ""
   };

   showModal = () => {
      this.setState({
         visible: true
      });
   };

   // Select
   onChangeTypeTour = value => {
      console.log(`selected ${value}`);
      this.setState({ typeTourEvaluate: value });
   };

   onBlurTypeTour() {
      console.log("blur");
   }

   onFocusTypeTour() {
      console.log("focus");
   }

   onSearchTypeTour(val) {
      console.log("search:", val);
   }

   onChangeInputEvaluate = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   handleOk = e => {
      const {
         numberStarHotel,
         numberStarFood,
         numberStarVehicle,
         numberStarTourGuide,
         numberStarSchedule,
         titleEveluate,
         contentEvaluate,
         typeTourEvaluate
      } = this.state;
      this.props.handleSubmitEvaluate({
         numberStarHotel,
         numberStarFood,
         numberStarVehicle,
         numberStarTourGuide,
         numberStarSchedule,
         type: typeTourEvaluate,
         title: titleEveluate,
         contentEvaluate: contentEvaluate,
         idTour: this.props.tourById.idTour
      });
      this.setState({
         visible: false,
         numberStarHotel: 5,
         numberStarFood: 5,
         numberStarVehicle: 5,
         numberStarTourGuide: 5,
         numberStarSchedule: 5,
         nameEvaluate: "",
         titleEveluate: "",
         contentEvaluate: "",
         typeTourEvaluate: ""
      });
   };

   handleCancel = e => {
      console.log(e);
      this.setState({
         visible: false
      });
   };

   onChangeRatingSortRadio = e => {
      console.log("radio checked", e.target.value);
      this.setState({
         valueRatingSort: e.target.value
      });
   };

   handleChange = value => {
      this.setState({ value });
   };

   renderImage() {
      const { listImageByIdTour } = this.props;
      let result = null;
      if (listImageByIdTour !== null && listImageByIdTour !== undefined)
         result = listImageByIdTour.map((imageTour, index) => {
            return <TourDetailImg srcImage={imageTour.url} key={index} />;
         });
      return result;
   }

   parseHTMLSchedule() {
      const { scheduleByIdTour } = this.props;
      let result = null;
      if (scheduleByIdTour !== null && scheduleByIdTour !== undefined) {
         result = parseHtml(`${scheduleByIdTour.data}`);
      }
      return result;
   }
   numberStarCal(numberStar) {
      let numStar = Math.floor(numberStar);
      return (Math.round(numberStar * 5) / 5).toFixed(1) >= numStar + 0.5
         ? numStar + 0.5
         : numStar;
   }

   onChangeRows = rows => {
      this.setState({ rows });
   };

   onPanelChange(value, mode) {
      console.log(value, mode);
   }

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

   renderEvaluates = () => {
      const { valueRatingSort } = this.state;
      let evaluates = [...this.props.listEvaluateByIdTour];
      switch (valueRatingSort) {
         case 1:
            evaluates.sort(this.compareValues("dateAdded", "desc"));
            break;
         case 2:
            evaluates.sort(this.compareValues("dateAdded", "asc"));
            break;
         case 3:
            evaluates.sort(this.compareValues("rateAverage", "asc"));
            break;
         case 4:
            evaluates.sort(this.compareValues("rateAverage", "desc"));
            break;
         default:
            break;
      }
      const evaluatePersonal = evaluates.filter(
         e => e.typeEvaluate === "personal"
      );
      const evaluateHeart = evaluates.filter(e => e.typeEvaluate === "heart");
      const evaluateFamily = evaluates.filter(e => e.typeEvaluate === "family");
      const evaluateFriend = evaluates.filter(e => e.typeEvaluate === "friend");
      const evaluateBusiness = evaluates.filter(
         e => e.typeEvaluate === "business"
      );
      evaluates = [
         evaluates,
         evaluatePersonal,
         evaluateHeart,
         evaluateFamily,
         evaluateFriend,
         evaluateBusiness
      ];
      return evaluates;
   };
   render() {
      const {
         size,
         rows,
         isLogin,
         numberStarHotel,
         numberStarFood,
         numberStarVehicle,
         numberStarTourGuide,
         numberStarSchedule,
         nameEvaluate,
         titleEveluate,
         contentEvaluate
      } = this.state;
      const { tourById, scheduleByIdTour, listTimelineByIdTour } = this.props;
      const listEvaluateByIdTour = this.renderEvaluates();
      const tourPriceSale =
         tourById.price - (tourById.price * tourById.sale * 0.01).toFixed(1);
      const totalNumberStar = tourById.votes;
      const departureDay = moment(tourById.departureDay).format(
         INDEX_CONSTANTS.DATE_TIME_FORMAT.DATE
      );
      const timeDeparture = moment(tourById.departureDay).format("LT");
      const listTags = tourById.tags ? tourById.tags.split(",") : [];
      const listServices = tourById.services
         ? tourById.services.split(",")
         : [];
      return (
         <section className="ftco-section">
            <div className="container">
               {/* Tour infomation detail container */}
               <div className="row">
                  {/* Title main */}
                  <div className="col-md-12 ht-detail-tour-title-container ftco-animate">
                     <div className="ht-title ftco-animate">
                        {tourById.titleTour}
                     </div>
                     {/* <div className="ht-code ftco-animate">
                        Mã TOUR: {tourById.idTour}
                     </div> */}
                     <div className="ht-social-container ftco-animate">
                        {size === "default" ? (
                           <p className="pr-2 mb-0">
                              <i className="fas fa-share"></i>
                           </p>
                        ) : (
                           <p className="pr-2 mb-0">
                              <i className="fas fa-share"></i> Chia sẻ ngay:
                           </p>
                        )}

                        <p className="pr-2 mb-0 share">
                           <i className="fab fa-facebook-square"></i> Facebook
                        </p>
                        <p className="mb-0 twitter">
                           <i className="fab fa-twitter-square"></i> Twitter
                        </p>
                        <p className="mb-0 zalo">Zalo</p>
                        <p className="mb-0 pinterest">
                           <i className="fab fa-pinterest-square"></i> Pinterest
                        </p>
                     </div>
                  </div>
                  {/* Images - LEFT */}
                  <div className="col-sm-12 col-md-6 col-lg-8 ht-detail-tour-img-container ftco-animate">
                     <div className="ht-tag-over"></div>
                     <div className="ht-qr-info">
                        Giá tốt
                        {/* Hình QR sinh ra bằng thư viện
                        https://www.npmjs.com/package/qrcode.react  */}
                     </div>
                     <div className="ht-sale-info">
                        Giảm ngay{" "}
                        <strong>
                           <NumberFormat
                              value={priceSaleMomo}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" VNĐ"}
                           />{" "}
                           / khách{" "}
                        </strong>{" "}
                        khi thanh toán bằng ví Momo
                     </div>
                     <div className="ht-qr-img-over">
                        <img
                           src={`${INDEX_CONSTANTS.API_ENDPOINT}/img/bg-qr.png`}
                           alt="nothing else"
                        />
                     </div>
                     <div className="ht-tag">
                        {listTags &&
                           listTags.map((tag, index) => (
                              <Tag key={index} color="#1da57a">
                                 # {tag}
                              </Tag>
                           ))}
                     </div>
                     <Carousel autoplay dotPosition="bottom">
                        {this.renderImage()}
                     </Carousel>
                     {/* https://ant.design/components/carousel/#header */}
                  </div>
                  {/* info - RIGHT */}
                  <div className="col-sm-12 col-md-6 col-lg-4 ht-detail-tour-info-container ftco-animate">
                     <div className="ht-info-container-1 ftco-animate">
                        <div className="ht-rates">
                           <Rate
                              tooltips={desc}
                              disabled
                              value={totalNumberStar}
                              character={<Icon type="star" />}
                              //Phải làm tròn số với đơn vị 0.5
                              size="small"
                              className="mr-1 height-40"
                           ></Rate>{" "}
                           <p className="ht-no-p-m">
                              {`  `}
                              <strong> {totalNumberStar} </strong>
                              với{" "}
                              <strong>{listEvaluateByIdTour[0].length} </strong>
                              đánh giá
                           </p>
                        </div>
                        <div className="ht-views">
                           <p>
                              <Tooltip title={`${tourById.views} luợt xem`}>
                                 <i
                                    className="fas fa-eye"
                                    style={{ color: "#595959" }}
                                 ></i>{" "}
                                 {tourById.views}
                              </Tooltip>
                           </p>
                           <p>
                              <Tooltip
                                 title={`${listEvaluateByIdTour[0].length} bình luận`}
                              >
                                 <i
                                    className="fas fa-comment"
                                    style={{ color: "#419ed0" }}
                                 ></i>{" "}
                                 {listEvaluateByIdTour[0].length}
                              </Tooltip>
                           </p>
                           <p>
                              <Tooltip title={`${123} đã đặt - developing`}>
                                 <i
                                    className="fas fa-cart-arrow-down"
                                    style={{ color: "#ffd591" }}
                                 ></i>{" "}
                                 {123}
                              </Tooltip>
                           </p>
                        </div>
                     </div>
                     <div className="ht-info-container-2 ftco-animate">
                        <div className="ht-departure-day">
                           <p>
                              <i className="far fa-calendar"></i> Khởi hành:{" "}
                           </p>
                           <p>
                              <strong>{departureDay}</strong>
                           </p>
                           <DatePicker
                              size={"small"}
                              placeholder={"Chọn ngày khác"}
                              dateRender={current => {
                                 const style = {};
                                 if (current.date() === 1) {
                                    style.border = "1px solid #1890ff";
                                    style.borderRadius = "50%";
                                 }
                                 return (
                                    <div
                                       className="ant-picker-cell-inner"
                                       style={style}
                                    >
                                       {current.date()}
                                    </div>
                                 );
                              }}
                           />
                        </div>
                        <div className="ht-time-location">
                           <p>
                              <i className="far fa-clock"></i> Thời gian:{" "}
                           </p>
                           <p>
                              <strong>{timeDeparture}</strong>
                           </p>
                        </div>
                        <div className="ht-departure-address">
                           <p>
                              <i className="fas fa-map-marked-alt"></i> Nơi khởi
                              hành:{" "}
                           </p>
                           <p>
                              <strong>{tourById.departureAddress}</strong>
                           </p>
                        </div>
                     </div>
                     <div className="ht-service-container ftco-animate">
                        <div className="m-1">
                           <i className="fab fa-buromobelexperte"></i> Dịch vụ:{" "}
                           {` `}
                           {listServices &&
                              listServices.map((service, index) => (
                                 <Tooltip title={service}>
                                    <i
                                       className={
                                          INDEX_CONSTANTS.SERVICE_TOUR_ICON[
                                             service
                                          ]
                                       }
                                    ></i>{" "}
                                 </Tooltip>
                              ))}
                        </div>
                     </div>
                     <div className="ht-divide"> {` `}</div>
                     <div className="ht-info-container-3-buy-1 ftco-animate">
                        <div className="ht-price-and-seat">
                           <div className="ht-text-price-tour-detail">
                              <Tooltip
                                 title={
                                    <NumberFormat
                                       value={tourById.price - tourPriceSale}
                                       displayType={"text"}
                                       thousandSeparator={true}
                                       prefix={"Tiết kiệm "}
                                       suffix={" VNĐ"}
                                    />
                                 }
                                 placement="left"
                              >
                                 <i className="fas fa-donate"></i> {` `}
                                 <NumberFormat
                                    value={tourPriceSale}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                 />
                              </Tooltip>
                           </div>
                           <div className="ht-seat">
                              {` `} <i className="fas fa-couch"></i> Số chỗ còn
                              nhận: {5}
                           </div>
                        </div>
                        <div className="ht-btn-buy">
                           <Link
                              to={{
                                 pathname: `/book-tour/${tourById.idTour}`,
                                 state: {
                                    tour: tourById
                                 }
                              }}
                           >
                              <Tooltip
                                 title={
                                    <p className="ht-no-p-m">
                                       <i className="fas fa-couch"></i>
                                       {` Còn ${5} chỗ `}
                                    </p>
                                 }
                                 placement="right"
                              >
                                 {size === "small" ? (
                                    <Button type="primary">
                                       <i className="fas fa-shopping-cart"></i>
                                    </Button>
                                 ) : (
                                    <Button type="primary">
                                       <i className="fas fa-cart-plus"></i>
                                       {` `} ĐẶT NGAY
                                    </Button>
                                 )}
                              </Tooltip>
                           </Link>
                        </div>
                     </div>

                     <div className="ht-info-container-3-buy-2 ftco-animate">
                        <div className="ht-price-and-seat">
                           <div className="ht-text-price-tour-detail-2">
                              <Tooltip
                                 title={
                                    <NumberFormat
                                       value={
                                          tourPriceSale > priceSaleMomo
                                             ? priceSaleMomo
                                             : tourPriceSale
                                       }
                                       displayType={"text"}
                                       thousandSeparator={true}
                                       prefix={"Tiết kiệm "}
                                       suffix={" VNĐ"}
                                    />
                                 }
                                 placement="left"
                              >
                                 <i className="fas fa-donate"></i> {` `}
                                 <NumberFormat
                                    value={
                                       tourPriceSale > priceSaleMomo
                                          ? tourPriceSale - priceSaleMomo
                                          : 0
                                    }
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                 />
                              </Tooltip>
                           </div>
                           <div className="ht-seat">
                              {` `} <i className="fas fa-couch"></i> Số chỗ còn
                              nhận: {5}
                           </div>
                        </div>
                        <div className="ht-btn-buy">
                           <Link
                              to={{
                                 pathname: `/book-tour/${tourById.idTour}`,
                                 state: {
                                    tour: tourById
                                 }
                              }}
                           >
                              <Tooltip
                                 title={
                                    <p className="ht-no-p-m">
                                       {` Giảm ngay với Ví Momo`}
                                    </p>
                                 }
                                 placement="bottomRight"
                              >
                                 {size === "small" ? (
                                    <Button
                                       type="primary"
                                       className="ht-btn-buy-2-tour-detail-page"
                                    >
                                       <i className="fas fa-shopping-cart"></i>
                                    </Button>
                                 ) : (
                                    <Button
                                       type="primary"
                                       className="ht-btn-buy-2-tour-detail-page"
                                    >
                                       <i className="fas fa-cart-plus"></i>
                                       {` `} ĐẶT NGAY
                                    </Button>
                                 )}
                              </Tooltip>
                           </Link>
                        </div>
                     </div>
                     <div className="ht-divide"> {` `}</div>
                     <div className="ht-info-container-4 ftco-animate">
                        <div className="ht-support">
                           Gọi cho chúng tôi ngay bây giờ: 0983 982 933
                        </div>
                        <div className="ht-banner-ad">
                           Chứa banner quảng cáo của tour 2 cây dừa ở đây <br />
                           Chứa banner quảng cáo của tour 2 cây dừa ở đây <br />
                           Chứa banner quảng cáo của tour 2 cây dừa ở đây <br />
                        </div>
                        {/* maybe describe or link trong trang xem chương trình tour... */}
                     </div>
                  </div>
               </div>
               {/* Tour schedule container */}
               <div className="row ht-info-schedule-container ">
                  {/* Content main */}
                  <div className="col-sm-10 col-md-9 col-lg-9">
                     <div
                        data-spy="scroll"
                        data-target="#ht-list-info-container"
                        data-offset="10"
                        className="ht-schedule-container ftco-animate"
                     >
                        <div
                           className="ht-time-line ftco-animate"
                           id="ht-list-info-1"
                        >
                           <div className="ht-schedule-title">
                              CHƯƠNG TRÌNH TOUR TỔNG QUAN
                           </div>
                           <Timeline
                              mode={"left"}
                              className="width-100 ht-schedule-timeline"
                           >
                              {listTimelineByIdTour &&
                                 listTimelineByIdTour.map((timeline, index) => (
                                    <Timeline.Item
                                       label={
                                          <p className="ht-label">
                                             {" "}
                                             {moment(timeline.date).format(
                                                INDEX_CONSTANTS.DATE_TIME_FORMAT
                                                   .DATE_SHORT_TIME
                                             )}{" "}
                                             <i className="far fa-calendar-alt"></i>
                                          </p>
                                       }
                                       dot={
                                          <i className="fas fa-map-pin ht-dot"></i>
                                       }
                                       color=""
                                    >
                                       <div className="ht-time-line-content">
                                          <div className="ht-location">
                                             <i className="fas fa-location-arrow"></i>{" "}
                                             {timeline.title}
                                          </div>
                                          <div className="ht-describe">
                                             <Paragraph
                                                className="ht-text-justify"
                                                ellipsis={{
                                                   rows,
                                                   expandable: true,
                                                   suffix: ""
                                                }}
                                                title={timeline.description}
                                             >
                                                {timeline.description}
                                             </Paragraph>
                                          </div>
                                       </div>
                                    </Timeline.Item>
                                 ))}
                           </Timeline>
                        </div>
                        <div
                           className="ht-content-schedule ftco-animate"
                           id="ht-list-info-2"
                        >
                           <div className="ht-schedule-title">
                              LỊCH TRÌNH CHI TIẾT
                           </div>
                           <div className="ck-content ht-content">
                              {this.parseHTMLSchedule()}
                           </div>
                        </div>
                        <div
                           className="ht-content-policy ftco-animate"
                           id="ht-list-info-3"
                        >
                           <div className="ht-schedule-title">
                              CHÍNH SÁCH, ĐIỀU KHOẢN VÀ LƯU Ý
                           </div>
                           <Tabs
                              tabPosition={"right"}
                              className="ht-tabs-schedule"
                           >
                              <TabPane tab="Chi tiết giá tour" key="1">
                                 {scheduleByIdTour.policy &&
                                    parseHtml(`${scheduleByIdTour.policy}`)}
                              </TabPane>
                              <TabPane tab="Lưu ý" key="2">
                                 {scheduleByIdTour.notes &&
                                    parseHtml(`${scheduleByIdTour.notes}`)}
                              </TabPane>
                              <TabPane tab="Liên hệ" key="3">
                                 {scheduleByIdTour.contacts &&
                                    parseHtml(`${scheduleByIdTour.contacts}`)}
                              </TabPane>
                           </Tabs>
                        </div>
                        <div
                           className="ht-info-more ftco-animate"
                           id="ht-list-info-4"
                        >
                           <div className="ht-schedule-title">
                              ĐÁNH GIÁ VÀ NHẬN XÉT
                           </div>
                           <div className="ht-rating">
                              <div className="ht-header-rating col-md-12">
                                 <div className="ht-sort-rating">
                                    <i className="fas fa-sort"></i> Xếp theo:{" "}
                                    {`  `}
                                    <Radio.Group
                                       onChange={this.onChangeRatingSortRadio}
                                       value={this.state.valueRatingSort}
                                    >
                                       <Radio value={1}>
                                          <i className="fas fa-sort-down"></i>{" "}
                                          Mới đến cũ
                                       </Radio>
                                       <Radio value={2}>
                                          <i className="fas fa-sort-up"></i> Cũ
                                          đến mới
                                       </Radio>
                                       <Radio value={3}>
                                          <i className="far fa-star"></i> Thấp
                                          đến cao
                                       </Radio>
                                       <Radio value={4}>
                                          <i className="fas fa-star"></i> Cao
                                          đến thấp
                                       </Radio>
                                    </Radio.Group>
                                 </div>
                                 {isLogin && (
                                    <Button onClick={this.showModal}>
                                       <i className="fas fa-pen-square mr-2"></i>{" "}
                                       Viết Đánh Giá
                                    </Button>
                                 )}
                                 {/* Modal write evaluate */}
                                 <Modal
                                    title="Đánh giá"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    okText="Đánh giá"
                                    cancelText="Hủy"
                                    style={{ top: 50 }}
                                 >
                                    <div className="ht-evaluate-container">
                                       <div className="ht-evaluate-detail">
                                          <div className="ht-slider-title d-flex col-md-12 pl-0 ml-0">
                                             <Tooltip
                                                className="col-md-3 pr-0 pl-0 mr-0 ml-0"
                                                title={`Chỗ ở nghỉ ngơi`}
                                             >
                                                <i className="fas fa-hotel"></i>{" "}
                                                Chỗ nghỉ:
                                                {`  `}
                                             </Tooltip>
                                             <Slider
                                                className="col-md-9"
                                                value={numberStarHotel}
                                                onChange={e =>
                                                   this.setState({
                                                      numberStarHotel: e
                                                   })
                                                }
                                                marks={marksEvaluate}
                                                step={1}
                                                min={1}
                                                max={5}
                                             />
                                          </div>
                                          <div className="ht-slider-title d-flex col-md-12 pl-0 ml-0">
                                             <Tooltip
                                                className="col-md-3 pr-0 pl-0 mr-0 ml-0"
                                                title={`Ẩm thực`}
                                             >
                                                <i className="fas fa-utensils"></i>
                                                {`  `}Ẩm thực:
                                             </Tooltip>
                                             <Slider
                                                className="col-md-9"
                                                value={numberStarFood}
                                                onChange={e =>
                                                   this.setState({
                                                      numberStarFood: e
                                                   })
                                                }
                                                // marks={marksEvaluate}
                                                step={1}
                                                min={1}
                                                max={5}
                                             />
                                          </div>{" "}
                                          <div className="ht-slider-title d-flex col-md-12 pl-0 ml-0">
                                             <Tooltip
                                                className="col-md-3 pr-0 pl-0 mr-0 ml-0"
                                                title={`Phương tiện và đi lại`}
                                             >
                                                <i className="fas fa-shuttle-van"></i>
                                                {`  `}Đi lại
                                             </Tooltip>
                                             <Slider
                                                className="col-md-9"
                                                value={numberStarVehicle}
                                                onChange={e =>
                                                   this.setState({
                                                      numberStarVehicle: e
                                                   })
                                                }
                                                step={1}
                                                // marks={marksEvaluate}
                                                min={1}
                                                max={5}
                                             />
                                          </div>{" "}
                                          <div className="ht-slider-title d-flex col-md-12 pl-0 ml-0">
                                             <Tooltip
                                                className="col-md-3 pr-0 pl-0 mr-0 ml-0"
                                                title={`Hướng dẫn viên`}
                                             >
                                                <i className="fas fa-flag"></i>
                                                {`  `}H.dẫn viên:
                                             </Tooltip>
                                             <Slider
                                                className="col-md-9"
                                                value={numberStarTourGuide}
                                                onChange={e =>
                                                   this.setState({
                                                      numberStarTourGuide: e
                                                   })
                                                }
                                                step={1}
                                                // marks={marksEvaluate}
                                                min={1}
                                                max={5}
                                             />
                                          </div>{" "}
                                          <div className="ht-slider-title d-flex col-md-12 pl-0 ml-0">
                                             <Tooltip
                                                className="col-md-3 pr-0 pl-0 mr-0 ml-0"
                                                title={`Lịch trình tour`}
                                             >
                                                <i className="fas fa-calendar-check"></i>{" "}
                                                Lịch trình tour
                                             </Tooltip>
                                             <Slider
                                                className="col-md-9"
                                                value={numberStarSchedule}
                                                onChange={e =>
                                                   this.setState({
                                                      numberStarSchedule: e
                                                   })
                                                }
                                                step={1}
                                                marks={marksEvaluate}
                                                min={1}
                                                max={5}
                                             />
                                          </div>
                                       </div>
                                       <div className="ht-evaluate-form mt-3">
                                          <Input
                                             className="mb-2"
                                             placeholder="Họ và tên hoặc email"
                                             name="nameEvaluate"
                                             value={nameEvaluate}
                                             onChange={
                                                this.onChangeInputEvaluate
                                             }
                                          />
                                          <Input
                                             className="mb-2"
                                             placeholder="Tiêu đề"
                                             name="titleEveluate"
                                             value={titleEveluate}
                                             onChange={
                                                this.onChangeInputEvaluate
                                             }
                                          />
                                          <Select
                                             className="mb-2"
                                             showSearch
                                             style={{
                                                width: "100%"
                                             }}
                                             placeholder="Kiểu du lịch"
                                             optionFilterProp="children"
                                             onChange={this.onChangeTypeTour}
                                             onFocus={this.onFocusTypeTour}
                                             onBlur={this.onBlurTypeTour}
                                             onSearch={this.onSearchTypeTour}
                                             filterOption={(input, option) =>
                                                option.children
                                                   .toLowerCase()
                                                   .indexOf(
                                                      input.toLowerCase()
                                                   ) >= 0
                                             }
                                          >
                                             <Option value="personal">
                                                Cá nhân
                                             </Option>
                                             <Option value="heart">
                                                Cặp đôi
                                             </Option>
                                             <Option value="family">
                                                Gia đình
                                             </Option>
                                             <Option value="friend">
                                                Bạn bè
                                             </Option>
                                             <Option value="business">
                                                Doanh nghiệp
                                             </Option>
                                          </Select>
                                          <TextArea
                                             rows={4}
                                             placeholder="Nội dung chi tiết"
                                             name="contentEvaluate"
                                             value={contentEvaluate}
                                             onChange={
                                                this.onChangeInputEvaluate
                                             }
                                          />
                                       </div>
                                    </div>
                                 </Modal>
                              </div>
                              <Tabs
                                 tabPosition={"left"}
                                 tabBarExtraContent={
                                    isLogin && (
                                       <Button onClick={this.showModal}>
                                          Viết Đánh Giá
                                       </Button>
                                    )
                                 }
                                 className="ht-tabs-rating col-md-12"
                              >
                                 {INDEX_CONSTANTS.LIST_TAG_EVALUATE.map(
                                    (tag, index) => (
                                       <TabPane
                                          tab={
                                             <>
                                                <i className={tag.icon}></i>{" "}
                                                {tag.title} (
                                                {
                                                   listEvaluateByIdTour[index]
                                                      .length
                                                }
                                                )
                                             </>
                                          }
                                          key={index}
                                       >
                                          <List
                                             itemLayout="horizontal"
                                             dataSource={
                                                listEvaluateByIdTour[index]
                                             }
                                             renderItem={item => (
                                                <div className="ht-rate-detail">
                                                   <div className="ht-rate-avatar">
                                                      <Avatar
                                                         size="large"
                                                         src={
                                                            INDEX_CONSTANTS.API_ENDPOINT +
                                                            item.avatar
                                                         }
                                                      />
                                                   </div>
                                                   <div className="ht-rate-content">
                                                      <div className="ht-rate-detail-name-and-date col-md-12">
                                                         <div className="ht-name">
                                                            <i
                                                               className={
                                                                  item.icon
                                                               }
                                                            ></i>{" "}
                                                            {`${item.name}`}
                                                         </div>
                                                         <div className="ht-date">
                                                            {moment(
                                                               item.dateAdded
                                                            ).format(
                                                               INDEX_CONSTANTS
                                                                  .DATE_TIME_FORMAT
                                                                  .DATE_TIME
                                                            )}
                                                         </div>
                                                      </div>
                                                      <div className="ht-slider-container-mini col-md-12">
                                                         <div className="ht-rate-box">
                                                            <div className="ht-name">
                                                               {item.rateTitle}
                                                            </div>
                                                            <div className="ht-rate">{`${item.rateAverage} điểm`}</div>
                                                         </div>
                                                         <div className="ht-mini-review">
                                                            <Tooltip
                                                               title={`Chỗ ở nghỉ ngơi`}
                                                            >
                                                               <i className="fas fa-hotel"></i>
                                                               (
                                                               {
                                                                  item.numberStarHotel
                                                               }
                                                               ){`  `}
                                                            </Tooltip>
                                                            <Tooltip
                                                               title={`Ẩm thực`}
                                                            >
                                                               <i className="fas fa-utensils ml-2"></i>
                                                               (
                                                               {
                                                                  item.numberStarFood
                                                               }
                                                               ){`  `}
                                                            </Tooltip>
                                                            <Tooltip
                                                               title={`Phương tiện và đi lại`}
                                                            >
                                                               <i className="fas fa-shuttle-van ml-2"></i>
                                                               (
                                                               {
                                                                  item.numberStarVehicle
                                                               }
                                                               ){`  `}
                                                            </Tooltip>
                                                            <Tooltip
                                                               title={`Hướng dẫn viên`}
                                                            >
                                                               <i className="fas fa-flag ml-2"></i>
                                                               (
                                                               {
                                                                  item.numberStarTourGuide
                                                               }
                                                               ){`  `}
                                                            </Tooltip>
                                                            <Tooltip
                                                               title={`Lịch trình tour`}
                                                            >
                                                               <i className="fas fa-calendar-check ml-2"></i>
                                                               (
                                                               {
                                                                  item.numberStarSchedule
                                                               }
                                                               ) {`  `}
                                                            </Tooltip>
                                                         </div>
                                                      </div>
                                                      <div className="ht-rate-description col-md-12">
                                                         <Paragraph
                                                            className="ht-text-justify"
                                                            ellipsis={{
                                                               rows,
                                                               expandable: true,
                                                               suffix: ``
                                                            }}
                                                            title={
                                                               item.contentEvaluate
                                                            }
                                                         >
                                                            {
                                                               item.contentEvaluate
                                                            }
                                                         </Paragraph>
                                                      </div>
                                                   </div>
                                                </div>
                                             )}
                                          />
                                       </TabPane>
                                    )
                                 )}
                              </Tabs>
                           </div>
                        </div>
                        {/* <div
                           className="ht-tour-more-container ftco-animate"
                           id="ht-list-info-5"
                        >
                           <div className="ht-schedule-title">
                              NHỮNG TOUR LIÊN QUAN
                           </div>
                           <div className="ht-tour-more col-md-12">
                              Nothing!
                        
                           </div>
                        </div> */}
                     </div>
                  </div>
                  {/* MENU info schedule, detail, note, date, concat, map, more tour,... */}
                  <div className="col-sm-2 col-md-3 col-lg-3 ">
                     <div
                        id="ht-list-info-container"
                        className="list-group ftco-animate ht-list-info"
                     >
                        <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-1"
                        >
                           Chương trình tour tổng quan
                        </a>
                        <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-2"
                        >
                           Lịch trình chi tiết
                        </a>
                        <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-3"
                        >
                           Điều khoản và chính sách
                        </a>
                        <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-4"
                        >
                           Đánh giá và nhận xét
                        </a>
                        {/* <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-5"
                        >
                           Xem những tour liên quan
                        </a> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
