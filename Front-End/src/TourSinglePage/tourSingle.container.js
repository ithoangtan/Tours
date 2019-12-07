import React, { Component } from "react";

import { Link } from "react-router-dom";

import parseHtml from "html-react-parser";

import {
   Carousel,
   Typography,
   Rate,
   Icon,
   Tag,
   Collapse,
   Button,
   Checkbox
} from "antd";

import MoreTourSingle from "./moreTourSingle.container";
import TourDetailImg from "../TourPage/tourDetailImages";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const customPanelStyle = {
   background: "#f7f7f7",
   borderRadius: 4,
   marginBottom: 24,
   border: 0,
   overflow: "hidden"
};

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default class TourSingleContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }

   onChange(e) {
      // console.log(`checked = ${e.target.checked}`);
   }

   state = {
      value: 3
   };

   handleChange = value => {
      this.setState({ value });
   };

   renderImage() {
      const { listImageByIdTour } = this.props;

      let result = null;
      if (listImageByIdTour !== null && listImageByIdTour !== undefined)
         result = listImageByIdTour.map((imageTour, index) => {
            return (
               <TourDetailImg
                  {...this.props}
                  srcImage={imageTour.url}
                  key={index}
               />
            );
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

   render() {
      const { value } = this.state;
      const { tourById } = this.props;
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center pb-1">
                  <div className="col-md-12 heading-section ftco-animate">
                     <div className="row">
                        <div className="col-md-12 col-lg-6 ftco-animate">
                           <Carousel autoplay>{this.renderImage()}</Carousel>
                        </div>
                        <div className="col-md-12 col-lg-6 ftco-animate tour-single-title">
                           <div className="row">
                              <div className="col-md-12 col-lg-9">
                                 <Title
                                    level={
                                       tourById.titleTour !== undefined &&
                                       tourById.titleTour !== null &&
                                       tourById.titleTour.length < 30
                                          ? 3
                                          : 4
                                    }
                                 >
                                    {tourById.titleTour}
                                 </Title>
                                 <div>
                                    <Rate
                                       disabled
                                       allowHalf
                                       tooltips={desc}
                                       onChange={this.handleChange}
                                       value={value}
                                       character={<Icon type="star" />}
                                    />
                                    {value ? (
                                       <span className="ant-rate-text">
                                          {desc[value - 1]}
                                       </span>
                                    ) : (
                                       ""
                                    )}
                                 </div>
                              </div>
                              <div className="col-md-12 col-lg-3 text-right">
                                 <Title level={1}>
                                    $
                                    {tourById.price -
                                       tourById.price * tourById.sale * 0.01}
                                 </Title>
                                 <Text delete>${tourById.price}</Text>
                              </div>
                           </div>
                           <br />
                           <Tag color="#f50" width={"100%"}>
                              Khuyễn mãi {tourById.sale}% phí di chuyển{" "}
                           </Tag>
                           {/* <Title level={4}>Descriptions:</Title> */}
                           <Collapse
                              className="mt-3"
                              accordion
                              bordered={false}
                              defaultActiveKey={["0"]}
                              expandIcon={({ isActive }) => (
                                 <Icon
                                    type="caret-right"
                                    rotate={isActive ? 90 : 0}
                                 />
                              )}
                           >
                              <Panel
                                 header="Address:"
                                 key="1"
                                 style={customPanelStyle}
                              >
                                 <p>{tourById.address}</p>
                              </Panel>
                              <Panel
                                 header="Descriptions:"
                                 key="2"
                                 style={customPanelStyle}
                              >
                                 <p>{tourById.describe}</p>
                              </Panel>
                           </Collapse>
                           <div className="tour-single-action">
                              <Button
                                 type="secondary"
                                 icon="caret-left"
                                 size={"large"}
                              >
                                 <Link
                                    to={{
                                       pathname: "/tour"
                                    }}
                                 >
                                    MORE TOURS
                                 </Link>
                              </Button>
                              <Button
                                 type="primary"
                                 icon="shopping"
                                 size={"large"}
                              >
                                 BOOK NOW
                              </Button>
                              <Checkbox onChange={this.onChange}>
                                 Favorites
                              </Checkbox>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <br />
               <div className="row justify-content-center pb-1 pt-2 mt-3">
                  <div className="col-md-12 col-lg-8 heading-section ftco-animate">
                     <div className="row justify-content-center ftco-animate">
                        <Title level={3}>SCHEDULE DETAILS</Title>
                     </div>
                     <div className="ck-content">
                        {this.parseHTMLSchedule()}
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-4 heading-section ftco-animate">
                     <Title level={3} className="ftco-animate">
                        POPULAR TOURS
                     </Title>
                     <MoreTourSingle idImage={2} className="ftco-animate" />
                     <MoreTourSingle idImage={1} className="ftco-animate" />
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
