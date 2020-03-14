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

const dataRating = [
   {
      title: "ithoangtan cá nhân",
      icon: `fas fa-user`
   },
   {
      title: "ithoangtan cặp đôi",
      icon: "fas fa-heart"
   },
   {
      title: "ithoangtan gia đình",
      icon: "fas fa-users"
   },
   {
      title: "ithoangtan bạn bè",
      icon: "fas fa-user-friends"
   },
   {
      title: "ithoangtan doanh nghiệp",
      icon: "fas fa-briefcase"
   }
];

const marksEvaluate = {
   0: {
      style: {
         color: "#bfbfbf"
      },
      label: (
         <strong style={{ width: "70px", position: "absolute", left: "-25px" }}>
            "Rất tệ"
         </strong>
      )
   },
   2.5: {
      style: {
         color: "#fa8c16"
      },
      label: "Tạm ổn"
   },
   5: {
      style: {
         color: "#52c41a"
      },
      label: <strong>"Bình thường"</strong>
   },
   7.5: {
      style: {
         color: "#eb2f96"
      },
      label: "Rất tổt"
   },
   10: {
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

   state = {
      value: 3,
      size: "small",
      rows: 2,
      valueRatingSort: 1,
      visible: false
   };

   showModal = () => {
      this.setState({
         visible: true
      });
   };

   // Select
   onChangeTypeTour(value) {
      console.log(`selected ${value}`);
   }

   onBlurTypeTour() {
      console.log("blur");
   }

   onFocusTypeTour() {
      console.log("focus");
   }

   onSearchTypeTour(val) {
      console.log("search:", val);
   }

   handleOk = e => {
      console.log(e);
      this.setState({
         visible: false
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
      return (Math.round(numberStar * 10) / 10).toFixed(1) >= numStar + 0.5
         ? numStar + 0.5
         : numStar;
   }

   onChangeRows = rows => {
      this.setState({ rows });
   };

   onPanelChange(value, mode) {
      console.log(value, mode);
   }
   render() {
      const { size, rows } = this.state;
      const { tourById } = this.props;
      const totalNumberStar = 4.48555555555555555555555555555555555555555555;
      const departureDay = moment(tourById.departureDay).format("l");
      // const departureDay2 = moment(tourById.departureDay).format();
      const timeDeparture = moment(tourById.departureDay).format("LT");
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
                        [QR] code
                        {/* Hình QR sinh ra bằng thư viện
                        https://www.npmjs.com/package/qrcode.react  */}
                     </div>
                     <div className="ht-sale-info">
                        Giảm ngay <strong>1,000,000 / khách </strong> khi thanh
                        toán bằng bất kỳ hình thức online nào
                     </div>
                     <div className="ht-qr-img-over">
                        <img
                           src={`${INDEX_CONSTANTS.API_ENDPOINT}/img/bg-qr.png`}
                           alt="nothing else"
                        />
                     </div>
                     <div className="ht-tag">
                        <Tag color="magenta">something</Tag>
                        <Tag color="red">something</Tag>
                        <Tag color="volcano">something</Tag>
                        <Tag color="orange">something</Tag>
                        <Tag color="gold">something</Tag>
                        <Tag color="lime">something</Tag>
                        <Tag color="green">omething</Tag>
                        <Tag color="cyan">something</Tag>
                        <Tag color="blue">something</Tag>
                        <Tag color="geekblue">something</Tag>
                        <Tag color="purple">something</Tag>
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
                              allowHalf
                              tooltips={desc}
                              disabled
                              defaultValue={this.numberStarCal(totalNumberStar)}
                              character={<Icon type="star" />}
                              //Phải làm tròn số với đơn vị 0.5
                              size="small"
                              className="mr-1 height-40"
                           ></Rate>{" "}
                           <p className="ht-no-p-m">
                              {`  `}
                              <strong>
                                 {" "}
                                 {Math.round(totalNumberStar * 100) / 100}{" "}
                              </strong>
                              với <strong>{`xx00`} </strong>đánh giá
                           </p>
                        </div>
                        <div className="ht-views">
                           <p>
                              <Tooltip title={`${335} luợt xem`}>
                                 <i
                                    className="fas fa-eye"
                                    style={{ color: "#595959" }}
                                 ></i>{" "}
                                 {335}
                              </Tooltip>
                           </p>
                           <p>
                              <Tooltip title={`${155} lượt thích`}>
                                 <i
                                    className="fas fa-thumbs-up"
                                    style={{ color: "#91d5ff" }}
                                 ></i>{" "}
                                 {155}
                              </Tooltip>
                           </p>
                           <p>
                              <Tooltip title={`${58} thêm vào yêu thích`}>
                                 <i
                                    className="fas fa-heart"
                                    style={{ color: "#ffa39e" }}
                                 ></i>{" "}
                                 {58}
                              </Tooltip>
                           </p>
                           <p>
                              <Tooltip title={`${335} bình luận`}>
                                 <Link to={`tour-single/comment`}>
                                    <i className="fas fa-comment"></i> {335}
                                 </Link>
                              </Tooltip>
                           </p>
                           <p>
                              <Tooltip title={`${123} đã đặt`}>
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
                           <Tooltip title="Đưa đón tận nơi">
                              <i className="fas fa-taxi"> </i> {` `}
                           </Tooltip>
                           {/* Mấy cái khác tự làm như trên */}
                           <Tooltip title="Cho thuê xe máy">
                              <i className="fas fa-motorcycle"> </i> {` `}
                           </Tooltip>
                           <Tooltip title="Free Wifi">
                              <i className="fas fa-wifi"> </i> {` `}
                           </Tooltip>
                           <Tooltip title="Hỗ trợ người khuyết tật">
                              <i className="fas fa-wheelchair"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Sẵn vé máy bay">
                              <i className="fas fa-plane-departure"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Xe giường nằm">
                              <i className="fas fa-bus-alt"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Bãi biển đẹp">
                              <i className="fas fa-umbrella-beach"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Phòng ngủ tập thể">
                              <i className="fas fa-bed"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Passport">
                              <i className="fas fa-id-badge"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Tiệc sinh nhật đúng ngày">
                              <i className="fas fa-birthday-cake"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Hướng dẫn viên">
                              <i className="fas fa-flag"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Bảo hiểm">
                              <i className="fas fa-user-shield"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Cho thuê xe đạp">
                              <i className="fas fa-bicycle"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Tự do trong 1 ngày">
                              <i className="fas fa-shoe-prints"></i> {` `}
                              {/* Tự do 2 hoặc mấy ngày đấy */}
                           </Tooltip>
                           <Tooltip title="Phòng tập gym">
                              <i className="fas fa-dumbbell"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Dịch vụ spa">
                              <i className="fas fa-spa"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Có bể bơi">
                              <i className="fas fa-swimmer"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Trượt tuyết">
                              <i className="fas fa-skiing"></i> {` `}
                           </Tooltip>{" "}
                           <Tooltip title="Bao bữa sáng">
                              <i className="fas fa-utensils"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Hỗ trợ visa">
                              <i className="fab fa-cc-visa"></i> {` `}
                           </Tooltip>
                           <Tooltip title="Vé tham quan">
                              <i className="fas fa-money-bill"></i> {` `}
                           </Tooltip>
                        </div>
                     </div>
                     <div className="ht-divide"> {` `}</div>
                     <div className="ht-info-container-3-buy-1 ftco-animate">
                        <div className="ht-price-and-seat">
                           <div className="ht-text-price-tour-detail">
                              <Tooltip
                                 title={
                                    <NumberFormat
                                       value={
                                          tourById.price * tourById.sale * 0.01
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
                                       tourById.price -
                                       tourById.price * tourById.sale * 0.01
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
                                          tourById.price *
                                             tourById.sale *
                                             0.01 +
                                          1000000
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
                                       tourById.price -
                                       tourById.price * tourById.sale * 0.01 -
                                       1000000
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
                                       {` Giảm ngay 1,000,000 với Ví Momo`}
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
                              <Timeline.Item
                                 label={
                                    <p className="ht-label">
                                       {" "}
                                       01/01/2019{" "}
                                       <i className="far fa-calendar-alt"></i>
                                    </p>
                                 }
                                 dot={<i className="fas fa-map-pin ht-dot"></i>}
                                 color=""
                              >
                                 <div className="ht-time-line-content">
                                    <div className="ht-location">
                                       <i className="fas fa-location-arrow"></i>{" "}
                                       TP. HỒ CHÍ MINH – SYDNEY
                                    </div>
                                    <div className="ht-describe">
                                       <Paragraph
                                          className="ht-text-justify"
                                          ellipsis={{
                                             rows,
                                             expandable: true,
                                             suffix: "--ithoangtan"
                                          }}
                                          title={`Hướng dẫn viên Vietravel
                                          đón Quý khách tại điểm hẹn sân bay 
                                          Tân Sơn Nhất đón chuyến bay thẳng đi
                                          Sydney. Nghỉ đêm trên máy bay.Hướng 
                                          dẫn viên Vietravel đón Quý khách tại 
                                          điểm hẹn sân bay Tân Sơn Nhất đón 
                                          chuyến bay thẳng đi Sydney. Nghỉ đêm 
                                          trên máy bay.`}
                                       >
                                          Hướng dẫn viên Vietravel đón Quý khách
                                          tại điểm hẹn sân bay Tân Sơn Nhất đón
                                          chuyến bay thẳng đi Sydney. Nghỉ đêm
                                          trên máy bay.Hướng dẫn viên Vietravel
                                          đón Quý khách tại điểm hẹn sân bay Tân
                                          Sơn Nhất đón chuyến bay thẳng đi
                                          Sydney. Nghỉ đêm trên máy bay.
                                       </Paragraph>
                                    </div>
                                 </div>
                              </Timeline.Item>
                              <Timeline.Item
                                 label={
                                    <p className="ht-label">
                                       {" "}
                                       01/01/2019{" "}
                                       <i className="far fa-calendar-alt"></i>
                                    </p>
                                 }
                                 dot={<i className="fas fa-map-pin ht-dot"></i>}
                                 color=""
                              >
                                 <div className="ht-time-line-content">
                                    <div className="ht-location">
                                       <i className="fas fa-location-arrow"></i>{" "}
                                       TP. HỒ CHÍ MINH – SYDNEY
                                    </div>
                                    <div className="ht-describe">
                                       <Paragraph
                                          className="ht-text-justify"
                                          ellipsis={{
                                             rows,
                                             expandable: true,
                                             suffix: "--ithoangtan"
                                          }}
                                          title={`Hướng dẫn viên Vietravel
                                          đón Quý khách tại điểm hẹn sân bay 
                                          Tân Sơn Nhất đón chuyến bay thẳng đi
                                          Sydney. Nghỉ đêm trên máy bay.Hướng 
                                          dẫn viên Vietravel đón Quý khách tại 
                                          điểm hẹn sân bay Tân Sơn Nhất đón 
                                          chuyến bay thẳng đi Sydney. Nghỉ đêm 
                                          trên máy bay.`}
                                       >
                                          Hướng dẫn viên Vietravel đón Quý khách
                                          tại điểm hẹn sân bay Tân Sơn Nhất đón
                                          chuyến bay thẳng đi Sydney. Nghỉ đêm
                                          trên máy bay.Hướng dẫn viên Vietravel
                                          đón Quý khách tại điểm hẹn sân bay Tân
                                          Sơn Nhất đón chuyến bay thẳng đi
                                          Sydney. Nghỉ đêm trên máy bay.
                                       </Paragraph>
                                    </div>
                                 </div>
                              </Timeline.Item>
                              <Timeline.Item
                                 label={
                                    <p className="ht-label">
                                       {" "}
                                       01/01/2019{" "}
                                       <i className="far fa-calendar-alt"></i>
                                    </p>
                                 }
                                 dot={<i className="fas fa-map-pin ht-dot"></i>}
                                 color=""
                              >
                                 <div className="ht-time-line-content">
                                    <div className="ht-location">
                                       <i className="fas fa-location-arrow"></i>{" "}
                                       TP. HỒ CHÍ MINH – SYDNEY
                                    </div>
                                    <div className="ht-describe">
                                       <Paragraph
                                          className="ht-text-justify"
                                          ellipsis={{
                                             rows,
                                             expandable: true,
                                             suffix: "--ithoangtan"
                                          }}
                                          title={`Hướng dẫn viên Vietravel
                                          đón Quý khách tại điểm hẹn sân bay 
                                          Tân Sơn Nhất đón chuyến bay thẳng đi
                                          Sydney. Nghỉ đêm trên máy bay.Hướng 
                                          dẫn viên Vietravel đón Quý khách tại 
                                          điểm hẹn sân bay Tân Sơn Nhất đón 
                                          chuyến bay thẳng đi Sydney. Nghỉ đêm 
                                          trên máy bay.`}
                                       >
                                          Hướng dẫn viên Vietravel đón Quý khách
                                          tại điểm hẹn sân bay Tân Sơn Nhất đón
                                          chuyến bay thẳng đi Sydney. Nghỉ đêm
                                          trên máy bay.Hướng dẫn viên Vietravel
                                          đón Quý khách tại điểm hẹn sân bay Tân
                                          Sơn Nhất đón chuyến bay thẳng đi
                                          Sydney. Nghỉ đêm trên máy bay.
                                       </Paragraph>
                                    </div>
                                 </div>
                              </Timeline.Item>
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
                                 Bao gồm Phí visa Úc (Lưu ý: visa Úc sẽ không
                                 dán vào hộ chiếu) Vé máy bay khứ hồi, vé chặng
                                 nội địa Úc (Hàng không Jetstar hành lý 30 kg/01
                                 kiện, có phục vụ ăn trên máy bay chặng quốc tế,
                                 lưu ý quý khách nhớ đem theo áo ấm trên máy bay
                                 vì hàng không không phuc vụ phát mền). Thuế phi
                                 trường hai nước, phụ phí xăng dầu và bảo hiểm
                                 hàng không. Khách sạn tiêu chuẩn quốc tế 3 sao,
                                 phòng đôi Nhà hàng, chi phí tham quan trong
                                 chương trình. Xe máy lạnh đưa đón đoàn theo
                                 chương trình. Hướng dẫn viên Vietravel suốt
                                 tuyến. Đặc biệt, Vietravel tặng thêm cho tất cả
                                 du khách (đến 80 tuổi) phí Bảo hiểm du lịch
                                 toàn cầu với mức bồi thường tối đa là
                                 1.400.000.000 VND. Không bao gồm: Phí phòng đơn
                                 (dành cho khách yêu cầu ở phòng đơn): Nước uống
                                 (bia rượu trong bữa ăn), điện thoại, giặt ủi,
                                 hành lý quá cước theo quy định của hàng không.
                                 Thuốc men, bệnh viện… và chi phí cá nhân của
                                 khách ngoài chương trình. Chi phí dời ngày, đổi
                                 chặng, nâng hạng vé máy bay. Trường hợp Quý
                                 khách không sử dụng chặng đi của vé đoàn theo
                                 tour, các chặng nội địa và quốc tế còn lại sẽ
                                 bị hủy hoặc không sử dụng chặng về cũng không
                                 được hoàn do điều kiện của hãng Hàng Không Tiền
                                 bồi dưỡng cho hướng dẫn viên và tài xế địa
                                 phương (150.000/khách/ngày). Quà tặng: Quà tặng
                                 Vietravel. Thẻ thành viên với nhiều ưu đãi Giá
                                 tour dành cho trẻ em: + Trẻ em dưới 2 tuổi: 30%
                                 giá tour người lớn. + Trẻ em từ 2 tuổi đến dưới
                                 12 tuổi: 100% giá tour người lớn (có chế độ
                                 giường riêng). + Khi nộp hồ sơ quý khách đặt
                                 cọc 20 triệu/ khách. Quy trình đăng ký & thanh
                                 toán: - Đợt 1: Đặt cọc 20.000.000 VND/khách. -
                                 Đợt 2: Thanh toán số tiền tour còn lại sau khi
                                 được chấp thuận visa. Điều khoản hủy tour: +
                                 Sau khi đặt cọc tour và trước khi Vietravel nộp
                                 phí visa: không mất chi phí. + Trường hợp Quý
                                 khách bị từ chối visa, chi phí không hoàn lại
                                 là 5.000.000 VND - Nếu hủy hoặc chuyển sang các
                                 chuyến du lịch khác khi đã nộp visa mất phí cọc
                                 tour 30.000.000 vnd/khách - Nếu hủy hoặc chuyển
                                 sang các chuyến du lịch khác khi đã có visa chi
                                 phí hủy tour là 100% tiền tour. Lưu ý: Tour
                                 khuyến mãi không hoàn tiền tour vì bất kỳ lí do
                                 nào Trường hợp bất khả kháng: - Nếu chương
                                 trình du lịch bị hủy bỏ hoặc thay đổi bởi một
                                 trong hai bên vì lý do bất khả kháng (hỏa hoạn,
                              </TabPane>
                              <TabPane tab="Lưu ý" key="2">
                                 TRỤ SỞ CHÍNH Địa chỉ: 190 Pasteur, Phường 6,
                                 Quận 3, Tp. Hồ Chí Minh Điện thoại: (84-28)
                                 3822 8898 Fax: (84-28) 3829 9142 Email:
                                 info@vietravel.com
                              </TabPane>
                              <TabPane tab="Ý kiến khách hàng" key="4">
                                 ý kiến khách hàng
                              </TabPane>
                              <TabPane tab="Liên hệ" key="3">
                                 Liên hệ
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
                                 <Button onClick={this.showModal}>
                                    <i className="fas fa-pen-square mr-2"></i>{" "}
                                    Viết Đánh Giá
                                 </Button>
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
                                                defaultValue={10}
                                                marks={marksEvaluate}
                                                step={0.5}
                                                min={0}
                                                max={10}
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
                                                defaultValue={10}
                                                // marks={marksEvaluate}
                                                step={0.5}
                                                min={0}
                                                max={10}
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
                                                defaultValue={10}
                                                step={0.5}
                                                // marks={marksEvaluate}
                                                min={0}
                                                max={10}
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
                                                defaultValue={10}
                                                step={0.5}
                                                // marks={marksEvaluate}
                                                min={0}
                                                max={10}
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
                                                defaultValue={10}
                                                step={0.5}
                                                marks={marksEvaluate}
                                                min={0}
                                                max={10}
                                             />
                                          </div>
                                       </div>
                                       <div className="ht-evaluate-form mt-3">
                                          <Input
                                             className="mb-2"
                                             placeholder="Họ và tên hoặc email"
                                          />
                                          <Input
                                             className="mb-2"
                                             placeholder="Tiêu đề"
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
                                          />
                                       </div>
                                    </div>
                                 </Modal>
                              </div>
                              <Tabs
                                 tabPosition={"left"}
                                 tabBarExtraContent={
                                    <Button onClick={this.showModal}>
                                       Viết Đánh Giá
                                    </Button>
                                 }
                                 className="ht-tabs-rating col-md-12"
                              >
                                 <TabPane
                                    tab={
                                       <>
                                          <i className="fas fa-th"></i> Tất cả (
                                          {`5`})
                                       </>
                                    }
                                    key="1"
                                 >
                                    <List
                                       itemLayout="horizontal"
                                       dataSource={dataRating}
                                       renderItem={item => (
                                          <div className="ht-rate-detail">
                                             <div className="ht-rate-avatar">
                                                <Avatar
                                                   size="large"
                                                   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                />
                                             </div>
                                             <div className="ht-rate-content">
                                                <div className="ht-rate-detail-name-and-date col-md-12">
                                                   <div className="ht-name">
                                                      <i
                                                         className={item.icon}
                                                      ></i>{" "}
                                                      {`${item.title}`}
                                                   </div>
                                                   <div className="ht-date">
                                                      {`01/01/2020`}
                                                   </div>
                                                </div>
                                                <div className="ht-slider-container-mini col-md-12">
                                                   <div className="ht-rate-box">
                                                      <div className="ht-name">{`Hoàn hảo`}</div>
                                                      <div className="ht-rate">{`${9} điểm`}</div>
                                                   </div>
                                                   <div className="ht-mini-review">
                                                      <Tooltip
                                                         title={`Chỗ ở nghỉ ngơi`}
                                                      >
                                                         <i className="fas fa-hotel"></i>
                                                         (9)
                                                         {`  `}
                                                      </Tooltip>
                                                      <Tooltip
                                                         title={`Ẩm thực`}
                                                      >
                                                         <i className="fas fa-utensils ml-2"></i>
                                                         (9)
                                                         {`  `}
                                                      </Tooltip>
                                                      <Tooltip
                                                         title={`Phương tiện và đi lại`}
                                                      >
                                                         <i className="fas fa-shuttle-van ml-2"></i>
                                                         (9)
                                                         {`  `}
                                                      </Tooltip>
                                                      <Tooltip
                                                         title={`Hướng dẫn viên`}
                                                      >
                                                         <i className="fas fa-flag ml-2"></i>
                                                         (9)
                                                         {`  `}
                                                      </Tooltip>
                                                      <Tooltip
                                                         title={`Lịch trình tour`}
                                                      >
                                                         <i className="fas fa-calendar-check ml-2"></i>
                                                         (9) {`  `}
                                                      </Tooltip>
                                                   </div>
                                                </div>
                                                <div className="ht-rate-description col-md-12">
                                                   <Paragraph
                                                      className="ht-text-justify"
                                                      ellipsis={{
                                                         rows,
                                                         expandable: true,
                                                         suffix: `${`--ithoangtan`}`
                                                      }}
                                                      title={`Vừa qua thì tôi có đặt tour du
                                                lịch Hà Nội - SaPa - Hạ Long -
                                                Ninh Bình 6 ngày 5 đêm thông qua
                                                hệ thống của công ty mytour. Về
                                                tổng quan thì tôi khá là hài
                                                lòng về tour du lịch mà tôi vừa
                                                đi nên tôi cho được 9,5 điểm.
                                                Tôi rất ấn tượng về những địa
                                                điểm mà tôi đã đi qua và mỗi nơi
                                                đều để lại một dấu ấn khó quên
                                                trong lòng tôi. Hướng dẫn viên
                                                của đoàn khá là vui vẻ, thân
                                                thiện với mọi người. Chỗ nghỉ
                                                ngơi cũng như là ăn uống khá là
                                                tốt. Nhìn chung thì tôi không có
                                                gì phàn nàn hay góp ý về tour
                                                này cả.`}
                                                   >
                                                      Vừa qua thì tôi có đặt
                                                      tour du lịch Hà Nội - SaPa
                                                      - Hạ Long - Ninh Bình 6
                                                      ngày 5 đêm thông qua hệ
                                                      thống của công ty mytour.
                                                      Về tổng quan thì tôi khá
                                                      là hài lòng về tour du
                                                      lịch mà tôi vừa đi nên tôi
                                                      cho được 9,5 điểm. Tôi rất
                                                      ấn tượng về những địa điểm
                                                      mà tôi đã đi qua và mỗi
                                                      nơi đều để lại một dấu ấn
                                                      khó quên trong lòng tôi.
                                                      Hướng dẫn viên của đoàn
                                                      khá là vui vẻ, thân thiện
                                                      với mọi người. Chỗ nghỉ
                                                      ngơi cũng như là ăn uống
                                                      khá là tốt. Nhìn chung thì
                                                      tôi không có gì phàn nàn
                                                      hay góp ý về tour này cả.
                                                   </Paragraph>
                                                </div>
                                             </div>
                                          </div>
                                       )}
                                    />
                                 </TabPane>
                                 <TabPane
                                    tab={
                                       <>
                                          <i className="fas fa-user"></i> Cá
                                          nhân ({`1`})
                                       </>
                                    }
                                    key="2"
                                 >
                                    ádasdasd
                                 </TabPane>
                                 <TabPane
                                    tab={
                                       <>
                                          <i className="fas fa-heart"></i> Cặp
                                          đôi ({`1`})
                                       </>
                                    }
                                    key="3"
                                 >
                                    ádasdasd
                                 </TabPane>
                                 <TabPane
                                    tab={
                                       <>
                                          <i className="fas fa-users"></i> Gia
                                          đình ({`1`})
                                       </>
                                    }
                                    key="4"
                                 >
                                    ádasd
                                 </TabPane>
                                 <TabPane
                                    tab={
                                       <>
                                          <i className="fas fa-user-friends"></i>{" "}
                                          Bạn bè ({`1`})
                                       </>
                                    }
                                    key="5"
                                 >
                                    ádasdasd
                                 </TabPane>
                                 <TabPane
                                    tab={
                                       <>
                                          <i className="fas fa-briefcase"></i>{" "}
                                          Doanh nghiệp ({`1`})
                                       </>
                                    }
                                    key="6"
                                 >
                                    ádasd
                                 </TabPane>
                              </Tabs>
                           </div>
                        </div>
                        <div
                           className="ht-tour-more-container ftco-animate"
                           id="ht-list-info-5"
                        >
                           <div className="ht-schedule-title">
                              NHỮNG TOUR LIÊN QUAN
                           </div>
                           <div className="ht-tour-more col-md-12">
                              Nothing!
                              {/* <MoreTourSingle
                                 idImage={2}
                                 className="ftco-animate col-md-3"
                              />
                              <MoreTourSingle
                                 idImage={2}
                                 className="ftco-animate col-md-3"
                              />
                              <MoreTourSingle
                                 idImage={1}
                                 className="ftco-animate col-md-3"
                              />
                              <MoreTourSingle
                                 idImage={1}
                                 className="ftco-animate col-md-3"
                              /> */}
                           </div>
                        </div>
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
                        <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-5"
                        >
                           Xem những tour liên quan
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
