import React, { Component } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "../_actions/tour.actions";
import * as orderActions from "../_actions/order.actions";

import TourDetailContainer from "./tourDetail.container";
import TableFirstOrder from "./tableFirstOrder";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

import { Typography, Spin, Table, Tag, Button } from "antd";
import moment from "moment";
import NumberFormat from "react-number-format";

const { Column } = Table;
const { Title } = Typography;

class OrderContainer extends Component {
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
      const {
         tourAllActions,
         orderAllActions,
         listTour,
         emailOrder,
      } = this.props;
      const {
         fetchListTourRequest,
         fetchListTourImageRequest,
      } = tourAllActions;
      const { fetchOrderByEmailRequest } = orderAllActions;
      if (emailOrder) {
         await fetchOrderByEmailRequest(emailOrder);
         if (!listTour.length) {
            await fetchListTourImageRequest();
            await fetchListTourRequest();
         }
      }
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

   renderOrders = () => {
      let result = null;
      const data = this.props.match.params;
      const { listTourSearch, listImageTour } = this.props;
      const { listTour, listOrder } = this.props;

      let listTours = [];
      let listOrders = [...listOrder];
      if (data.keySearch !== null && data.keySearch !== undefined) {
         listTours = [...listTourSearch];
      } else {
         listTours = [...listTour];
      }

      if (
         this.state.haveData &&
         listTours.length > 0 &&
         listOrders.length > 0
      ) {
         const firstTourOrder = listTours.find(
            (tour) => tour.idTour === listOrders[0].idTour
         );
         listOrders.shift();
         result = (
            <>
               <TableFirstOrder order={listOrder[0]} />
               <TourDetailContainer
                  {...this.props}
                  tour={firstTourOrder}
                  bookTour={false}
                  listImageTour={listImageTour.filter(
                     (imageTour) => imageTour.idTour === firstTourOrder.idTour
                  )}
                  ordered={listOrder[0]}
                  loaded={this.loaded}
                  departureDay={listOrder[0].departureDay}
               />
               <Table dataSource={listOrders} bordered>
                  <Column
                     title="ID Order"
                     dataIndex="idOrder"
                     key="idOrder"
                     width={75}
                  />
                  <Column title="PIN" dataIndex="PIN" key="PIN" width={150} />
                  <Column
                     title="Tên tour"
                     dataIndex="titleTour"
                     key="titleTour"
                     ellipsis
                     render={(titleTour, row) => (
                        <Link to={`/tour-single/${row.idTour}`}>
                           {titleTour}
                        </Link>
                     )}
                  />
                  <Column
                     title="Ngày mua"
                     dataIndex="dateAdded"
                     key="dateAdded"
                     width={200}
                     render={(dateAdded) =>
                        moment(dateAdded).format(
                           INDEX_CONSTANTS.DATE_TIME_FORMAT.DATE_TIME
                        )
                     }
                  />
                  <Column
                     title="Tổng tiền"
                     dataIndex="totalPrice"
                     key="totalPrice"
                     width={150}
                     render={(totalPrice) => (
                        <NumberFormat
                           value={totalPrice}
                           displayType={"text"}
                           thousandSeparator={true}
                           suffix={" VNĐ"}
                        />
                     )}
                  />
                  <Column
                     title="Trạng thái"
                     dataIndex="status"
                     key="status"
                     align="center"
                     width={80}
                     render={(status) => <Tag color="green">{status}</Tag>}
                  />
               </Table>
            </>
         );
      } else {
         if (this.state.loading) {
            this.setState({ loading: false });
         }
         result = (
            <div className="ht-khong-tim-thay-du-lieu">
               <Button type="primary" size="large">
                  <Link to="/">Xem tour mới</Link>
               </Button>
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
                           <h4 className="mb-2 mt-2 ml-1">Tour đã đặt</h4>
                        </div>
                     </div>

                     <div className="ht-list-tour-container">
                        <Spin
                           tip="loading... data"
                           spinning={this.state.loading}
                        >
                           {this.renderOrders()}
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
OrderContainer.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchListTourRequest: PropTypes.func,
      fetchListTourSearchRequest: PropTypes.func,
      fetchListTourImageRequest: PropTypes.func,
   }),
   orderAllActions: PropTypes.shape({
      fetchOrderByEmailRequest: PropTypes.func,
   }),
   listTour: PropTypes.array,
   listImageTour: PropTypes.array,
   listOrder: PropTypes.array,
   emailOrder: PropTypes.string,
};

const mapStateToProps = (state) => {
   return {
      listTour: state.tour.listTour,
      listImageTour: state.tour.listImageTour,
      listOrder: state.order.listOrder,
      emailOrder: state.order.emailOrder,
      auth: state.auth,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch),
      orderAllActions: bindActionCreators(orderActions, dispatch),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
