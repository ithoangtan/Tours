import React from "react";

import moment from "moment";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as accountActions from "../../_actions/account.actions";

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
   Icon
} from "antd";

import TableNewRow from "./tableNewAccount";
import Cookies from "js-cookie";
import AvatarChange from "./AvartarChange";

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
const scroll = { x: 2200, y: 400 };
const pagination = { position: "both" };

class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowsDescribe: 1,
         data: null,
         editingIdAccount: "",
         count: this.props.listAccount.length,
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

   isEditing = record => record.idAccount === this.state.editingIdAccount;

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
         const index = newData.findIndex(item => idAccount === item.idAccount);
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row
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
   handleDelete = record => {
      const data = [...this.state.data];
      //Gọi API xóa dưới CSDL
      const { accountAllActions } = this.props;
      const { fetchDeleteAccountRequest } = accountAllActions;
      fetchDeleteAccountRequest(record);
      //Kết thúc gọi API xóa dươi CSDL
      this.setState({
         data: data.filter(item => item.idAccount !== record.idAccount)
      });
   };

   handleShowAdd = () => {
      this.setState({ showAdd: true });
   };
   handleAdd = newAccount => {
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
         dateAdded: new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, "-")
      };
      //Gọi API create dưới CSDL
      const { accountAllActions } = this.props;
      const { fetchPostAccountRequest } = accountAllActions;
      fetchPostAccountRequest(newData);
      //Kết thúc gọi API create dươi CSDL
      this.setState({
         data: [newData, ...data],
         count: count + 1,
         pagination: { total: data.length }
      });
   };

   handleSaveOnChange = row => {
      const newData = [...this.state.data];
      const index = newData.findIndex(item => row.idAccount === item.idAccount);
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
      const { accountAllActions } = this.props;
      const { fetchListAccountImageRequest } = accountAllActions;
      fetchListAccountImageRequest();
      this.fetch();
   }
   handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
         pagination: pager
      });
      this.fetch({
         accounts: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters
      });
   };

   fetch = async (params = {}) => {
      this.setState({ loading: true });
      await reqwest({
         url: `${API_ENDPOINT}/accounts`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         data: {
            ...params
         },
         type: "json"
      }).then(data => {
         const pagination = { ...this.state.pagination };
         pagination.total = data.length;
         this.setState({
            loading: false,
            data: data,
            //data: listAccount
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

   //Expanded Row Render
   expandedRowRender = record => {
      return <AvatarChange record={record} {...this.props} />;
   };

   handleCancelPreview = e => {
      this.setState({
         visiblePreview: false
      });
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
            dataIndex: "idAccount",
            key: "idAccount",
            width: 50,
            // fixed: "left",
            ellipsis: true,
            editable: true
            // render: text => text
         },
         {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 200,
            // fixed: "left",
            ...this.getColumnSearchProps("name"),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
            ellipsis: true,
            editable: true
            // render: text => text
         },
         {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: 250,
            ...this.getColumnSearchProps("email"),
            sorter: (a, b) => a.email - b.email,
            sortOrder: sortedInfo.columnKey === "email" && sortedInfo.order,
            ellipsis: true,
            editable: true
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
            editable: true
         },
         {
            title: "Role",
            dataIndex: "role",
            key: "role",
            width: 100,
            ...this.getColumnSearchProps("role"),
            sorter: (a, b) => a.role.length - b.role.length,
            sortOrder: sortedInfo.columnKey === "role" && sortedInfo.order,
            editable: true,
            ellipsis: true
         },

         {
            title: "Birthdate",
            dataIndex: "birthdate",
            key: "birthdate",
            width: 120,
            ...this.getColumnSearchProps("birthdate"),
            sorter: (a, b) => a.birthdate.length - b.birthdate.length,
            sortOrder: sortedInfo.columnKey === "birthdate" && sortedInfo.order,
            ellipsis: true,
            editable: true,
            render: text => {
               return moment(text).format("DD/MM/YYYY");
            }
         },
         {
            title: "Username",
            dataIndex: "username",
            key: "username",
            width: 200,
            ...this.getColumnSearchProps("username"),
            sorter: (a, b) => a.username - b.username,
            sortOrder: sortedInfo.columnKey === "username" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },

         {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
            width: 110,
            ...this.getColumnSearchProps("gender"),
            sorter: (a, b) => a.gender.length - b.gender.length,
            sortOrder: sortedInfo.columnKey === "gender" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Vefiry",
            dataIndex: "verify",
            key: "verify",
            width: 100,
            ...this.getColumnSearchProps("verify"),
            sorter: (a, b) => a.verify.length - b.verify.length,
            sortOrder: sortedInfo.columnKey === "verify" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Type",
            dataIndex: "type",
            key: "type",
            width: 100,
            ...this.getColumnSearchProps("type"),
            sorter: (a, b) => a.type.length - b.type.length,
            sortOrder: sortedInfo.columnKey === "type" && sortedInfo.order,
            ellipsis: true,
            editable: true
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
            title: "Website",
            dataIndex: "website",
            key: "website",
            width: 200,
            ...this.getColumnSearchProps("website"),
            sorter: (a, b) => a.website.length - b.website.length,
            sortOrder: sortedInfo.columnKey === "website" && sortedInfo.order,
            ellipsis: true,
            editable: true
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
            editable: true
         },

         {
            title: "Edit",
            dataIndex: "edit",
            width: 125,
            key: "edit",
            fixed: widthClient > 768 ? "right" : "",
            render: (text, record) => {
               const { editingIdAccount } = this.state;
               const editable = this.isEditing(record);
               return editable ? (
                  <span>
                     <EditableContext.Consumer>
                        {form => (
                           <Button
                              size="small"
                              type="primary"
                              onClick={() => this.save(form, record.idAccount)}
                              style={{ marginRight: 8 }}
                           >
                              Save
                           </Button>
                        )}
                     </EditableContext.Consumer>
                     <Popconfirm
                        title="Sure to cancel?"
                        onConfirm={() => this.cancel(record.idAccount)}
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
                        disabled={editingIdAccount !== ""}
                        onClick={() => this.edit(record.idAccount)}
                     >
                        Edit
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
                     Add New Admin Account (not support user account)
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
                  rowKey={"idAccount"}
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

const AccountTablesContainer = Form.create()(EditableTable);

AccountTablesContainer.propTypes = {
   classes: PropTypes.object,
   accountAllActions: PropTypes.shape({
      fetchListAccountRequest: PropTypes.func,
      fetchPostAccountRequest: PropTypes.func,
      fetchDeleteAccountRequest: PropTypes.func,
      fetchPatchAccountRequest: PropTypes.func
   }),
   listAccount: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listAccount: state.account.listAccount
   };
};
const mapDispatchToProps = dispatch => {
   return {
      accountAllActions: bindActionCreators(accountActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là accountActions ở bên account.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(AccountTablesContainer);
