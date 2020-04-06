import React from "react";

import moment from "moment";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as notificationActions from "../../_actions/notification.actions";

import Highlighter from "react-highlight-words";
import reqwest from "reqwest";
import { Resizable } from "react-resizable";

import { API_ENDPOINT } from "../../_constants/index.constants";

import {
   Table,
   Input,
   Popconfirm,
   Form,
   Button,
   Icon,
   Modal,
   Select,
   DatePicker,
} from "antd";

import TableNewRow from "./tableNewNotification";
import Cookies from "js-cookie";

import NotificationPreview from "./NotificationPreview";

const { Option } = Select;

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

const EditableContext = React.createContext();

const ResizeableTitle = (props) => {
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
      if (this.props.inputType === "disabled") return <Input disabled />;
      else if (this.props.inputType === "typeSelect")
         return (
            <Select
               showSearch
               style={{ width: "100%" }}
               optionFilterProp="children"
               filterOption={(input, option) =>
                  option.props.children
                     .toLowerCase()
                     .indexOf(input.toLowerCase()) >= 0
               }
            >
               <Option value={"Info"}>Info</Option>
               <Option value={"Sucess"}>Sucess</Option>
               <Option value={"Warning"}>Warning</Option>
               <Option value={"Error"}>Error</Option>
            </Select>
         );
      else if (this.props.inputType === "statusSelect")
         return (
            <Select
               showSearch
               style={{ width: "100%" }}
               optionFilterProp="children"
               filterOption={(input, option) =>
                  option.props.children
                     .toLowerCase()
                     .indexOf(input.toLowerCase()) >= 0
               }
            >
               <Option value="Created">Created</Option>
               <Option value="Stoped">Stoped</Option>
               <Option value="Sending">Sending</Option>
               <Option value="Sent" disabled>
                  Sent
               </Option>
            </Select>
         );
      else if (this.props.inputType === "datetime")
         return <DatePicker showTime />;
      else if (this.props.inputType === "input") return <Input />;
   };

   initialValueEditForm = (record, index) => {
      if (index === "datetime") return moment(record[index]);
      else return record[index];
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
                           message: `Please Input ${title}!`,
                        },
                     ],
                     initialValue: this.initialValueEditForm(record, dataIndex),
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
const footer = () => "Dùng tổ hợp Shift + con lăn chuột để cuộn ngang";
//Tùy chọn scroll bằng tổng các chiệu rộng
const scroll = { x: 1170, y: 400 };
const pagination = { position: "both" };

