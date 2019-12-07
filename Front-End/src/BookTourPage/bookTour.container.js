import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Carousel, Rate, Tag, Button, Steps, message, Typography } from "antd";

import TourDetailImages from "../TourPage/tourDetailImages";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

const { Text, Title, Paragraph } = Typography;

const { Step } = Steps;

const stepStyle = {
   marginBottom: 60,
   boxShadow: "0px -1px 0 0 #e8e8e8 inset"
};
export default class BookTourContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         current: 0
      };
   }
   next() {
      const current = this.state.current + 1;
      this.setState({ current });
   }
   prev() {
      const current = this.state.current - 1;
      this.setState({ current });
   }
   onChange = current => {
      this.setState({ current });
   };

   componentDidUpdate() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }

   renderImage() {
      const { listImageByIdTour } = this.props;
      let result = null;
      if (listImageByIdTour !== undefined) {
         result = listImageByIdTour.map((imageTour, index) => {
            return (
               <TourDetailImages
                  {...this.props}
                  srcImage={imageTour.url}
                  key={index}
               />
            );
         });
      }
      return result;
   }
   orderList = () => {
      const { tourById } = this.props;

      return (
         <div className="ht-book-product-list">
            <div className="right-tour-detail-page mb-4">
               <div
                  className="tour-content"
                  style={{ margin: "10px 10px 0px 10px" }}
               >
                  <div className="row justify-conten-center">
                     <div className="col-md-12 col-lg-4 ftco-animate ht-boder-radius-1">
                        {/* Render Image of Tour */}
                        <Link
                           to={{
                              pathname: `/tour-single/${tourById.idTour}`,
                              state: {
                                 tour: tourById
                              }
                           }}
                        >
                           <Carousel autoplay>{this.renderImage()}</Carousel>
                        </Link>
                        {/* end Render Image of Tour */}
                     </div>
                     <div className="col-md-12 col-lg-5 ftco-animate">
                        <Link
                           to={{
                              pathname: `/tour-single/${tourById.idTour}`,
                              state: {
                                 tour: tourById
                              }
                           }}
                        >
                           <Title level={4}>{tourById.titleTour}</Title>
                        </Link>
                        <Rate disabled defaultValue={4} />
                        <br />
                        <Paragraph className="mt-2" ellipsis>
                           {tourById.describe}
                        </Paragraph>
                        <div className="">
                           <Tag color="#f50">
                              Khuyễn mãi miễn phí {tourById.sale}% luôn á nè
                           </Tag>
                           <Button type="dashed">More</Button>
                        </div>
                        <div className="mt-2">
                           <Paragraph className="mt-2" ellipsis>
                              Time: {tourById.vocationTime}
                           </Paragraph>
                           <Paragraph className="mt-2" ellipsis>
                              Deparure: {tourById.departureDay}
                           </Paragraph>
                        </div>
                     </div>
                     <div className="col-md-12 col-lg-3 ftco-animate right-detail-tour">
                        <div className="mt-2">
                           <Tag color="#87d068">Nhiều người đi nhất</Tag>
                        </div>
                        <div className="mt-1">
                           <Text>(233) Reviews</Text>
                        </div>
                        <div className="mt-1 text-price-tour-detail-book">
                           ${tourById.price}
                        </div>
                        <div className="mt-1">
                           <Text delete>
                              $
                              {tourById.price -
                                 tourById.price * tourById.sale * 0.01}
                           </Text>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   };

   orderInfo = () => {
      return (
         <div className="ht-book-form-information">
            <p>"Nhập hông tin cần thiết và thanh toán cần thiết"</p>
         </div>
      );
   };

   orderFinish = () => {
      return (
         <div className="ht-book-finish">
            <p>
               "Thông báo thành công và gủi mail đến 2 loại người dùng website"
            </p>
         </div>
      );
   };

   statusOrder = current => {
      let status = "";
      if (current === 1) status = "";
      if (current === 2) status = "";
      return status;
   };

   render() {
      const { current } = this.state;

      const steps = [
         {
            title: "Check your order",
            status: this.statusOrder(current),
            description: "00:00:10",
            content: this.orderList()
         },
         {
            title: "Your information",
            status: this.statusOrder(current),
            description: "00:01:00",
            content: this.orderInfo()
         },
         {
            title: "Waiting confirmation",
            // subTitle: "00:05:00",
            status: this.statusOrder(current),
            description: "00:05:00",
            content: this.orderFinish()
         }
      ];
      return (
         <div className="book-tour-container">
            <Steps
               current={current}
               type="navigation"
               size="small"
               onChange={this.onChange}
               style={stepStyle}
            >
               {steps.map(item => (
                  <Step
                     key={item.title}
                     title={item.title}
                     subTitle={item.subTitle}
                     status={item.status}
                     description={item.description}
                  />
               ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
               {current > 0 && (
                  <Button
                     style={{ marginRight: 8 }}
                     onClick={() => this.prev()}
                  >
                     Previous
                  </Button>
               )}
               {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => this.next()}>
                     Next
                  </Button>
               )}
               {current === steps.length - 1 && (
                  <Button
                     type="primary"
                     onClick={() => message.success("Processing complete!")}
                  >
                     Done
                  </Button>
               )}
            </div>
         </div>
      );
   }
}
