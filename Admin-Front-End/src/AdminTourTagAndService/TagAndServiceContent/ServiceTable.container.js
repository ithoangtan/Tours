import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as serviceActions from "../../_actions/service.actions";

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

import TableNewService from "./TableNewService";

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
         return <InputNumber size="small" />;
      }
      return <Input size="small" />;
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
const footer = () => "Services cho những tour";
const scroll = { x: 0, y: 400 };
const pagination = { position: "both" };

class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowsDescribe: 1,
         size: "default",
         showHeader,
         footer,
         bordered: true,
         tableLayout: "auto",
         // hasData: true,
         data: null,
         editingIdServices: "",
         count: this.props.listService.length,
         loading: false,
         sortedInfo: null,
         filteredInfo: null,
         searchText: "",
         pagination,
         showAdd: false,
         // visiblePreviewService: false,
         ellipsis: false,
         // title,
         // rowSelection: {},
         scroll: scroll
         //add Show
      };
   }

   isEditing = record => record.idServices === this.state.editingIdServices;

   cancel = () => {
      this.setState({ editingIdServices: "" });
   };

   save(form, idServices) {
      const { serviceAllActions } = this.props;
      const { fetchPatchServicesRequest } = serviceAllActions;

      form.validateFields((error, row) => {
         if (error) {
            return;
         }
         const newData = [...this.state.data];
         const index = newData.findIndex(
            item => idServices === item.idServices
         );
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row
            });
            //Gọi API update dưới CSDL
            fetchPatchServicesRequest(row);

            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingIdServices: "" });
         } else {
            newData.push(row);
            //Gọi API update dưới CSDL
            fetchPatchServicesRequest(row);
            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingIdServices: "" });
         }
      });
   }

   edit(idServices) {
      this.setState({ editingIdServices: idServices });
   }
   handleDelete = record => {
      const data = [...this.state.data];
      //Gọi API xóa dưới CSDL
      const { serviceAllActions } = this.props;
      const { fetchDeleteServicesRequest } = serviceAllActions;
      fetchDeleteServicesRequest(record);
      //Kết thúc gọi API xóa dươi CSDL
      this.setState({
         data: data.filter(item => item.idServices !== record.idServices)
      });
   };

   handleShowAdd = () => {
      this.setState({ showAdd: true });
   };
   handleAdd = newService => {
      console.log(newService);

      const { count, data } = this.state;
      const newData = {
         idServices:
            newService.idServices | (data.length !== 0)
               ? data[data.length - 1].idServices + 1
               : 0,
         name: newService.name
      };
      //Gọi API create dưới CSDL
      const { serviceAllActions } = this.props;
      const { fetchPostServicesRequest } = serviceAllActions;
      fetchPostServicesRequest(newData);
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
         item => row.idServices === item.idServices
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
      this.fetch();
   }

   handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
         pagination: pager
      });
      this.fetch({
         services: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters
      });
   };

   fetch = async (params = {}) => {
      this.setState({ loading: true });
      await reqwest({
         url: `${API_ENDPOINT}/services`,
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
         // const { listService } = this.props;

         this.setState({
            loading: false,
            data: data,
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

   // handleDataChange = hasData => {
   //    this.setState({ hasData });
   // };

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

   render() {
      const { state } = this;
      const components = {
         body: {
            cell: EditableCell
         },
         header: {
            cell: ResizeableTitle
         }
      };

      let { sortedInfo } = this.state;
      // let { filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      // filteredInfo = filteredInfo || {};

      const widthClient = window.outerWidth;

      this.columns = [
         {
            title: "ID",
            dataIndex: "idServices",
            key: "idServices",
            width: 50,
            ellipsis: true,
            editable: true
         },
         {
            title: "Name Service",
            dataIndex: "name",
            key: "name",
            // width: 350,
            ...this.getColumnSearchProps("name"),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
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
               const { editingIdServices } = this.state;
               const editable = this.isEditing(record);
               return editable ? (
                  <span>
                     <EditableContext.Consumer>
                        {form => (
                           <Button
                              size="small"
                              type="primary"
                              onClick={() => this.save(form, record.idServices)}
                              style={{ marginRight: 8 }}
                           >
                              Save
                           </Button>
                        )}
                     </EditableContext.Consumer>
                     <Popconfirm
                        title="Sure to cancel?"
                        onConfirm={() => this.cancel(record.idServices)}
                     >
                        <Button type="dashed" size="small">
                           Cancel
                        </Button>
                     </Popconfirm>
                  </span>
               ) : (
                  <div className="ht-d-flex-row-center-center">
                     <Button
                        type="default"
                        size="small"
                        disabled={editingIdServices !== ""}
                        onClick={() => this.edit(record.idServices)}
                     >
                        Edit
                     </Button>
                     {/* <Button
                        size="small"
                        type="primary"
                        onClick={() => this.showModalPreviewService(record)}
                        style={{ marginLeft: 6 }}
                     >
                        Preview
                     </Button> */}
                  </div>
               );
            }
         },
         {
            title: "Delete",
            dataIndex: "delete",
            width: 70,
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
      const { showAdd, data } = this.state;

      return (
         <div className="container-fluid card m-2">
            {showAdd ? (
               <TableNewService
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
                     Add New Service
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
                  rowKey={"idServices"}
                  components={components}
                  pagination={{
                     onChange: this.cancel
                  }}
                  dataSource={data}
                  // dataSource={state.hasData ? data : null}
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
                  // expandedRowRender={this.expandedRowRender}
               />
            </EditableContext.Provider>
         </div>
      );
   }
}

const ServiceTablesContainer = Form.create()(EditableTable);

ServiceTablesContainer.propTypes = {
   classes: PropTypes.object,
   serviceAllActions: PropTypes.shape({
      fetchListServicesRequest: PropTypes.func,
      fetchPostServicesRequest: PropTypes.func,
      fetchDeleteServicesRequest: PropTypes.func,
      fetchPatchServicesRequest: PropTypes.func
   }),
   listService: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listService: state.service.listService
   };
};
const mapDispatchToProps = dispatch => {
   return {
      serviceAllActions: bindActionCreators(serviceActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là serviceActions ở bên service.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ServiceTablesContainer);
