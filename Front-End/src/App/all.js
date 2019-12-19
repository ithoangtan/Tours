import React, { Component } from "react";
import { Icon, Button, Input, AutoComplete } from "antd";

export default class all extends Component {
   render() {
      return <Complete></Complete>;
   }
}

const { Option } = AutoComplete;

class Complete extends React.Component {
   state = {
      dataSource: []
   };

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
                  Found {item.query} on
                  <a
                     href={`https://s.taobao.com/search?q=${item.query}`}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     {item.category}
                  </a>
               </span>
               <span className="global-search-item-count">
                  {item.count} results
               </span>
            </div>
         </Option>
      );
   }

   render() {
      const { dataSource } = this.state;
      return (
         <div className="global-search-wrapper" style={{ width: 300 }}>
            <AutoComplete
               className="global-search"
               size="large"
               style={{ width: "100%" }}
               dataSource={dataSource.map(this.renderOption)}
               onSelect={this.onSelect}
               onSearch={this.handleSearch}
               placeholder="input here"
               optionLabelProp="text"
            >
               <Input
                  suffix={
                     <Button
                        className="search-btn"
                        style={{ marginRight: -12 }}
                        size="large"
                        type="primary"
                     >
                        <Icon type="search" />
                     </Button>
                  }
               />
            </AutoComplete>
         </div>
      );
   }
}
