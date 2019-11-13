import React, { Component } from "react";

import { Input, DatePicker, Select, Button } from "antd";
import moment from "moment";
const { Search } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
export default class SearchEngineContainer extends Component {
   getCurrentDay = () => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + "/" + mm + "/" + yyyy;
      return today;
   };

   onChange = value => {
      console.log(`selected ${value}`);
   };

   onBlur = () => {
      console.log("blur");
   };

   onFocus = () => {
      console.log("focus");
   };

   onSearch = val => {
      console.log("search:", val);
   };

   render() {
      return (
         <section className="ftco-section ftco-no-pb ftco-no-pt">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="search-wrap-1 ftco-animate p-4">
                        <form action="#" className="search-property-1">
                           <div className="row">
                              <div className="col-lg ">
                                 <div className="form-group">
                                    <label htmlFor="#">Destination</label>
                                    <div className="form-field">
                                       <div className="icon">
                                          <span className="ion-ios-search" />
                                       </div>
                                       <Search
                                          placeholder="input search text"
                                          onSearch={value => console.log(value)}
                                          size={"large"}
                                          // style={{ width: 200 }}
                                       />
                                       {/* <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Search place"
                                       /> */}
                                    </div>
                                 </div>
                              </div>
                              {/* <div className="col-lg align-items-end">
                                 <div className="form-group">
                                    <label htmlFor="#">Check-in date</label>
                                    <div className="form-field">
                                       <div className="icon">
                                          <span className="ion-ios-calendar" />
                                       </div>
                                       <input
                                          type="text"
                                          className="form-control checkin_date"
                                          placeholder="Check In Date"
                                       />
                                    </div>
                                 </div>
                              </div> */}
                              <div className="col-lg ">
                                 <div className="form-group">
                                    <label htmlFor="#">Check-out date</label>
                                    <div className="form-field">
                                       <RangePicker
                                          size={"large"}
                                          defaultValue={[
                                             moment(
                                                this.getCurrentDay(),
                                                dateFormat
                                             ),
                                             moment(
                                                this.getCurrentDay(),
                                                dateFormat
                                             )
                                          ]}
                                          format={dateFormat}
                                       />
                                       {/* <input
                                          type="text"
                                          className="form-control checkout_date"
                                          placeholder="Check Out Date"
                                       /> */}
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg">
                                 <div className="form-group">
                                    <label htmlFor="#">Price Limit</label>
                                    <div className="form-field">
                                       <div className="select-wrap">
                                          <div className="icon">
                                             <span className="ion-ios-arrow-down" />
                                          </div>
                                          <Select
                                             showSearch
                                             size={"large"}
                                             placeholder="Select a Price Limit"
                                             optionFilterProp="children"
                                             onChange={this.onChange}
                                             onFocus={this.onFocus}
                                             onBlur={this.onBlur}
                                             onSearch={this.onSearch}
                                             filterOption={(input, option) =>
                                                option.props.children
                                                   .toLowerCase()
                                                   .indexOf(
                                                      input.toLowerCase()
                                                   ) >= 0
                                             }
                                          >
                                             <Option value={5000}>
                                                $5,000
                                             </Option>
                                             <Option value={10000}>
                                                $10,000
                                             </Option>
                                             <Option value={50000}>
                                                $50,000
                                             </Option>
                                             <Option value={100000}>
                                                $100,000
                                             </Option>
                                             <Option value={200000}>
                                                $200,000
                                             </Option>
                                             <Option value={300000}>
                                                $300,000
                                             </Option>
                                             <Option value={400000}>
                                                $400,000
                                             </Option>
                                             <Option value={500000}>
                                                $500,000
                                             </Option>
                                             <Option value={600000}>
                                                $600,000
                                             </Option>
                                             <Option value={700000}>
                                                $700,000
                                             </Option>
                                             <Option value={800000}>
                                                $800,000
                                             </Option>
                                             <Option value={900000}>
                                                $900,000
                                             </Option>
                                             <Option value={1000000}>
                                                $1,000,000
                                             </Option>
                                             <Option value={2000000}>
                                                $2,000,000
                                             </Option>
                                          </Select>
                                          <select
                                             name
                                             id
                                             className="form-control"
                                          ></select>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg align-items-center">
                                 <div className="form-group">
                                    <label htmlFor="#">Are you ready?</label>
                                    <div className="form-field">
                                       <Button
                                          type="primary"
                                          icon="search"
                                          size={"large"}
                                          block
                                       >
                                          Search Your Tours
                                       </Button>
                                       {/* <input
                                          type="submit"
                                          defaultValue="Search"
                                          className="form-control btn btn-primary"
                                       /> */}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
