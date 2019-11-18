import React, { Component } from "react";

import { Link } from "react-router-dom";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

import { Typography, Rate, Checkbox, Carousel, Tag, Button } from "antd";

const { Text, Title, Paragraph } = Typography;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
   "Apple",
   "Pear",
   "Orange",
   "something1",
   "something2",
   "something3"
];
const defaultCheckedList = ["Apple"];

export default class TourContainer extends Component {
   state = {
      value: 1,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false
   };

   handleChange = value => {
      this.setState({ value });
   };

   onChange = checkedList => {
      this.setState({
         checkedList,
         indeterminate:
            !!checkedList.length && checkedList.length < plainOptions.length,
         checkAll: checkedList.length === plainOptions.length
      });
   };

   onCheckAllChange = e => {
      this.setState({
         checkedList: e.target.checked ? plainOptions : [],
         indeterminate: false,
         checkAll: e.target.checked
      });
   };

   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }
   render() {
      const { value } = this.state;
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center pb-1">
                  <div className="col-md-12 heading-section text-center ftco-animate">
                     <h2 className="mb-4">All tours</h2>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 col-lg-3 ftco-animate left-tour-page">
                     <div className="">
                        <Title level={4}>Tour Class</Title>
                        <span>
                           <Rate
                              tooltips={desc}
                              onChange={this.handleChange}
                              value={value}
                           />
                           {value ? (
                              <span className="ant-rate-text">
                                 {desc[value - 1]}
                              </span>
                           ) : (
                              ""
                           )}
                        </span>
                     </div>
                     <div className="">
                        <Title level={4}>Price per day</Title>
                        <div>
                           <div
                              style={{
                                 borderBottom: "1px solid #E9E9E9"
                              }}
                              className="mb-1 pb-1"
                           >
                              <Checkbox
                                 indeterminate={this.state.indeterminate}
                                 onChange={this.onCheckAllChange}
                                 checked={this.state.checkAll}
                              >
                                 Check all
                              </Checkbox>
                           </div>
                           <CheckboxGroup
                              className="check-group-tour-left"
                              options={plainOptions}
                              value={this.state.checkedList}
                              onChange={this.onChange}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-9 ftco-animate right-tour-page">
                     <div className="right-tour-detail-page mt-5">
                        <div className="tour-content">
                           <div className="row justify-conten-center">
                              <div className="col-md-12 col-lg-4 ftco-animate">
                                 <Link to="/tour-single">
                                    <Carousel autoplay>
                                       <div>
                                          <img
                                             alt="notFound"
                                             src="./images/tour-1.jpg"
                                             className="img-tour"
                                          />
                                       </div>
                                       <div>
                                          <img
                                             alt="notFound"
                                             src="./images/tour-2.jpg"
                                             className="img-tour"
                                          />
                                       </div>
                                       <div>
                                          <img
                                             alt="notFound"
                                             src="./images/tour-3.jpg"
                                             className="img-tour"
                                          />
                                       </div>
                                       <div>
                                          <img
                                             alt="notFound"
                                             src="./images/tour-4.jpg"
                                             className="img-tour"
                                          />
                                       </div>
                                    </Carousel>
                                 </Link>
                              </div>
                              <div className="col-md-12 col-lg-5 ftco-animate">
                                 <Link to="tour-single">
                                    <Title level={4}>
                                       Name toursasdl alskdja sd
                                    </Title>
                                 </Link>
                                 <Rate disabled defaultValue={2} />
                                 <br />
                                 <Paragraph className="mt-1" ellipsis>
                                    Dont know write anythingDont know write
                                    anythingDont know write anythingDont know
                                    write anythingDont know write anythingDont
                                    know write anything
                                 </Paragraph>
                                 <div className="mt-2">
                                    <Tag color="#f50">
                                       Khuyễn mãi miễn phí 50% luôn á nè
                                    </Tag>
                                 </div>
                                 <div className="mt-2">
                                    <Button type="dashed">More</Button>
                                 </div>
                              </div>
                              <div className="col-md-12 col-lg-3 ftco-animate right-detail-tour">
                                 <div className="mt-2">
                                    <Tag color="#87d068">
                                       Nhiều người đi nhất
                                    </Tag>
                                 </div>
                                 <div className="mt-1">
                                    <Text>(233) Reviews</Text>
                                 </div>
                                 <div className="mt-1 text-price-tour-detail">
                                    $140
                                 </div>
                                 <div className="mt-1">
                                    <Text delete>$70</Text>
                                 </div>
                                 <div>
                                    <Button type="primary">BOOK NOW</Button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
