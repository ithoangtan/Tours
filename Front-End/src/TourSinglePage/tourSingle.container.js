import React, { Component } from "react";

import { Link } from "react-router-dom";

import parseHtml from "html-react-parser";

import { Carousel, Rate, Tag, Button, Tooltip, Timeline } from "antd";
import { Icon } from "@ant-design/compatible";

import MoreTourSingle from "./moreTourSingle.container";
import TourDetailImg from "../TourPage/tourDetailImages";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";
import moment from "moment";
import NumberFormat from "react-number-format";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

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
      rows: 2
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

   render() {
      const { size } = this.state;
      const { tourById } = this.props;
      const totalNumberStar = 4.48555555555555555555555555555555555555555555;
      const departureDay = moment(tourById.departureDay).format("l");
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
                           <Button type="default" size="small">
                              Đổi ngày khác
                           </Button>
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
                           Chứa banner quảng cáo của tour 2 cây dừa ở đây <br />
                        </div>
                        {/* maybe describe or link trong trang xem chương trình tour... */}
                     </div>
                  </div>
               </div>
               {/* Tour schedule container */}
               <div className="row ht-info-schedule-container">
                  {/* Content main */}

                  <div className="col-sm-10 col-md-9 col-lg-9">
                     <div
                        className="ht-schedule-container ftco-animate"
                        data-spy="scroll"
                        data-target="#list-example"
                        data-offset="0"
                     >
                        <div
                           className="ht-time-line ftco-animate"
                           id="ht-list-info-1"
                        >
                           <Timeline mode={"left"}>
                              <Timeline.Item label="2015-09-01">
                                 Create a services
                              </Timeline.Item>
                              <Timeline.Item label="2015-09-01 09:12:11">
                                 Solve initial network problems
                              </Timeline.Item>
                              <Timeline.Item>Technical testing</Timeline.Item>
                              <Timeline.Item label="2015-09-01 09:12:11">
                                 Network problems being solved
                              </Timeline.Item>
                           </Timeline>
                        </div>
                        <div
                           className="ht-content-schedule ftco-animate"
                           id="ht-list-info-2"
                        >
                           <div className="ck-content">
                              {this.parseHTMLSchedule()}
                           </div>
                        </div>
                        <div
                           className="ht-content-policy ftco-animate"
                           id="ht-list-info-3"
                        >
                           https://ant.design/components/tabs/
                           <div className="ht-choose-different-day ftco-animate">
                              https://ant.design/components/calendar/
                           </div>
                        </div>
                        <div
                           className="ht-info-more ftco-animate"
                           id="ht-list-info-4"
                        >
                           Đánhg giá, nhận xét của khách hàng
                        </div>
                        <div
                           className="ht-tour-more ftco-animate"
                           id="ht-list-info-5"
                        >
                           Đánhg giá, nhận xét của khách hàng
                        </div>
                     </div>
                  </div>
                  {/* MENU info schedule, detail, note, date, concat, map, more tour,... */}
                  <div className="col-sm-2 col-md-3 col-lg-3">
                     <div
                        className="list-group ht-list-info ftco-animate"
                        id="ht-list-info-container"
                     >
                        <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-1"
                        >
                           Mốc thời gian lịch trình
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
                           Thông tin khác
                        </a>
                        <a
                           className="list-group-item list-group-item-action"
                           href="#ht-list-info-4"
                        >
                           Xem những tour khác
                        </a>
                     </div>
                  </div>
                  <MoreTourSingle idImage={2} className="ftco-animate" />
                  <MoreTourSingle idImage={1} className="ftco-animate" />
               </div>
            </div>
         </section>
      );
   }
}
