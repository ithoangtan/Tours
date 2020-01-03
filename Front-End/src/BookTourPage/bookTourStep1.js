import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Carousel, Rate, Tag, Button, Typography } from "antd";

import TourDetailImages from "../TourPage/tourDetailImages";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

const { Text, Title, Paragraph } = Typography;

export default class bookTourStep1 extends Component {
   //step 1: check product
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
   componentDidUpdate() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }
   render() {
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
                           {tourById.price} VNĐ
                        </div>
                        <div className="mt-1">
                           <Text delete>
                              {tourById.price -
                                 tourById.price * tourById.sale * 0.01}{" "}
                              VNĐ
                           </Text>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
