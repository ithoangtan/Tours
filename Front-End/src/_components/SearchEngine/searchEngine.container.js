import React, { Component } from "react";

import { Input, DatePicker, Select, Button, Icon, AutoComplete } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
const { Option } = Select;
const { OptGroup } = AutoComplete;
const OptionComplete = AutoComplete.Option;
const dateFormat = "DD/MM/YYYY";

const dataSource = [
   {
      title: "Tên Tour",
      children: [
         {
            title: "Cặp đôi",
            count: 100
         },
         {
            title: "Gia đình",
            count: 1060
         }
      ]
   },
   {
      title: "Địa danh",
      children: [
         {
            title: "Thung lũng tình yêu",
            count: 601
         },
         {
            title: "Hạ Long Bay",
            count: 300
         }
      ]
   },
   {
      title: "Tỉnh Thành phố",
      children: [
         {
            title: "Đà Lạt",
            count: 10
         },
         {
            title: "Sa Pa",
            count: 2
         }
      ]
   }
];

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

   renderTitle(title) {
      return (
         <span>
            {title}
            <a
               style={{ float: "right" }}
               href="https://www.google.com/search?q=antd"
               target="_blank"
               rel="noopener noreferrer"
            >
               more
            </a>
         </span>
      );
   }

   options() {
      let options = dataSource
         .map(group => (
            <OptGroup key={group.title} label={this.renderTitle(group.title)}>
               {group.children.map(opt => (
                  <OptionComplete key={opt.title} value={opt.title}>
                     {opt.title}
                     <span className="certain-search-item-count">
                        {opt.count} people
                     </span>
                  </OptionComplete>
               ))}
            </OptGroup>
         ))
         .concat([
            <Option disabled key="all" className="show-all">
               <a
                  href="https://www.google.com/search?q=antd"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  View all results
               </a>
            </Option>
         ]);
      return options;
   }

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
                                    <label htmlFor="#">
                                       Điểm đến của bạn là:
                                    </label>
                                    <div className="certain-category-search-wrapperht-width100">
                                       <AutoComplete
                                          className="certain-category-search ht-width100"
                                          dropdownClassName="certain-category-search-dropdown"
                                          dropdownMatchSelectWidth={false}
                                          dropdownStyle={{ width: 300 }}
                                          size="large"
                                          dataSource={this.options()}
                                          placeholder="Nhấp zô! Gợi ý cho bạn nè:"
                                          optionLabelProp="value"
                                       >
                                          <Input
                                             className="ht-width100"
                                             suffix={
                                                <Icon
                                                   type="search"
                                                   className="certain-category-icon"
                                                />
                                             }
                                          />
                                       </AutoComplete>
                                    </div>
                                    {/* <div className="form-field">
                                       <div className="icon">
                                          <span className="ion-ios-search" />
                                       </div>
                                       <Search
                                          placeholder="input search text"
                                          onSearch={value => console.log(value)}
                                          size={"large"}
                                          // style={{ width: 200 }}
                                       /> */}
                                    {/* <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Search place"
                                       /> */}
                                    {/* </div> */}
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
                                    <label htmlFor="#">
                                       Bạn định đi khi nào?
                                    </label>
                                    <div className="form-field">
                                       <RangePicker
                                          size={"large"}
                                          className="ht-width100"
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
                                    <label htmlFor="#">
                                       Bạn có khoản bao nhiêu?
                                    </label>
                                    <div className="form-field">
                                       <div className="select-wrap">
                                          <div className="icon">
                                             <span className="ion-ios-arrow-down" />
                                          </div>
                                          <Select
                                             showSearch
                                             size={"large"}
                                             placeholder="Giá cả của tour"
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
                                             <Option value={2000000}>
                                                2,000,000 VNĐ
                                             </Option>
                                             <Option value={5000000}>
                                                5,000,000 VNĐ
                                             </Option>
                                             <Option value={8000000}>
                                                8,000,000 VNĐ
                                             </Option>
                                             <Option value={10000000}>
                                                10,000,000 VNĐ
                                             </Option>
                                             <Option value={20000000}>
                                                20,000,000 VNĐ
                                             </Option>
                                             <Option value={0}>
                                                Không thành vấn đề (^_^)
                                             </Option>
                                          </Select>
                                          <select
                                             name="limitPrice"
                                             id="limitPrice"
                                             className="form-control"
                                          ></select>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg align-items-center">
                                 <div className="form-group">
                                    <label htmlFor="#">
                                       Bạn đã sẵn sàng chưa?
                                    </label>
                                    <div className="form-field">
                                       <Button
                                          type="primary"
                                          icon="search"
                                          size={"large"}
                                          block
                                       >
                                          Tìm kiếm Tour nào
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
