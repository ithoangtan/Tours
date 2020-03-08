import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Typography, Rate, Tag, Button, Carousel, Tooltip } from "antd";
import { Icon } from "@ant-design/compatible";
import TourDetailImages from "./tourDetailImages";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

import moment from "moment";
import NumberFormat from "react-number-format";

const { Text, Paragraph } = Typography;

export default class TourDetailContainer extends Component {
   state = {
      rows: 2,
      size: "default"
   };

   onChange = rows => {
      this.setState({ rows });
   };

   fetch = async () => {
      await funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   };

   componentWillMount() {
      this.setState({ size: window.innerWidth < 768.01 ? "small" : "default" });
   }
   componentDidMount() {
      this.fetch();
      this.props.loaded();
   }

   renderImage() {
      const { listImageTour } = this.props;
      let result = null;
      result = listImageTour.map((imageTour, index) => {
         return (
            <TourDetailImages
               {...this.props}
               srcImage={imageTour.url}
               key={index}
            />
         );
      });
      return result;
   }

   numberStarCal(numberStar) {
      let numStar = Math.floor(numberStar);
      return (Math.round(numberStar * 10) / 10).toFixed(1) >= numStar + 0.5
         ? numStar + 0.5
         : numStar;
   }

   //Dữ liệu từ ngoài truyền vô ở đây chỉ có việc load lên thôi
   render() {
      const { size } = this.state;
      const { tour } = this.props;
      const timeDeparture = moment(tour.departureDay).format("LT");
      const dmy = moment(tour.departureDay).format("L");

      const day = dmy.substr(3, 2);
      const month = dmy.substr(0, 2);
      const year = dmy.substr(dmy.length - 2, 2);

      const totalNumberStar = 3.98987987987987987987987987987;
      return (
         <div className="right-tour-detail-page mb-4 ftco-animate ht-tour-detail-container">
            <div className="ht-day-scroll-auto">
               {/* Chỗ này tách ngày ra bằng moment.js để thêm vào 2 nội dung ở dưới */}
               <div className="ht-f-day">{`${day}`}</div>
               <div className="ht-f-date">{`${month}/${year}`}</div>
            </div>
            <div className="tour-content">
               <div className="row justify-conten-center">
                  <div className="col-xs-12 col-md-6 col-lg-4 ht-info-tour-detail-container-1">
                     {/* Render Image of Tour */}
                     <Link
                        to={{
                           pathname: `/tour-single/${tour.idTour}`,
                           state: {
                              tour: tour
                           }
                        }}
                     >
                        <Carousel
                           autoplay
                           dotPosition={`top`}
                           className="ht-carousel-all-tour"
                        >
                           {this.renderImage()}
                        </Carousel>
                     </Link>
                     {/* end Render Image of Tour */}
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-5 pt-2 ht-info-tour-detail-container-2">
                     <Link
                        to={{
                           pathname: `/tour-single/${tour.idTour}`,
                           state: {
                              tour: tour
                           }
                        }}
                     >
                        <h4 className="ht-detail-tour-title">
                           {tour.titleTour}
                        </h4>
                     </Link>
                     <div className="ht-d-flex-start-center">
                        <Rate
                           allowHalf
                           disabled
                           defaultValue={this.numberStarCal(totalNumberStar)}
                           size="small"
                           className="ht-no-p-m"
                           character={<Icon type="star" />}
                        ></Rate>
                        <p className="ht-rate-detail-tour pt-1">
                           {size === "small" ? (
                              <>
                                 (
                                 <strong>
                                    {Math.round(totalNumberStar * 100) / 100}
                                 </strong>
                                 )
                              </>
                           ) : (
                              <>
                                 <strong>
                                    {" "}
                                    {Math.round(totalNumberStar * 100) /
                                       100}{" "}
                                 </strong>
                                 với <strong>{`xx00`} </strong>đánh giá{" "}
                              </>
                           )}
                        </p>
                     </div>
                     <div className="mt-1">
                        <i className="fas fa-tags"> </i>{" "}
                        {/* Tag color reference at https://ant.design/docs/spec/colors#header  */}
                        <Tag color="#fff1f0" className="ht-tour-detail-tag">
                           {tour.sale}% sale
                        </Tag>
                        <Tag color="#f6ffed" className="ht-tour-detail-tag">
                           {tour.sale}% Lễ 8/3
                        </Tag>
                     </div>
                     <div className="mt-1">
                        <p className="ht-info-tour-detail">
                           <i className="far fa-calendar"></i> Số ngày:{" "}
                           {tour.vocationTime}
                        </p>
                        <p className="ht-info-tour-detail">
                           <i className="far fa-clock"></i> Giờ: {timeDeparture}
                        </p>
                     </div>
                     <Paragraph
                        ellipsis={{
                           rows: this.state.rows,
                           expandable: true,
                           suffix: ""
                        }}
                        title={`${tour.describe}`}
                        className="ht-describe-info-tour-detail"
                     >
                        <i className="fas fa-info-circle"></i> {tour.describe}
                     </Paragraph>
                  </div>
                  <div className="col-xs-12 col-md-12 col-lg-3 pb-1 ht-info-tour-detail-container-3">
                     <div className="ht-info-tour-detail-special">
                        <div className="m-1 ht-tour-detail-info-departure">
                           <i className="fas fa-map-marked-alt"></i> Từ: Hồ Chí
                           Minh
                        </div>
                        <div className="m-1">
                           <div className="">
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
                                 <i className="fas fa-plane-departure"></i>{" "}
                                 {` `}
                              </Tooltip>
                              <Tooltip title="Phương tiện công cộng">
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
                           </div>
                           <div className="">
                              <Tooltip title="Tiệc sinh nhật đúng ngày">
                                 <i className="fas fa-birthday-cake"></i> {` `}
                              </Tooltip>
                              <Tooltip title="Hưỡng dẫn viên">
                                 <i className="fas fa-user-check"></i> {` `}
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
                              </Tooltip>
                           </div>
                        </div>
                     </div>
                     <div className="ht-info-tour-detail-price">
                        {size === "small" ? (
                           <></>
                        ) : (
                           <div className="mt-3 ht-text-price-tour-detail-root ml-1 mr-1">
                              <Text delete>
                                 <NumberFormat
                                    value={tour.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" VNĐ"}
                                 />
                              </Text>
                           </div>
                        )}

                        <div className="ht-text-price-tour-detail m-1">
                           <Tooltip
                              title={
                                 <NumberFormat
                                    value={tour.price * tour.sale * 0.01}
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
                                    tour.price - tour.price * tour.sale * 0.01
                                 }
                                 displayType={"text"}
                                 thousandSeparator={true}
                                 suffix={" VNĐ"}
                              />
                           </Tooltip>
                        </div>
                        <Link
                           to={{
                              pathname: `/book-tour/${tour.idTour}`,
                              state: {
                                 tour: tour
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
                                 <Button type="primary">ĐẶT NGAY</Button>
                              )}
                           </Tooltip>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
