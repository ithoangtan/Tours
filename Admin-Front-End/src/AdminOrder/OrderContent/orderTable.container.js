import React from "react";

import moment from "moment";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as accountOrders from "../../_actions/order.actions";
import * as tourActions from "../../_actions/tour.actions";

import Highlighter from "react-highlight-words";
import reqwest from "reqwest";
import { Resizable } from "react-resizable";
import NumberFormat from "react-number-format";
import { API_ENDPOINT } from "../../_constants/index.constants";

import {
   Table,
   Input,
   InputNumber,
   Popconfirm,
   Form,
   Button,
   Icon,
   Select,
} from "antd";

import TableNewRow from "./tableNewOrder";
import Cookies from "js-cookie";
import AvatarChange from "./XAvartarChange";

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
      if (this.props.inputType === "number") {
         return <InputNumber />;
      } else if (this.props.inputType === "disabled") return <Input disabled />;
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
                           message: `Please Input ${title}!`,
                        },
                     ],
                     initialValue: record[dataIndex],
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
const scroll = { x: 2200, y: 400 };
const pagination = { position: "both" };
let originalOrderData = [];

class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowsDescribe: 1,
         data: null,
         editingIdAccount: "",
         count: this.props.listOrder.length,
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
         ellipsis: false,
         numberPeople: 0,
         numberOrderVerify: 0,
      };
   }

   isEditing = (record) => record.idAccount === this.state.editingIdAccount;

   cancel = () => {
      this.setState({ editingIdAccount: "" });
   };

   save(form, idAccount) {
      const { accountAllActions } = this.props;
      const { fetchPatchAccountRequest } = accountAllActions;

      form.validateFields((error, row) => {
         if (error) {
            return;
         }
         const newData = [...this.state.data];
         const index = newData.findIndex(
            (item) => idAccount === item.idAccount
         );
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row,
            });
            //Gọi API update dưới CSDL
            fetchPatchAccountRequest(row);

            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingIdAccount: "" });
         } else {
            newData.push(row);
            //Gọi API update dưới CSDL
            fetchPatchAccountRequest(row);
            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingIdAccount: "" });
         }
      });
   }

   edit(idAccount) {
      this.setState({ editingIdAccount: idAccount });
   }
   handleDelete = (record) => {
      const data = [...this.state.data];
      //Gọi API xóa dưới CSDL
      const { accountAllActions } = this.props;
      const { fetchDeleteAccountRequest } = accountAllActions;
      fetchDeleteAccountRequest(record);
      //Kết thúc gọi API xóa dươi CSDL
      this.setState({
         data: data.filter((item) => item.idAccount !== record.idAccount),
      });
   };

   handleShowAdd = () => {
      this.setState({ showAdd: true });
   };
   handleAdd = (newAccount) => {
      const { count, data } = this.state;
      const newData = {
         idAccount:
            newAccount.idAccount | (data.length !== 0)
               ? data[data.length - 1].idAccount + 1
               : 0,
         name: newAccount.name,
         email: newAccount.email,
         phone: newAccount.phone,
         role: newAccount.role,
         username: newAccount.username,
         website: newAccount.website,
         birthdate: newAccount.birthdate,
         verify: newAccount.verify,
         gender: newAccount.gender,
         dateAdded: new Date().toJSON().slice(0, 10).replace(/-/g, "-"),
      };
      //Gọi API create dưới CSDL
      const { accountAllActions } = this.props;
      const { fetchPostAccountRequest } = accountAllActions;
      fetchPostAccountRequest(newData);

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
         (item) => row.idAccount === item.idAccount
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
         accounts: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters,
      });
   };

   fetch = async (params = {}) => {
      this.setState({ loading: true });
      if (this.props.listTour.length === 0) {
         // fetch list tour
         const { tourAllActions } = this.props;
         const { fetchListTourRequest } = tourAllActions;
         fetchListTourRequest();
      }
      await reqwest({
         url: `${API_ENDPOINT}/orders`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         data: {
            ...params,
         },
         type: "json",
      }).then((data) => {
         const pagination = { ...this.state.pagination };
         pagination.total = data.length;
         originalOrderData = data;
         let numberPeople = originalOrderData.reduce(
            (total, i) => total + i.numberPeople,
            0
         );
         let numberOrderVerify = originalOrderData.reduce((total, i) => {
            if (i.status === "paid") {
               return total + 1;
            } else {
               return total;
            }
         }, 0);
         this.setState({
            loading: false,
            data: data,
            //data: listAccount
            pagination,
            numberPeople,
            numberOrderVerify,
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

   //Expanded Row Render
   expandedRowRender = (record) => {
      return <AvatarChange record={record} {...this.props} />;
   };

   handleCancelPreview = (e) => {
      this.setState({
         visiblePreview: false,
      });
   };

   handleChangeSelect = (value) => {
      let newOrder = [];
      if (value == 0) {
         newOrder = originalOrderData;
      } else {
         newOrder = [...originalOrderData];
         newOrder = newOrder.filter((i) => i.idTour === value);
      }
      let numberPeople = newOrder.reduce(
         (total, i) => total + i.numberPeople,
         0
      );
      let numberOrderVerify = newOrder.reduce((total, i) => {
         if (i.status === "paid") {
            return total + 1;
         } else {
            return total;
         }
      }, 0);
      this.setState({ data: newOrder, numberPeople, numberOrderVerify });
   };

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
            dataIndex: "idOrder",
            key: "idOrder",
            width: 50,
            // fixed: "left",
            ellipsis: true,
            editable: true,
            // render: text => text
         },
         {
            title: "PIN",
            dataIndex: "PIN",
            key: "PIN",
            width: 200,
            // fixed: "left",
            ...this.getColumnSearchProps("PIN"),
            sorter: (a, b) => a.PIN.length - b.PIN.length,
            sortOrder: sortedInfo.columnKey === "PIN" && sortedInfo.order,
            ellipsis: true,
            editable: true,
            // render: text => text
         },
         {
            title: "Buyer",
            dataIndex: "buyer",
            key: "buyer",
            width: 200,
            ...this.getColumnSearchProps("buyer"),
            sorter: (a, b) => a.buyer - b.buyer,
            sortOrder: sortedInfo.columnKey === "buyer" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Total price",
            dataIndex: "totalPrice",
            key: "totalPrice",
            width: 150,
            ...this.getColumnSearchProps("totalPrice"),
            sorter: (a, b) => a.totalPrice - b.totalPrice,
            sortOrder:
               sortedInfo.columnKey === "totalPrice" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 100,
            ...this.getColumnSearchProps("status"),
            sorter: (a, b) => a.status.length - b.status.length,
            sortOrder: sortedInfo.columnKey === "status" && sortedInfo.order,
            editable: true,
            ellipsis: true,
         },
         {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            width: 120,
            ...this.getColumnSearchProps("phone"),
            sorter: (a, b) => a.phone.length - b.phone.length,
            sortOrder: sortedInfo.columnKey === "phone" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: 200,
            ...this.getColumnSearchProps("email"),
            sorter: (a, b) => a.email.length - b.email.length,
            sortOrder: sortedInfo.columnKey === "email" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Address",
            dataIndex: "address",
            key: "address",
            width: 300,
            ...this.getColumnSearchProps("address"),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Number people",
            dataIndex: "numberPeople",
            key: "numberPeople",
            width: 110,
            ...this.getColumnSearchProps("numberPeople"),
            sorter: (a, b) => a.numberPeople.length - b.numberPeople.length,
            sortOrder:
               sortedInfo.columnKey === "numberPeople" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Number children",
            dataIndex: "numberChildren",
            key: "numberChildren",
            width: 110,
            ...this.getColumnSearchProps("numberChildren"),
            sorter: (a, b) => a.numberChildren.length - b.numberChildren.length,
            sortOrder:
               sortedInfo.columnKey === "numberChildren" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Number young",
            dataIndex: "numberYoung",
            key: "numberYoung",
            width: 110,
            ...this.getColumnSearchProps("numberYoung"),
            sorter: (a, b) => a.numberYoung.length - b.numberYoung.length,
            sortOrder:
               sortedInfo.columnKey === "numberYoung" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Number baby",
            dataIndex: "numberBaby",
            key: "numberBaby",
            width: 110,
            ...this.getColumnSearchProps("numberBaby"),
            sorter: (a, b) => a.numberBaby.length - b.numberBaby.length,
            sortOrder:
               sortedInfo.columnKey === "numberBaby" && sortedInfo.order,
            ellipsis: true,
            editable: true,
         },
         {
            title: "Traveler Type",
            dataIndex: "travelerType",
            key: "travelerType",
            width: 110,
            ...this.getColumnSearchProps("travelerType"),
            sorter: (a, b) => a.travelerType.length - b.travelerType.length,
            sortOrder:
               sortedInfo.columnKey === "travelerType" && sortedInfo.order,
            ellipsis: true,
            editable: true,
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
         // {
         //    title: "Edit",
         //    dataIndex: "edit",
         //    width: 125,
         //    key: "edit",
         //    fixed: widthClient > 768 ? "right" : "",
         //    render: (text, record) => {
         //       const { editingIdAccount } = this.state;
         //       const editable = this.isEditing(record);
         //       return (
         //          <>
         //             <Button
         //                type="primary"
         //                size="small"
         //                disabled={editingIdAccount !== ""}
         //                onClick={() => this.edit(record.idOrder)}
         //             >
         //                Edit
         //             </Button>
         //             <Button type="dashed" size="small">
         //                Cancel
         //             </Button>
         //          </>
         //       );
         //    },
         // },
         // {
         //    title: "Edit",
         //    dataIndex: "edit",
         //    width: 125,
         //    key: "edit",
         //    fixed: widthClient > 768 ? "right" : "",
         //    render: (text, record) => {
         //       const { editingIdAccount } = this.state;
         //       const editable = this.isEditing(record);
         //       return editable ? (
         //          <span>
         //             <EditableContext.Consumer>
         //                {(form) => (
         //                   <Button
         //                      size="small"
         //                      type="primary"
         //                      onClick={() => this.save(form, record.idAccount)}
         //                      style={{ marginRight: 8 }}
         //                   >
         //                      Save
         //                   </Button>
         //                )}
         //             </EditableContext.Consumer>
         //             <Popconfirm
         //                title="Sure to cancel?"
         //                onConfirm={() => this.cancel(record.idAccount)}
         //             >
         //                <Button type="dashed" size="small">
         //                   Cancel
         //                </Button>
         //             </Popconfirm>
         //          </span>
         //       ) : (
         //          <>
         //             <Button
         //                type="default"
         //                size="small"
         //                disabled={editingIdAccount !== ""}
         //                onClick={() => this.edit(record.idAccount)}
         //             >
         //                Edit
         //             </Button>
         //          </>
         //       );
         //    },
         // },
         // {
         //    title: "Delete",
         //    dataIndex: "delete",
         //    width: 70, //110
         //    key: "delete",
         //    fixed: widthClient > 768 ? "right" : "",
         //    render: (text, record) =>
         //       this.state.data.length >= 1 ? (
         //          <Popconfirm
         //             title="Sure to delete?"
         //             onConfirm={() => this.handleDelete(record)}
         //          >
         //             <Button
         //                type="danger"
         //                size="small"
         //                disabled={
         //                   record.role === "administrator" ? true : false
         //                }
         //             >
         //                Delete
         //             </Button>
         //          </Popconfirm>
         //       ) : null,
         // },
      ];

      function chooseType(type) {
         if (type === "price") return "number";
         if (type === "email" || type === "role" || type === "dateAdded")
            return "disabled";
         else return "";
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
      const { showAdd, numberPeople, numberOrderVerify } = this.state;
      const { listTour } = this.props;
      return (
         <div className="container-fluid card">
            <div style={{ marginTop: 15, marginBottom: 15, width: "100%" }}>
               <p>Chọn tour du lịch</p>
               <Select
                  onSelect={this.handleChangeSelect}
                  style={{ width: "100%" }}
               >
                  <Option value="0" key={0}>
                     - No choosen -
                  </Option>
                  {listTour.map((tour) => (
                     <Option value={tour.idTour} key={tour.idTour}>
                        {tour.titleTour}
                     </Option>
                  ))}
               </Select>
            </div>
            <div className="row">
               {/* Earnings (Monthly) Card Example */}
               <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                     <div className="card-body">
                        <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                 Tổng số người dùng đăng ký
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                 {numberPeople} Người
                              </div>
                           </div>
                           <div className="col-auto">
                              <i className="fas fa-user-check fa-2x text-success" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Earnings (Monthly) Card Example */}
               <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                     <div className="card-body">
                        <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                 Tổng đơn hàng đã thanh toán
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                 <NumberFormat
                                    value={numberOrderVerify}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={""}
                                    suffix={" VNĐ"}
                                 />
                              </div>
                           </div>
                           <div className="col-auto">
                              <i className="fas fa-dollar-sign fa-2x text-primary" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <EditableContext.Provider value={this.props.form}>
               <Table
                  rowKey={"idAccount"}
                  components={components}
                  pagination={{
                     onChange: this.cancel,
                  }}
                  // dataSource={data}
                  dataSource={state.hasData ? data : null}
                  columns={columns.map((item, index) => ({
                     ...item,
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
                  // expandedRowRender={this.expandedRowRender}
               />
            </EditableContext.Provider>
         </div>
      );
   }
}

const OrderTablesContainer = Form.create()(EditableTable);

OrderTablesContainer.propTypes = {
   classes: PropTypes.object,
   accountAllActions: PropTypes.shape({
      fetchListAccountRequest: PropTypes.func,
      fetchPostAccountRequest: PropTypes.func,
      fetchDeleteAccountRequest: PropTypes.func,
      fetchPatchAccountRequest: PropTypes.func,
   }),
   listOrder: PropTypes.array,
   listTour: PropTypes.array,
};

const mapStateToProps = (state) => {
   return {
      listOrder: state.order.listOrder,
      listTour: state.tour.listTour,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      accountAllActions: bindActionCreators(accountOrders, dispatch),
      tourAllActions: bindActionCreators(tourActions, dispatch),
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(OrderTablesContainer);
