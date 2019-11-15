import React, { Component } from "react";

import Highlighter from "react-highlight-words";
import reqwest from "reqwest";
import { Resizable } from "react-resizable";

import { Table, Icon, Divider, Button, Input, Typography } from "antd";

import TableGallery from "./table.gallery";

const { Paragraph } = Typography;

const data = [];
let i2 = 100;
for (let i = 1; i <= i2; i++) {
   data.push({
      key: i,
      name: "John Bn",
      age: `${i}2`,
      address: `New York No. ${i} Lake Park`,
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      url: `./img/hotel-1.jpg`
   });
   data.push({
      key: i + i2,
      name: "Aim Lincol",
      age: `${i + i2}2`,
      address: `London  No. ${i + i2} Lake Park`,
      description: `My name is John Brown, I am ${i +
         i2}2 years old, living in New York No. ${i + i2} Lake Park.`,
      url: `./img/hotel-1.jpg`
   });
}

const expandedRowRender = record => <TableGallery />;
const title = () => "Here is title";
const showHeader = true;
const footer = () => "Here is footer";
const scroll = { y: 240 };
const pagination = { position: "both" };

const ResizeableTitle = props => {
   const { onResize, width, ...restProps } = props;

   if (!width) {
      return <th {...restProps} />;
   }

   return (
      <Resizable
         width={width}
         height={0}
         onResize={onResize}
         draggableOpts={{ enableUserSelectHack: false }}
      >
         <th {...restProps} />
      </Resizable>
   );
};

class TableContainer extends Component {
   state = {
      bordered: true,
      loading: false,
      size: "default",
      expandedRowRender,
      showHeader,
      title,
      footer,
      rowSelection: {},
      scroll: undefined,
      hasData: true,
      tableLayout: "auto",
      filteredInfo: null,
      sortedInfo: null,
      searchText: "",
      data: [],
      pagination,
      //editing
      recordEdit: {},
      //resize
      columns: []
   };

   //resize
   components = {
      header: {
         cell: ResizeableTitle
      }
   };

   handleResize = index => (e, { size }) => {
      this.setState(({ columns }) => {
         const nextColumns = [...columns];
         nextColumns[index] = {
            ...nextColumns[index],
            width: size.width
         };
         return { columns: nextColumns };
      });
   };
   //end resize

