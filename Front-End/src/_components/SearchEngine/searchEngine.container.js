import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Input, DatePicker, Select, Button, Icon, AutoComplete } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
const { Option } = Select;
const { OptGroup } = AutoComplete;
const OptionComplete = AutoComplete.Option;
const dateFormat = "DD/MM/YYYY";

const dataSourceAll = [
   {
      title: "Trùm Tour",
      children: [
         {
            title: "Tết Nguyên Đán",
            count: 100
         },
         {
            title: "Năm mới 2020",
            count: 1060
         },
         {
            title: "Mùa hoa anh đào nở",
            count: 2
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
            title: "Hạ Long bay",
            count: 300
         }
      ]
   },
   {
      title: "Địa chỉ",
      children: [
         {
            title: "Thành phố Đà Lạt",
            count: 150
         },

         {
            title: "Tokyo",
            count: 254
         }
      ]
   }
];

export default class SearchEngineContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         keySearch: "",
         dayStart: "",
         dayEnd: "",
         conditional: "all",
         dataSource: [],
         dataSourceAll: dataSourceAll
      };
   }

   //Auto complete search key

   handleSearch = value => {
      this.setState({
         dataSource: value ? this.searchResult(value) : []
      });
   };

   onSelect(value) {
      console.log("onSelect", value);
   }

   getRandomInt(max, min = 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
   }

   searchResult(query) {
      return new Array(this.getRandomInt(5))
         .join(".")
         .split(".")
         .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: this.getRandomInt(200, 100)
         }));
   }

   renderOption(item) {
      return (
         <Option key={item.category} text={item.category}>
            <div className="global-search-item">
               <span className="global-search-item-desc">
                  Found {item.query} on{" "}
                  <a
                     href={`https://s.taobao.com/search?q=${item.query}`}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     {" "}
                     {item.category}
                  </a>
               </span>
               <span className="global-search-item-count">
                  {" "}
                  {item.count} results
               </span>
            </div>
         </Option>
      );
   }

   getCurrentDay = () => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + "/" + mm + "/" + yyyy;
      return today;
   };

   onChangeConditional = value => {
      console.log(value);

      this.setState({ conditional: value });
   };
   onChangeKeySearch = value => {
      this.setState({ keySearch: value });
   };
   onChangeDay = moment => {
      if (moment[0] !== undefined) {
         const dayStart = moment[0].format("YYYY-MM-DD");
         const dayEnd = moment[1].format("YYYY-MM-DD");

         //day start
         this.setState({ dayStart });
         //day end
         this.setState({ dayEnd });
      }
   };

   onBlur = () => {
      console.log("blur");
   };

   onFocus = () => {
      console.log("focus");
   };

   onSearch = event => {
      event.preventDefault();
   };

   renderTitle(title) {
      return (
         <span>
            {title}
            <Link style={{ float: "right" }} to="/tour">
               more
            </Link>
         </span>
      );
   }

   options() {
      let options = this.state.dataSourceAll
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
               <Link to="/tour">View all results</Link>
            </Option>
         ]);
      return options;
   }

   disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf("day");
   }

   render() {
      const { dataSource } = this.state;
      return (
         <section className="ftco-section ftco-no-pb ftco-no-pt">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="search-wrap-1 ftco-animate p-4">
                        <form action="#" className="search-property-1">
                           <div className="row">
                              <div className="col-lg-4">
                                 <div className="form-group">
                                    <label htmlFor="#">
                                       Điểm đến của bạn là:
                                    </label>
                                    <div className="certain-category-search-wrapperht-width100">
                                       <AutoComplete
                                          className="certain-category-search ht-width100"
                                          dropdownClassName="certain-category-search-dropdown"
                                          size="large"
                                          style={{ width: "100%" }}
                                          dataSource={
                                             this.state.keySearch === "" &&
                                             this.state.conditional === "all"
                                                ? this.options()
                                                : dataSource.map(
                                                     this.renderOption
                                                  )
                                          }
                                          onSelect={this.onSelect}
                                          onSearch={this.handleSearch}
                                          dropdownMatchSelectWidth={false}
                                          placeholder="Nhấp zô??? Có gợi ý cho bạn nè!"
                                          optionLabelProp="value"
                                          onChange={this.onChangeKeySearch}
                                       >
                                          <Input
                                             className="ht-width100"
                                             suffix={
                                                <Icon
                                                   type="question-circle"
                                                   theme="filled"
                                                   className="certain-category-icon"
                                                />
                                             }
                                          />
                                       </AutoComplete>
                                    </div>
                                 </div>
                              </div>

                              <div className="col-lg-3 ">
                                 <div className="form-group">
                                    <label htmlFor="#">
                                       Bạn định đi khi nào?
                                    </label>
                                    <div className="form-field">
                                       <RangePicker
                                          size={"large"}
                                          className="ht-width100"
                                          disabledDate={this.disabledDate}
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
                                          onChange={this.onChangeDay}
                                          format={dateFormat}
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-2">
                                 <div className="form-group">
                                    <label htmlFor="#">Search theo:</label>
                                    <div className="form-field">
                                       <div className="select-wrap">
                                          <div className="icon">
                                             <span className="ion-ios-arrow-down" />
                                          </div>
                                          <Select
                                             showSearch
                                             size={"large"}
                                             defaultValue="all"
                                             optionFilterProp="children"
                                             onChange={this.onChangeConditional}
                                             onFocus={this.onFocus}
                                             onBlur={this.onBlur}
                                             filterOption={(input, option) =>
                                                option.props.children
                                                   .toLowerCase()
                                                   .indexOf(
                                                      input.toLowerCase()
                                                   ) >= 0
                                             }
                                          >
                                             <Option value={"all"}>
                                                Tất cả
                                             </Option>
                                             <Option value={"name"}>
                                                Tên của Tour
                                             </Option>
                                             <Option value={"landmark"}>
                                                Địa danh
                                             </Option>
                                             <Option value={"address"}>
                                                Địa chỉ
                                             </Option>
                                             <Option value={"type"}>
                                                Loại tour
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
                              <div className="col-lg-3 align-items-center">
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
                                          onClick={this.onSearch}
                                       >
                                          Tìm kiếm Tour nào
                                       </Button>
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
