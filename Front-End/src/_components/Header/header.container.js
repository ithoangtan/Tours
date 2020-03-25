import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../_actions/tour.actions";
import SearchEngineContainer from "../SearchEngine/searchEngine.container";
import { API_ENDPOINT } from "../../_constants/index.constants";
import NumberFormat from "react-number-format";
import { Statistic, Button, Tooltip, Tag } from "antd";

const { Countdown } = Statistic;

class HeaderContainer extends Component {
   constructor(params) {
      super(params);
      this.state = {
         size: 0
      };
   }

   componentDidMount() {
      this.setState({
         size: window.innerWidth > 767.98 ? "large" : "default"
      });
   }

   // Get list tour by time to show on carousel
   getListTourByTime = () => {
      const { listTour, listTourByTime, listImageTour } = this.props;
      let tours = listTourByTime.length ? listTourByTime : listTour.slice(0, 3);
      tours = tours.map(tour => {
         let listImageTourDetail = listImageTour.filter(
            imageTour => imageTour.idTour === tour.idTour
         );
         return { ...tour, images: listImageTourDetail };
      });
      return tours;
   };

   render() {
      const { size } = this.state;
      const carouselTours = this.getListTourByTime();
      return (
         <div className="ht-header">
            <div
               id="carousel-example-generic"
               className="carousel slide"
               data-ride="carousel"
            >
               <ol className="carousel-indicators">
                  {carouselTours.map((tour, index) => (
                     <li
                        data-target="#carousel-example-generic"
                        key={index}
                        data-slide-to={index}
                        className={!index ? "active" : ""}
                     />
                  ))}
               </ol>
               <div className="carousel-inner" role="listbox">
                  {carouselTours.length &&
                     carouselTours.map((tour, index) => (
                        <div
                           className={`carousel-item ${!index ? "active" : ""}`}
                           key={index}
                        >
                           <div
                              className="hero-wrap js-fullheight"
                              style={{
                                 backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.8),rgba(255, 255, 255, 0)),url(${API_ENDPOINT +
                                    tour.images[0]})`
                              }}
                              data-stellar-background-ratio="0.5"
                           >
                              <div className="overlay" />
                              <div className="container">
                                 <div
                                    className="row no-gutters slider-text js-fullheight align-items-top justify-content-end"
                                    data-scrollax-parent="true"
                                 >
                                    <div
                                       className="col-md-12 ftco-animate mt-5"
                                       data-scrollax=" properties: { translateY: '70%' }"
                                    >
                                       <h1
                                          className="mb-4 mt-5"
                                          data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                       >
                                          {tour.titleTour}
                                       </h1>

                                       <p
                                          className="mb-1 ht-header-descript"
                                          data-scrollax="properties: { translateY: '0%', opacity: 1 }"
                                       >
                                          {tour.describe}
                                          <Link
                                             to={`/tour-single/${tour.idTour}`}
                                             className="ht-slider-link"
                                          >
                                             xem thêm!
                                          </Link>
                                       </p>
                                       <div className="ht-display-flex-space-between-center ht-pd-t-2">
                                          <p className="ht-p-500 ht-no-p-m">
                                             <NumberFormat
                                                value={tour.price}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"Giá từ "}
                                                suffix={"Đ"}
                                             />
                                          </p>
                                          {tour.sale > 0 && (
                                             <div className="ht-header-sale ht-display-flex-center-center">
                                                <p className="ht-p-500">
                                                   <i className="fas fa-piggy-bank"></i>{" "}
                                                   {size === "large"
                                                      ? "Giảm ngay "
                                                      : ""}
                                                   <NumberFormat
                                                      value={(
                                                         tour.price *
                                                         tour.sale *
                                                         0.01
                                                      ).toFixed(1)}
                                                      displayType={"text"}
                                                      thousandSeparator={true}
                                                      suffix={"Đ"}
                                                   />
                                                </p>
                                             </div>
                                          )}
                                       </div>
                                       <div className="ht-display-flex-space-between-center ht-pd-t-1">
                                          <div className="ht-countdown-container ht-display-flex-center-center">
                                             <Countdown
                                                className="ht-countdown"
                                                value={tour.departureDay}
                                                format="D Ngày H Giờ m Phút s Giây"
                                             />
                                          </div>

                                          <Tooltip
                                             placement="bottom"
                                             title={
                                                <p>
                                                   <i className="fas fa-couch"></i>{" "}
                                                   còn 5 chỗ
                                                </p>
                                             }
                                          >
                                             <Button type="primary" size={size}>
                                                ĐẶT NGAY
                                             </Button>
                                          </Tooltip>
                                       </div>
                                       <div className="ht-header-tag-container ht-display-flex-start-center ht-mr-t-3">
                                          {tour.tags &&
                                             tour.tags
                                                .split(",")
                                                .map((tag, index) => (
                                                   <Tag
                                                      color="#87d068"
                                                      key={index}
                                                   >
                                                      {"# "}
                                                      {tag}
                                                   </Tag>
                                                ))}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
               </div>
               <a
                  className="carousel-control-prev area-hidden-left ht-header-slideshow"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon ht-carousel-control"
                     aria-hidden="true"
                  ></span>
                  <span className="sr-only ht-carousel-control">Previous</span>
               </a>
               <a
                  className="carousel-control-next area-hidden-right ht-header-slideshow"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="next"
               >
                  <span
                     className="carousel-control-next-icon ht-carousel-control"
                     aria-hidden="true"
                  ></span>
                  <span className="sr-only ht-carousel-control">Next</span>
               </a>
            </div>
            <SearchEngineContainer />
         </div>
      );
   }
}

HeaderContainer.propTypes = {
   tourAllActions: PropTypes.shape({
      fetchListTourRequest: PropTypes.func,
      fetchListTourImageRequest: PropTypes.func,
      fetchTourByTimeRequest: PropTypes.func
   }),
   listTour: PropTypes.array,
   listTourByTime: PropTypes.array,
   listImageTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTour: state.tour.listTour,
      listTourByTime: state.tour.listTourByTime,
      listImageTour: state.tour.listImageTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch)
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
