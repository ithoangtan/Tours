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
      rowsDescribe: 2,
      size: "default"
   };

   onChange = rowsDescribe => {
      this.setState({ rowsDescribe });
   };

   fetch = async () => {
      await funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   };

   componentWillMount() {
      this.setState({ size: window.innerWidth < 768.01 ? "small" : "default" });
   }
   componentDidMount() {
      this.fetch();
      if (!this.props.bookTour) this.props.loaded();
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
      const { tour, bookTour } = this.props;
      const timeDeparture = moment(tour.departureDay).format("LT");
      const dmy = moment(tour.departureDay).format("L");

      const day = dmy.substr(3, 2);
      const month = dmy.substr(0, 2);
      const year = dmy.substr(dmy.length - 2, 2);

      const totalNumberStar = tour.votes;
      const listServices = tour.services ? tour.services.split(",") : [];
      return (
         <div className="right-tour-detail-page mb-4 ftco-animate ht-tour-detail-container">
            <div className="ht-day-scroll-auto">
               {/* Chỗ này tách ngày ra bằng moment.js để thêm vào 2 nội dung ở dưới */}
               <div className="ht-f-day">{`${day}`}</div>
               <div className="ht-f-date">{`${month}/${year}`}</div>
            </div>
            <div
               className="tour-content"
               style={bookTour ? { fontSize: "1.1rem" } : {}}
            >
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
                        {bookTour ? (
                           <h3 className="ht-detail-tour-title">
                              {tour.titleTour}
                           </h3>
                        ) : (
                           <h4 className="ht-detail-tour-title">
                              {tour.titleTour}
                           </h4>
                        )}
                     </Link>
                     <div className="ht-d-flex-start-center">
                        <Rate
                           allowHalf
                           disabled
                           value={totalNumberStar}
                           size="small"
                           className="ht-no-p-m"
                           character={<Icon type="star" />}
                        ></Rate>
                        <p className="ht-rate-detail-tour pt-1">
                           {size === "small" ? (
                              <>
                                 (<strong>{totalNumberStar}</strong>)
                              </>
                           ) : (
                              <>
                                 <strong> {totalNumberStar} </strong>
                                 {/* với <strong>{`xx00`} </strong>đánh giá{" "} */}
                              </>
                           )}
                        </p>
                     </div>
                     {tour.sale > 0 && (
                        <div className="mt-1">
                           <i className="fas fa-tags"> </i>{" "}
                           {/* Tag color reference at https://ant.design/docs/spec/colors#header  */}
                           <Tag color="#fff1f0" className="ht-tour-detail-tag">
                              {tour.sale}% sale
                           </Tag>
                        </div>
                     )}
                     <div className="mt-1">
                        <p className="ht-info-tour-detail">
                           <i className="far fa-calendar"></i> Số ngày:{" "}
                           {tour.vocationTime}
                        </p>
                        <p className="ht-info-tour-detail">
                           <i className="far fa-clock"></i> Khởi hành:{" "}
                           {moment(tour.departureDay).format(
                              INDEX_CONSTANTS.DATE_TIME_FORMAT.DATE_TIME
                           )}
                        </p>
                     </div>
                     <Paragraph
                        ellipsis={{
                           rows: this.state.rowsDescribe,
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
                           <i className="fas fa-map-marked-alt"></i> Từ:{" "}
                           {tour.departureAddress}
                        </div>
                        <div className="m-1">
                           <div className="">
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
                     </div>
                     <div className="ht-info-tour-detail-price">
                        {size === "small" || tour.sale == 0 ? (
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
                           {bookTour ? (
                              <></>
                           ) : (
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
                           )}
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
