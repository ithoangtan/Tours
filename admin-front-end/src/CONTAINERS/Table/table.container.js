import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tourActions from "../../actions/tour.actions";

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

import TableGallery from "./tableGallery";
import TableNewRow from "./tableNewRow";

const EditableContext = React.createContext();

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

const title = () => "Tạm thời không biết phải ghi gì";
const showHeader = true;
const footer = () => "Tạm thời không biết nên ghi gì";
//Tùy chọn scroll bằng tổng các chiệu rộng
const scroll = { x: 2120, y: 400 };
const pagination = { position: "both" };

class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: this.props.listTour,
         editingidTour: "",
         count: this.props.listTour.length,
         bordered: true,
         loading: false,
         size: "default",
         showHeader,
         title,
         footer,
         rowSelection: {},
         scroll: scroll,
         hasData: true,
         tableLayout: "auto",
         filteredInfo: null,
         sortedInfo: null,
         searchText: "",
         pagination,
         //add Show
         showAdd: false
      };
   }

   isEditing = record => record.idTour === this.state.editingidTour;

   cancel = () => {
      this.setState({ editingidTour: "" });
   };

   save(form, idTour) {
      const { tourAllActions } = this.props;
      const { fetchPatchTourRequest } = tourAllActions;

      form.validateFields((error, row) => {
         if (error) {
            return;
         }
         const newData = [...this.state.data];
         const index = newData.findIndex(item => idTour === item.idTour);
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row
            });
            //Gọi API update dưới CSDL
            fetchPatchTourRequest(row);

            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingidTour: "" });
         } else {
            newData.push(row);
            //Gọi API update dưới CSDL
            fetchPatchTourRequest(row);
            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingidTour: "" });
         }
      });
   }

   edit(idTour) {
      this.setState({ editingidTour: idTour });
   }
   handleDelete = record => {
      const data = [...this.state.data];
      //Gọi API xóa dưới CSDL
      const { tourAllActions } = this.props;
      const { fetchDeleteTourRequest } = tourAllActions;
      fetchDeleteTourRequest(record);
      //Kết thúc gọi API xóa dươi CSDL
      this.setState({
         data: data.filter(item => item.idTour !== record.idTour)
      });
   };

   handleShowAdd = () => {
      this.setState({ showAdd: true });
   };
   handleAdd = newTour => {
      const { count, data } = this.state;
      const newData = {
         idTour: newTour.idTour | (data[data.length - 1].idTour + 1),
         titleTour: newTour.titleTour,
         price: newTour.price,
         sale: newTour.sale,
         dateAdded: new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, "-"),
         departureDay: newTour.departureDay,
         describe: newTour.describe,
         address: newTour.address,
         vocationTime: newTour.vocationTime
      };
      //Gọi API create dưới CSDL
      const { tourAllActions } = this.props;
      const { fetchPostTourRequest } = tourAllActions;
      fetchPostTourRequest(newData);
      //Kết thúc gọi API create dươi CSDL
      this.setState({
         data: [newData, ...data],
         count: count + 1,
         pagination: { total: data.length }
      });
   };

   handleSave = row => {
      const newData = [...this.state.data];
      const index = newData.findIndex(item => row.idTour === item.idTour);
      const item = newData[index];
      newData.splice(index, 1, {
         ...item,
         ...row
      });
      this.setState({ data: newData });
   };

   /**Preload */
   //    Preload
   componentDidMount() {
      const { tourAllActions } = this.props;
      const { fetchListTourImageRequest } = tourAllActions;
      fetchListTourImageRequest();
      this.fetch();
   }
   handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
         pagination: pager
      });
      this.fetch({
         tours: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters
      });
   };

   fetch = (params = {}) => {
      this.setState({ loading: true });
      const { tourAllActions } = this.props;
      const { fetchListTourRequest } = tourAllActions;
      fetchListTourRequest();
      reqwest({
         url: "http://localhost:8000/tours",
         method: "get",
         data: {
            tours: 1000,
            ...params
         },
         type: "json"
      }).then(data => {
         const pagination = { ...this.state.pagination };
         // Read total count from server
         pagination.total = data.length;
         const { listTour } = this.props;
         const listTourFormatOK = listTour.forEach(element => {
            element.dateAdded = element.dateAdded
               .slice(0, 10)
               .replace(/-/g, "-");
            element.departureDay = element.departureDay
               .slice(0, 10)
               .replace(/-/g, "-");
         });
         console.log(listTourFormatOK);

         this.setState({
            loading: false,
            data: listTour,
            pagination
         });
      });
   };
   //    EndPreload

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
      this.setState({
         searchText: selectedKeys[0],
         pagination: { total: this.state.data.length }
      });
   };

   handleReset = clearFilters => {
      clearFilters();
      this.setState({
         searchText: "",
         pagination: { total: this.state.data.length }
      });
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

   /** Resize */
   handleResize = index => (e, { size }) => {
      const nextColumns = [...this.columns];
      nextColumns[index] = {
         ...nextColumns[index],
         width: size.width
      };
      return { columns: nextColumns };
   };

   //Add
   handleShowAdd = () => {
      this.setState({ showAdd: !this.state.showAdd });
   };
   onCancle = () => {
      this.setState({ showAdd: false });
   };
   //end Add

   //Expanded Row Render
   expandedRowRender = record => {
      const { listImageTour } = this.props;
      return <TableGallery record={record} listImage={listImageTour} />;
   };

   render() {
      const { state } = this;
      const { data } = this.state;
      const components = {
         body: {
            cell: EditableCell
         },
         header: {
            cell: ResizeableTitle
         }
      };

      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      this.columns = [
         {
            title: "ID",
            dataIndex: "idTour",
            key: "idTour",
            width: 80,
            // fixed: "left",
            ellipsis: true,
            editable: true
            // render: text => text
         },
         {
            title: "Title",
            dataIndex: "titleTour",
            key: "titleTour",
            width: 200,
            // fixed: "left",
            ...this.getColumnSearchProps("titleTour"),
            sorter: (a, b) => a.titleTour.length - b.titleTour.length,
            sortOrder: sortedInfo.columnKey === "titleTour" && sortedInfo.order,
            ellipsis: true,
            editable: true
            // render: text => text
         },
         {
            title: "Price($)",
            dataIndex: "price",
            key: "price",
            width: 120,
            ...this.getColumnSearchProps("price"),
            sorter: (a, b) => a.price - b.price,
            sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Address",
            dataIndex: "address",
            key: "address",
            width: 200,
            ...this.getColumnSearchProps("address"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Sale(%)",
            dataIndex: "sale",
            key: "sale",
            width: 120,
            filters: [
               { text: "10%", value: 9 },
               { text: "20%", value: 43 }
            ],
            // filteredValue: filteredInfo.sale || null,
            // filterMultiple: false,
            // onFilter: (value, record) => record.sale.indexOf(value) === 0,
            ...this.getColumnSearchProps("sale"),
            sorter: (a, b) => a.sale.length - b.sale.length,
            sortOrder: sortedInfo.columnKey === "sale" && sortedInfo.order,
            editable: true,
            ellipsis: true
         },
         {
            title: "Added",
            dataIndex: "dateAdded",
            key: "dateAdded",
            width: 150,

            ...this.getColumnSearchProps("dateAdded"),
            sorter: (a, b) => a.dateAdded.length - b.dateAdded.length,
            sortOrder: sortedInfo.columnKey === "dateAdded" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Departure",
            dataIndex: "departureDay",
            key: "departureDay",
            width: 160,
            ...this.getColumnSearchProps("departureDay"),
            sorter: (a, b) => a.departureDay.length - b.departureDay.length,
            sortOrder:
               sortedInfo.columnKey === "departureDay" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Time",
            dataIndex: "vocationTime",
            key: "vocationTime",
            width: 120,
            ...this.getColumnSearchProps("vocationTime"),
            sorter: (a, b) => a.vocationTime - b.vocationTime,
            sortOrder:
               sortedInfo.columnKey === "vocationTime" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "describe",
            dataIndex: "describe",
            key: "describe",
            width: 400,
            ...this.getColumnSearchProps("describe"),
            sorter: (a, b) => a.describe.length - b.describe.length,
            sortOrder: sortedInfo.columnKey === "describe" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Edit",
            dataIndex: "edit",
            width: 180,
            key: "edit",
            fixed: "right",
            render: (text, record) => {
               const { editingidTour } = this.state;
               const editable = this.isEditing(record);
               return editable ? (
                  <span>
                     <EditableContext.Consumer>
                        {form => (
                           <Button
                              type="primary"
                              onClick={() => this.save(form, record.idTour)}
                              style={{ marginRight: 8 }}
                           >
                              Save
                           </Button>
                        )}
                     </EditableContext.Consumer>
                     <Popconfirm
                        title="Sure to cancel?"
                        onConfirm={() => this.cancel(record.idTour)}
                     >
                        <Button type="dashed">Cancel</Button>
                     </Popconfirm>
                  </span>
               ) : (
                  <Button
                     type="default"
                     disabled={editingidTour !== ""}
                     onClick={() => this.edit(record.idTour)}
                  >
                     Edit
                  </Button>
               );
            }
         },
         {
            title: "Delete",
            dataIndex: "delete",
            width: 110,
            key: "delete",
            fixed: "right",
            render: (text, record) =>
               this.state.data.length >= 1 ? (
                  <Popconfirm
                     title="Sure to delete?"
                     onConfirm={() => this.handleDelete(record)}
                  >
                     <Button type="danger">Delete</Button>
                  </Popconfirm>
               ) : null
         }
      ];

      function chooseType(type) {
         if (type === "price") return "number";
         else if (type === "depatureDay") return "date";
         else if (type === "dateAdd") return "disable";
      }

      const columns = this.columns.map(col => {
         if (!col.editable) {
            return col;
         }
         return {
            ...col,
            onCell: record => ({
               record,
               inputType: chooseType(col.dataIndex),
               // inputType: col.dataIndex === "price" ? "number" : "text",
               dataIndex: col.dataIndex,
               title: col.title,
               editing: this.isEditing(record),
               handleSave: this.handleSave
            })
         };
      });

      //Show ADD
      const { showAdd } = this.state;
      return (
         <div className="container-fluid card shadow">
            {showAdd ? (
               <TableNewRow
                  onCancle={this.onCancle}
                  handleAdd={this.handleAdd}
               />
            ) : (
               <div className="row">
                  <Button
                     onClick={this.handleShowAdd}
                     type="primary"
                     style={{ margin: "12px 12px 0px" }}
                  >
                     Add a row
                  </Button>
                  <Button
                     onClick={this.clearAll}
                     style={{ margin: "12px 12px 0px" }}
                  >
                     Clear filters and sorters
                  </Button>
               </div>
            )}
            <EditableContext.Provider value={this.props.form}>
               <Table
                  rowKey={"idTour"}
                  components={components}
                  pagination={{
                     onChange: this.cancel
                  }}
                  // dataSource={data}
                  dataSource={state.hasData ? data : null}
                  columns={columns.map((item, index) => ({
                     ...item,
                     ellipsis: state.ellipsis,
                     onHeaderCell: column => ({
                        //resize
                        width: column.width,
                        onResize: this.handleResize(index)
                     }) //end resize
                  }))}
                  rowClassName={() => "editable-row"}
                  onChange={this.handleChange}
                  {...this.state}
                  //Expanded Row Render
                  expandedRowRender={this.expandedRowRender}
               />
            </EditableContext.Provider>
         </div>
      );
   }
}

const TablesContainer = Form.create()(EditableTable);

TablesContainer.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchListTourRequest: PropTypes.func,
      fetchPostTourRequest: PropTypes.func,
      fetchDeleteTourRequest: PropTypes.func,
      fetchPatchTourRequest: PropTypes.func,
      fetchListTourImageRequest: PropTypes.func
   }),
   listTour: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTour: state.tour.listTour,
      listImageTour: state.tour.listImageTour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