class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowsDescribe: 1,
         data: null,
         editingIdNotification: "",
         count: this.props.listNotification.length,
         bordered: true,
         loading: false,
         size: "default",
         showHeader,
         // title,
         footer,
         // rowSelection: {},
         scroll: scroll,
         hasData: true,
         tableLayout: "auto",
         filteredInfo: null,
         sortedInfo: null,
         searchText: "",
         pagination,
         //add Show
         showAdd: false,
         ellipsis: false,
         // prevew visible
         visiblePreview: false,
      };
   }

   isEditing = (record) =>
      record.idNotification === this.state.editingIdNotification;

   cancel = () => {
      this.setState({ editingIdNotification: "" });
   };

   save(form, idNotification) {
      const { notificationAllActions } = this.props;
      const { fetchPatchNotificationRequest } = notificationAllActions;

      form.validateFields((error, row) => {
         if (error) {
            return;
         }
         const newData = [...this.state.data];
         const index = newData.findIndex(
            (item) => idNotification === item.idNotification
         );
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row,
            });
            //Gọi API update dưới CSDL
            fetchPatchNotificationRequest(row);

            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingIdNotification: "" });
         } else {
            newData.push(row);
            //Gọi API update dưới CSDL
            fetchPatchNotificationRequest(row);
            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingIdNotification: "" });
         }
      });
   }

   edit(idNotification) {
      this.setState({ editingIdNotification: idNotification });
   }

   handleDelete = (record) => {
      const data = [...this.state.data];
      //Gọi API xóa dưới CSDL
      const { notificationAllActions } = this.props;
      const { fetchDeleteNotificationRequest } = notificationAllActions;
      fetchDeleteNotificationRequest(record);
      //Kết thúc gọi API xóa dươi CSDL
      this.setState({
         data: data.filter(
            (item) => item.idNotification !== record.idNotification
         ),
      });
   };

   handleShowAdd = () => {
      this.setState({ showAdd: true });
   };
   handleAdd = (newNotification) => {
      const { count, data } = this.state;
      let newData = {
         idNotification:
            newNotification.idNotification | (data.length !== 0)
               ? data[data.length - 1].idNotification + 1
               : 0,
         title: newNotification.title,
         contentNotification: newNotification.contentNotification,
         datetime: moment(newNotification.datetime).format(),
         dateAdded: new Date().toJSON().slice(0, 10).replace(/-/g, "-"),
         type: newNotification.type,
         status: newNotification.status,
         idAccount: newNotification.idAccount,
      };
      //Gọi API create dưới CSDL
      const { notificationAllActions } = this.props;
      const { fetchPostNotificationRequest } = notificationAllActions;
      fetchPostNotificationRequest(newData);
      //Kết thúc gọi API create dươi CSDL
      this.setState({
         data: [newData, ...data],
         count: count + 1,
         pagination: { total: data.length },
      });
   };

   handleSaveOnChange = (row) => {
      const newData = [...this.state.data];
      const index = newData.findIndex(
         (item) => row.idNotification === item.idNotification
      );
      const item = newData[index];
      newData.splice(index, 1, {
         ...item,
         ...row,
      });
      this.setState({ data: newData });
   };

   /**Preload */
   //    Preload
   componentWillMount() {
      this.fetch();
   }

   handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
         pagination: pager,
      });
      this.fetch({
         notification: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters,
      });
   };

   fetch = async (params = {}) => {
      this.setState({ loading: true });
      await reqwest({
         url: `${API_ENDPOINT}/notifications`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         data: {
            ...params,
         },
         type: "json",
      }).then((data) => {
         const pagination = { ...this.state.pagination };
         // Read total count from server
         pagination.total = data.length;
         this.setState({
            loading: false,
            data: data,
            //data: listNotification
            pagination,
         });
      });
   };
   //    EndPreload

   /**Search */

   //Search
   getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({
         setSelectedKeys,
         selectedKeys,
         confirm,
         clearFilters,
      }) => (
         <div style={{ padding: 8 }}>
            <Input
               ref={(node) => {
                  this.searchInput = node;
               }}
               placeholder={`Search ${dataIndex}`}
               value={selectedKeys[0]}
               onChange={(e) =>
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
      filterIcon: (filtered) => (
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
      onFilterDropdownVisibleChange: (visible) => {
         if (visible) {
            setTimeout(() => this.searchInput.select());
         }
      },
      render: (text) => (
         <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={
               text === null || text === undefined ? " " : text.toString()
            }
         />
      ),
   });

   handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({
         searchText: selectedKeys[0],
         pagination: { total: this.state.data.length },
      });
   };

   handleReset = (clearFilters) => {
      clearFilters();
      this.setState({
         searchText: "",
         pagination: { total: this.state.data.length },
      });
   };
   //EndSearch

   /**More function */
   handleToggle = (prop) => (enable) => {
      this.setState({ [prop]: enable });
   };

   handleSizeChange = (e) => {
      this.setState({ size: e.target.value });
   };

   handleTableLayoutChange = (e) => {
      this.setState({ tableLayout: e.target.value });
   };

   handleTitleChange = (enable) => {
      this.setState({ title: enable ? title : undefined });
   };

   handleRowSelectionChange = (enable) => {
      this.setState({ rowSelection: enable ? {} : undefined });
   };

   handleScollChange = (enable) => {
      this.setState({ scroll: enable ? scroll : undefined });
   };

   handleDataChange = (hasData) => {
      this.setState({ hasData });
   };

   handleChange = (pagination, filters, sorter, extra) => {
      this.setState({
         filteredInfo: filters,
         sortedInfo: sorter,
      });
   };

   clearFilters = () => {
      this.setState({ filteredInfo: null });
   };

   clearAll = () => {
      this.setState({
         filteredInfo: null,
         sortedInfo: null,
      });
   };

   /** Resize */
   handleResize = (index) => (e, { size }) => {
      const nextColumns = [...this.columns];
      nextColumns[index] = {
         ...nextColumns[index],
         width: size.width,
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

   // Preivew

   showModalPreview(record) {
      Modal.success({
         style: { top: "30px" },
         width: 400,
         title: "This is a item notification",
         wrapClassName: "",
         content: <NotificationPreview notification={record} />,
      });
   }

   handleCancelPreview = (e) => {
      this.setState({
         visiblePreview: false,
      });
   };
   // end Preview

   render() {
      const { state } = this;
      const { data } = this.state;
      const components = {
         body: {
            cell: EditableCell,
         },
         header: {
            cell: ResizeableTitle,
         },
      };

      let { sortedInfo } = this.state;
      // let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      // filteredInfo = filteredInfo || {};

      const widthClient = window.outerWidth;

      this.columns = [
         {
            title: "ID",
            dataIndex: "idNotification",
            key: "idNotification",
            width: 50,
            // fixed: "left",
            ellipsis: true,
            editable: true,
            // render: text => text
         },
         {
            title: "Type",
            dataIndex: "type",
            key: "type",
            width: 90,
            // fixed: "left",
            ...this.getColumnSearchProps("type"),
            sorter: (a, b) => a.type.length - b.type.length,
            sortOrder: sortedInfo.columnKey === "type" && sortedInfo.order,
            ellipsis: true,
            editable: true,
            // render: text => text
         },
         {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 100,
            ...this.getColumnSearchProps("status"),
            sorter: (a, b) => a.status - b.status,
            sortOrder: sortedInfo.columnKey === "status" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Title",
            dataIndex: "title",
            key: "title",
            width: 180,
            ...this.getColumnSearchProps("title"),
            sorter: (a, b) => a.title.length - b.title.length,
            sortOrder: sortedInfo.columnKey === "title" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Content Notification",
            dataIndex: "contentNotification",
            key: "contentNotification",
            width: 250,
            ...this.getColumnSearchProps("contentNotification"),
            sorter: (a, b) =>
               a.contentNotification.length - b.contentNotification.length,
            sortOrder:
               sortedInfo.columnKey === "contentNotification" &&
               sortedInfo.order,
            editable: true,
            ellipsis: true,
         },

         {
            title: "Datetime",
            dataIndex: "datetime",
            key: "datetime",
            width: 150,
            ...this.getColumnSearchProps("datetime"),
            sorter: (a, b) => a.datetime.length - b.datetime.length,
            sortOrder: sortedInfo.columnKey === "datetime" && sortedInfo.order,
            ellipsis: true,
            editable: true,
            render: (text) => {
               return moment(text).format("hh:mm A DD/MM/YYYY");
            },
         },
         {
            title: "Added",
            dataIndex: "dateAdded",
            key: "dateAdded",
            width: 100,

            ...this.getColumnSearchProps("dateAdded"),
            sorter: (a, b) => a.dateAdded.length - b.dateAdded.length,
            sortOrder: sortedInfo.columnKey === "dateAdded" && sortedInfo.order,
            ellipsis: true,
            editable: true,
            render: (text) => {
               return moment(text).format("DD/MM/YYYY");
            },
         },
         {
            title: "IDAcc",
            dataIndex: "idAccount",
            key: "idAccount",
            width: 60,
            // fixed: "left",
            ellipsis: true,
            editable: true,
            // render: text => text
         },
         {
            title: "Edit",
            dataIndex: "edit",
            width: 125,
            key: "edit",
            fixed: widthClient > 768 ? "right" : "",
            render: (text, record) => {
               const { editingIdNotification } = this.state;
               const editable = this.isEditing(record);
               return editable ? (
                  <span>
                     <EditableContext.Consumer>
                        {(form) => (
                           <Button
                              size="small"
                              type="primary"
                              onClick={() =>
                                 this.save(form, record.idNotification)
                              }
                              style={{ marginRight: 8 }}
                           >
                              Save
                           </Button>
                        )}
                     </EditableContext.Consumer>
                     <Popconfirm
                        title="Sure to cancel?"
                        onConfirm={() => this.cancel(record.idNotification)}
                     >
                        <Button type="dashed" size="small">
                           Cancel
                        </Button>
                     </Popconfirm>
                  </span>
               ) : (
                  <>
                     <Button
                        type="default"
                        size="small"
                        disabled={editingIdNotification !== ""}
                        onClick={() => this.edit(record.idNotification)}
                     >
                        Edit
                     </Button>
                     <Button
                        size="small"
                        type="primary"
                        onClick={() => this.showModalPreview(record)}
                        style={{ marginLeft: 6 }}
                     >
                        Preview
                     </Button>
                  </>
               );
            },
         },
         {
            title: "Delete",
            dataIndex: "delete",
            width: 70, //110
            key: "delete",
            fixed: widthClient > 768 ? "right" : "",
            render: (text, record) =>
               this.state.data.length >= 1 ? (
                  <Popconfirm
                     title="Sure to delete?"
                     onConfirm={() => this.handleDelete(record)}
                  >
                     <Button type="danger" size="small">
                        Delete
                     </Button>
                  </Popconfirm>
               ) : null,
         },
      ];

      function chooseType(type) {
         if (
            type === "idNotification" ||
            type === "idAccount" ||
            type === "dateAdded"
         )
            return "disabled";
         else if (type === "type") return "typeSelect";
         else if (type === "status") return "statusSelect";
         else if (type === "datetime") return "datetime";
         else return "input";
      }
      const columns = this.columns.map((col) => {
         if (!col.editable) {
            return col;
         }
         return {
            ...col,
            onCell: (record) => ({
               record,
               inputType: chooseType(col.dataIndex),
               dataIndex: col.dataIndex,
               title: col.title,
               editing: this.isEditing(record),
               onChange: this.handleSaveOnChange,
            }),
         };
      });

      //Show ADD
      const { showAdd } = this.state;

      return (
         <div className="container-fluid card">
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
                     Add New Notification
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
                  rowKey={"idNotification"}
                  components={components}
                  pagination={{
                     onChange: this.cancel,
                  }}
                  // dataSource={data}
                  dataSource={state.hasData ? data : null}
                  columns={columns.map((item, index) => ({
                     ...item,
                     key: index,
                     ellipsis: state.ellipsis,
                     onHeaderCell: (column) => ({
                        //resize
                        width: column.width,
                        onResize: this.handleResize(index),
                     }), //end resize
                  }))}
                  rowClassName={() => "editable-row"}
                  onChange={this.handleChange}
                  {...this.state}
                  //Expanded Row Render
               />
            </EditableContext.Provider>
         </div>
      );
   }
}

const NotificationTablesContainer = Form.create()(EditableTable);

NotificationTablesContainer.propTypes = {
   classes: PropTypes.object,
   notificationAllActions: PropTypes.shape({
      fetchListNotificationRequest: PropTypes.func,
      fetchPostNotificationRequest: PropTypes.func,
      fetchDeleteNotificationRequest: PropTypes.func,
      fetchPatchNotificationRequest: PropTypes.func,
   }),
   listNotification: PropTypes.array,
};

const mapStateToProps = (state) => {
   return {
      listNotification: state.notification.listNotification,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      notificationAllActions: bindActionCreators(notificationActions, dispatch),
      //Bên trái chỉ là đặt tên thôi, bên phải là notificationActions ở bên notification.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NotificationTablesContainer);
