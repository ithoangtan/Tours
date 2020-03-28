import React from "react";

import moment from "moment";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as notificationsActions from "../../_actions/notifications.actions";

import Highlighter from "react-highlight-words";
import reqwest from "reqwest";
import { Resizable } from "react-resizable";

import { API_ENDPOINT } from "../../_constants/index.constants";

import {
   Table,
   Input,
   InputNumber,
   Popconfirm,
   Form,
   Button,
   Icon,
   notification
} from "antd";

import TableNewRow from "./tableNewNotifications";
import Cookies from "js-cookie";

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

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
         editingidNotification: "",
         count: this.props.listNotifications.length,
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
         visiblePreview: false,
         ellipsis: false
      };
   }

   isEditing = record =>
      record.idNotification === this.state.editingidNotification;

   cancel = () => {
      this.setState({ editingidNotification: "" });
   };

   save(form, idNotification) {
      const { notificationsAllActions } = this.props;
      const { fetchPatchNotificationsRequest } = notificationsAllActions;

      form.validateFields((error, row) => {
         if (error) {
            return;
         }
         const newData = [...this.state.data];
         const index = newData.findIndex(
            item => idNotification === item.idNotification
         );
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row
            });
            //Gọi API update dưới CSDL
            fetchPatchNotificationsRequest(row);

            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingidNotification: "" });
         } else {
            newData.push(row);
            //Gọi API update dưới CSDL
            fetchPatchNotificationsRequest(row);
            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingidNotification: "" });
         }
      });
   }

   edit(idNotification) {
      this.setState({ editingidNotification: idNotification });
   }
   handleDelete = record => {
      const data = [...this.state.data];
      //Gọi API xóa dưới CSDL
      const { notificationsAllActions } = this.props;
      const { fetchDeleteNotificationsRequest } = notificationsAllActions;
      fetchDeleteNotificationsRequest(record);
      //Kết thúc gọi API xóa dươi CSDL
      this.setState({
         data: data.filter(
            item => item.idNotification !== record.idNotification
         )
      });
   };

   handleShowAdd = () => {
      this.setState({ showAdd: true });
   };
   handleAdd = newNotifications => {
      const { count, data } = this.state;
      const newData = {
         idNotification:
            newNotifications.idNotification | (data.length !== 0)
               ? data[data.length - 1].idNotification + 1
               : 0,
         titleNotifications: newNotifications.titleNotifications,
         price: newNotifications.price,
         sale: newNotifications.sale,
         dateAdded: new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, "-"),
         departureDay: newNotifications.departureDay,
         describe: newNotifications.describe,
         address: newNotifications.address,
         vocationTime: newNotifications.vocationTime,
         idAccount: newNotifications.idAccount
      };
      //Gọi API create dưới CSDL
      const { notificationsAllActions } = this.props;
      const { fetchPostNotificationsRequest } = notificationsAllActions;
      fetchPostNotificationsRequest(newData);
      //Kết thúc gọi API create dươi CSDL
      this.setState({
         data: [newData, ...data],
         count: count + 1,
         pagination: { total: data.length }
      });
   };

   handleSaveOnChange = row => {
      const newData = [...this.state.data];
      const index = newData.findIndex(
         item => row.idNotification === item.idNotification
      );
      const item = newData[index];
      newData.splice(index, 1, {
         ...item,
         ...row
      });
      this.setState({ data: newData });
   };

   /**Preload */
   //    Preload
   componentWillMount() {
      const { notificationsAllActions } = this.props;
      const { fetchListNotificationsImageRequest } = notificationsAllActions;
      fetchListNotificationsImageRequest();
      this.fetch();
   }
   handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
         pagination: pager
      });
      this.fetch({
         notifications: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters
      });
   };

   fetch = async (params = {}) => {
      this.setState({ loading: true });
      await reqwest({
         url: `${API_ENDPOINT}/notifications`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         data: {
            ...params
         },
         type: "json"
      }).then(data => {
         const pagination = { ...this.state.pagination };
         // Read total count from server
         pagination.total = data.length;
         this.setState({
            loading: false,
            data: data,
            //data: listNotifications
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
            textToHighlight={
               text === null || text === undefined ? " " : text.toString()
            }
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

   openNotificationPreview = record => {
      if (record.type === "info") {
         notification.info({
            message: record.title,
            description: record.contentNotification,
            style: {
               width: 400,
               marginLeft: -20
            }
         });
      }
      // Tùy theo record.type là gì để notice
      else {
         notification.open({
            message: record.title,
            description: record.contentNotification,
            style: {
               width: 400,
               marginLeft: -20
            }
         });
      }
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
            editable: true
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
            editable: true
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
            editable: true
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
            editable: true
         },
         {
            title: "Content Notification",
            dataIndex: "contentNotification",
            key: "contentNotification",
            width: 250,
            filters: [
               { text: "10%", value: 9 },
               { text: "20%", value: 43 }
            ],
            // filteredValue: filteredInfo.contentNotification || null,
            // filterMultiple: false,
            // onFilter: (value, record) => record.contentNotification.indexOf(value) === 0,
            ...this.getColumnSearchProps("contentNotification"),
            sorter: (a, b) =>
               a.contentNotification.length - b.contentNotification.length,
            sortOrder:
               sortedInfo.columnKey === "contentNotification" &&
               sortedInfo.order,
            editable: true,
            ellipsis: true
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
            render: text => {
               return moment(text).format("hh:mm A DD/MM/YYYY");
            }
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
            render: text => {
               return moment(text).format("DD/MM/YYYY");
            }
         },
         {
            title: "IDAcc",
            dataIndex: "idAccount",
            key: "idAccount",
            width: 60,
            // fixed: "left",
            ellipsis: true,
            editable: true
            // render: text => text
         },
         {
            title: "Edit",
            dataIndex: "edit",
            width: 125,
            key: "edit",
            fixed: widthClient > 768 ? "right" : "",
            render: (text, record) => {
               const { editingidNotification } = this.state;
               const editable = this.isEditing(record);
               return editable ? (
                  <span>
                     <EditableContext.Consumer>
                        {form => (
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
                        disabled={editingidNotification !== ""}
                        onClick={() => this.edit(record.idNotification)}
                     >
                        Edit
                     </Button>
                     <Button
                        size="small"
                        type="primary"
                        onClick={() => this.openNotificationPreview(record)}
                        style={{ marginLeft: 6 }}
                     >
                        Preview
                     </Button>
                  </>
               );
            }
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
               dataIndex: col.dataIndex,
               title: col.title,
               editing: this.isEditing(record),
               onChange: this.handleSaveOnChange
            })
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
                     Add New Notifications
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
               />
            </EditableContext.Provider>
         </div>
      );
   }
}

const NotificationsTablesContainer = Form.create()(EditableTable);

NotificationsTablesContainer.propTypes = {
   classes: PropTypes.object,
   notificationsAllActions: PropTypes.shape({
      fetchListNotificationsRequest: PropTypes.func,
      fetchPostNotificationsRequest: PropTypes.func,
      fetchDeleteNotificationsRequest: PropTypes.func,
      fetchPatchNotificationsRequest: PropTypes.func,
      fetchListNotificationsImageRequest: PropTypes.func
   }),
   listNotifications: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listNotifications: state.notifications.listNotifications,
      listImageNotifications: state.notifications.listImageNotifications
   };
};
const mapDispatchToProps = dispatch => {
   return {
      notificationsAllActions: bindActionCreators(
         notificationsActions,
         dispatch
      )
      //Bên trái chỉ là đặt tên thôi, bên phải là notificationsActions ở bên notifications.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NotificationsTablesContainer);
