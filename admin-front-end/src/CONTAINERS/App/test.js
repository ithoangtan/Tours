import React from "react";
import Highlighter from "react-highlight-words";
import reqwest from "reqwest";
import { Resizable } from "react-resizable";

import {
   Table,
   Input,
   InputNumber,
   Popconfirm,
   Form,
   Button,
   Icon
} from "antd";

import TableGallery from "../Table/table.gallery";

const data = [];
for (let i = 0; i < 100; i++) {
   data.push({
      key: i,
      name: `Edrward ${i}`,
      age: Math.floor(Math.random() * 100),
      address: `London Park no. ${i}`,
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      url: `./img/hotel-1.jpg`
   });
}
const EditableContext = React.createContext();

class EditableCell extends React.Component {
   getInput = () => {
      if (this.props.inputType === "number") {
         return <InputNumber />;
      }
      return <Input />;
   };

   renderCell = ({ getFieldDecorator }) => {
      const {
         editing,
         dataIndex,
         title,
         inputType,
         record,
         index,
         children,
         ...restProps
      } = this.props;
      return (
         <td {...restProps}>
            {editing ? (
               <Form.Item style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                     rules: [
                        {
                           required: true,
                           message: `Please Input ${title}!`
                        }
                     ],
                     initialValue: record[dataIndex]
                  })(this.getInput())}
               </Form.Item>
            ) : (
               children
            )}
         </td>
      );
   };

   render() {
      return (
         <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
      );
   }
}

const expandedRowRender = record => <TableGallery />;
const title = () => "Here is title";
const showHeader = true;
const footer = () => "Here is footer";
const scroll = { y: 240 };
const pagination = { position: "both" };

class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data,
         editingKey: "",
         count: data.length,
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
         pagination
      };
   }

   isEditing = record => record.key === this.state.editingKey;

   cancel = () => {
      this.setState({ editingKey: "" });
   };

   save(form, key) {
      form.validateFields((error, row) => {
         if (error) {
            return;
         }
         const newData = [...this.state.data];
         const index = newData.findIndex(item => key === item.key);
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row
            });
            this.setState({ data: newData, editingKey: "" });
         } else {
            newData.push(row);
            this.setState({ data: newData, editingKey: "" });
         }
      });
   }

   edit(key) {
      this.setState({ editingKey: key });
   }
   handleDelete = key => {
      const data = [...this.state.data];
      this.setState({
         data: data.filter(item => item.key !== key)
      });
   };

   handleAdd = () => {
      const { count, data } = this.state;
      const newData = {
         key: count,
         name: `Edward King ${count}`,
         age: 32,
         address: `London, Park Lane no. ${count}`
      };
      this.setState({
         data: [...data, newData],
         count: count + 1
      });
   };
   handleSave = row => {
      const newData = [...this.state.data];
      const index = newData.findIndex(item => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
         ...item,
         ...row
      });
      this.setState({ data: newData });
   };

   // /**Preload */
   // //    Preload
   // componentDidMount() {
   //    this.fetch();
   // }
   // handleTableChange = (pagination, filters, sorter) => {
   //    const pager = { ...this.state.pagination };
   //    pager.current = pagination.current;
   //    this.setState({
   //       pagination: pager
   //    });
   //    this.fetch({
   //       results: pagination.pageSize,
   //       page: pagination.current,
   //       sortField: sorter.field,
   //       sortOrder: sorter.order,
   //       ...filters
   //    });
   // };

   // fetch = (params = {}) => {
   //    console.log("params:", params);
   //    this.setState({ loading: true });
   //    reqwest({
   //       url: "https://randomuser.me/api",
   //       method: "get",
   //       data: {
   //          results: 10,
   //          ...params
   //       },
   //       type: "json"
   //    }).then(data => {
   //       const pagination = { ...this.state.pagination };
   //       // Read total count from server
   //       pagination.total = data.totalCount;
   //       //  pagination.total = 200;
   //       this.setState({
   //          loading: false,
   //          data: data.results,
   //          pagination
   //       });
   //    });
   // };
   // //    EndPreload

   /**Search */

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

   /**More function */
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

   handleChange = (pagination, filters, sorter, extra) => {
      console.log("Various parameters", pagination, filters, sorter, extra);
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

   render() {
      const { state } = this;
      const { data } = this.state;
      const components = {
         body: {
            cell: EditableCell
         }
      };

      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      this.columns = [
         {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "10%",
            ...this.getColumnSearchProps("name"),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
            ellipsis: true,
            editable: true,
            render: text => text
         },
         {
            title: "Age",
            dataIndex: "age",
            key: "age",
            ...this.getColumnSearchProps("age"),
            width: "10%",
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Address",
            dataIndex: "address",
            key: "address",
            width: "",
            ...this.getColumnSearchProps("address"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
            ellipsis: true,
            editable: true
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
            onFilter: (value, record) => record.address.includes(value),
            editable: true,
            ellipsis: true
         },
         {
            title: "Edit",
            dataIndex: "edit",
            width: "10%",
            render: (text, record) => {
               const { editingKey } = this.state;
               const editable = this.isEditing(record);
               return editable ? (
                  <span>
                     <EditableContext.Consumer>
                        {form => (
                           <a
                              onClick={() => this.save(form, record.key)}
                              style={{ marginRight: 8 }}
                           >
                              Save
                           </a>
                        )}
                     </EditableContext.Consumer>
                     <Popconfirm
                        title="Sure to cancel?"
                        onConfirm={() => this.cancel(record.key)}
                     >
                        <a>Cancel</a>
                     </Popconfirm>
                  </span>
               ) : (
                  <a
                     disabled={editingKey !== ""}
                     onClick={() => this.edit(record.key)}
                  >
                     Edit
                  </a>
               );
            }
         },
         {
            title: "Delete",
            dataIndex: "delete",
            width: "6%",
            render: (text, record) =>
               this.state.data.length >= 1 ? (
                  <Popconfirm
                     title="Sure to delete?"
                     onConfirm={() => this.handleDelete(record.key)}
                  >
                     <a>Delete</a>
                  </Popconfirm>
               ) : null
         }
      ];

      const columns = this.columns.map(col => {
         if (!col.editable) {
            return col;
         }
         return {
            ...col,
            onCell: record => ({
               record,
               inputType: col.dataIndex === "age" ? "number" : "text",
               dataIndex: col.dataIndex,
               title: col.title,
               editing: this.isEditing(record),
               handleSave: this.handleSave
            })
         };
      });

      return (
         <div>
            <Button
               onClick={this.handleAdd}
               type="primary"
               style={{ marginBottom: 16 }}
            >
               Add a row
            </Button>
            <Button onClick={this.setAgeSort}>Sort age</Button>
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
            <EditableContext.Provider value={this.props.form}>
               <Table
                  components={components}
                  // dataSource={data}
                  dataSource={state.hasData ? data : null}
                  columns={columns.map((item, index) => ({
                     ...item,
                     ellipsis: state.ellipsis
                     // onHeaderCell: column => ({
                     //    //resize
                     //    width: column.width,
                     //    onResize: this.handleResize(index)
                     // }) //end resize
                  }))}
                  rowClassName={() => "editable-row"}
                  pagination={{
                     onChange: this.cancel
                  }}
                  onChange={this.handleChange}
                  {...this.state}
               />
            </EditableContext.Provider>
         </div>
      );
   }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;
