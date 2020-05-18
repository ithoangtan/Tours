import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "../_actions/tour.actions";

import TourDetailContainer from "./tourDetail.container";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

import { Typography, Checkbox, Spin, } from "antd";

const { Title } = Typography;

class TourContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         haveData: false,
         listTour: [],
         loading: true,
         size: "large",
      };
   }

   fetch = async () => {
      const { tourAllActions } = this.props;
      const {
         fetchListTourRequest,
         fetchListTourImageRequest,
      } = tourAllActions;
      await fetchListTourRequest();
      await fetchListTourImageRequest();
   };

   componentWillMount() {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
      });
      this.fetch();
      const { listTour } = this.props;
      this.setState({ size: window.innerWidth > 757.98 ? "default" : "small" });
      this.setState({ listTour, haveData: true });
   }
   loaded = () => {
      this.setState((props) => {
         return {
            loading: false,
         };
      });
   };

   componentDidUpdate() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
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

      if (this.state.haveData && listTours.length > 0) {
         result = listTours.map((tour, index) => {
            // Cái đầu tiên thì là cái này 
            return (
               <TourDetailContainer
                  {...this.props}
                  tour={tour}
                  key={index}
                  bookTour={false}
                  listImageTour={listImageTour.filter(
                     (imageTour) => imageTour.idTour === tour.idTour
                  )}
                  loaded={this.loaded}
               />
            );

            // Những cái tiếp theo là cái khác như bảng đơn giản trong link:
            // https://tiki.vn/sales/order/history?src=header_my_account 
         });
      } else {
         result = (
            <div className="ht-khong-tim-thay-du-lieu">
               <Title level={3}> Chưa có dữ liệu phù hợp</Title>
            </div>
         );
      }
      return result;
   };

   render() {
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row ftco-animate">
                  <div className="col-md-12 col-lg-1"></div>
                  <div className="col-md-12 col-lg-10 ftco-animate right-tour-page">
                     {/* Rendder TOURS */}
                     <div className="row justify-content-center pb-1">
                        <div className="col-md-12 ftco-animate d-flex ht-info-container-tour-page">
                           <h4 className="mb-2 mt-2 ml-1">
                              Tour đã đặt
                           </h4>

                        </div>
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
   }),
   listTour: PropTypes.array,
   listImageTour: PropTypes.array,
};

const mapStateToProps = (state) => {
   return {
      listTour: state.tour.listTour,
      listImageTour: state.tour.listImageTour,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TourContainer);