   //Search
   getColumnSearchProps = dataIndex => ({
      filterDropdown: ({
         setSelectedKeys,
         selectedKeys,
         confirm,
         clearFilters
      }) => (
         <div style={{ padding: 8 }}>
            <Input
               ref={node => {
                  this.searchInput = node;
               }}
               placeholder={`Search ${dataIndex}`}
               value={selectedKeys[0]}
               onChange={e =>
                  setSelectedKeys(e.target.value ? [e.target.value] : [])
               }
               onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
               style={{ width: 188, marginBottom: 8, display: "block" }}
            />
            <Button
               type="primary"
               onClick={() => this.handleSearch(selectedKeys, confirm)}
               icon="search"
               size="small"
               style={{ width: 90, marginRight: 8 }}
            >
               Search
            </Button>
            <Button
               onClick={() => this.handleReset(clearFilters)}
               size="small"
               style={{ width: 90 }}
            >
               Reset
            </Button>
         </div>
      ),
      filterIcon: filtered => (
         <Icon
            type="search"
            style={{ color: filtered ? "#1890ff" : undefined }}
         />
      ),
      onFilter: (value, record) =>
         record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
         if (visible) {
            setTimeout(() => this.searchInput.select());
         }
      },
      render: text => (
         <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
         />
      )
   });

   handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
   };

   handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: "" });
   };
   //EndSearch

   //    Preload
   componentDidMount() {
      this.fetch();
   }
   handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
         pagination: pager
      });
      this.fetch({
         results: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters
      });
   };

   fetch = (params = {}) => {
      console.log("params:", params);
      this.setState({ loading: true });
      reqwest({
         url: "https://randomuser.me/api",
         method: "get",
         data: {
            results: 10,
            ...params
         },
         type: "json"
      }).then(data => {
         const pagination = { ...this.state.pagination };
         // Read total count from server
         pagination.total = data.totalCount;
         //  pagination.total = 200;
         this.setState({
            loading: false,
            data: data.results,
            pagination
         });
      });
   };
   //    EndPreload

   handleToggle = prop => enable => {
      this.setState({ [prop]: enable });
   };

   handleSizeChange = e => {
      this.setState({ size: e.target.value });
   };

   handleTableLayoutChange = e => {
      this.setState({ tableLayout: e.target.value });
   };

   handleTitleChange = enable => {
      this.setState({ title: enable ? title : undefined });
   };

   handleRowSelectionChange = enable => {
      this.setState({ rowSelection: enable ? {} : undefined });
   };

   handleScollChange = enable => {
      this.setState({ scroll: enable ? scroll : undefined });
   };

   handleDataChange = hasData => {
      this.setState({ hasData });
   };

   handleChange = (pagination, filters, sorter) => {
      console.log("Various parameters", pagination, filters, sorter);
      this.setState({
         filteredInfo: filters,
         sortedInfo: sorter
      });
   };

   clearFilters = () => {
      this.setState({ filteredInfo: null });
   };

   clearAll = () => {
      this.setState({
         filteredInfo: null,
         sortedInfo: null
      });
   };

   setAgeSort = () => {
      this.setState({
         sortedInfo: {
            order: "descend",
            columnKey: "age"
         }
      });
   };

   onEdit(record) {
      return event => {
         event.preventDefault();
         this.setState({ recordEdit: record });
         console.log(record);
      };
   }

   onDelte(record) {
      return event => {
         event.preventDefault();
         console.log(record);
      };
   }

   onChangeEdit = recordEdit => {
      this.setState({ recordEdit });
   };
   render() {
      const { state } = this;
      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      const columns = [
         {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "10%",
            ...this.getColumnSearchProps("name"),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
            ellipsis: true,
            render: text =>
               !state.recordEdit ? (
                  <Paragraph editable={{ onChange: this.onChangeEdit }}>
                     {state.recordEdit.name}
                  </Paragraph>
               ) : (
                  text
               )
         },
         {
            title: "Age",
            dataIndex: "age",
            key: "age",
            ...this.getColumnSearchProps("age"),
            width: "10%",
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
            ellipsis: true
         },
         {
            title: "Address",
            dataIndex: "address",
            key: "address",
            width: "",
            ...this.getColumnSearchProps("address"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
            ellipsis: true
         },
         {
            title: "url",
            dataIndex: "url",
            key: "url",
            width: "10%",
            filters: [
               { text: "London", value: "London" },
               { text: "New York", value: "New York" }
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value)
         },
         {
            title: "Action",
            key: "action",
            width: "20%",
            filters: [
               { text: "Joe", value: "Joe" },
               { text: "Jim", value: "Jim" }
            ],
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            render: (text, record) => (
               <span>
                  <Button type="dash" icon="edit" onClick={this.onEdit(record)}>
                     Edit
                  </Button>
                  <Divider type="vertical" />
                  <Button
                     type="danger"
                     icon="delete"
                     onClick={this.onDelte(record)}
                  >
                     Delete
                  </Button>
               </span>
            )
         }
      ];

      return (
         <div>
            <div className="table-operations">
               <Button onClick={this.setAgeSort}>Sort age</Button>
               <Button onClick={this.clearFilters}>Clear filters</Button>
               <Button onClick={this.clearAll}>
                  Clear filters and sorters
               </Button>
            </div>
            <Table
               {...this.state}
               components={this.components} //resize
               columns={columns.map((item, index) => ({
                  ...item,
                  ellipsis: state.ellipsis,
                  onHeaderCell: column => ({
                     //resize
                     width: column.width,
                     onResize: this.handleResize(index)
                  }) //end resize
               }))}
               dataSource={state.hasData ? data : null}
               onChange={this.handleChange}
               loading={this.state.loading} //loading
            />
         </div>
      );
   }
}

export default TableContainer;
