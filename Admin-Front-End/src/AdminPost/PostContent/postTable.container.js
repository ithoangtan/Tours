import React from "react";

import moment from "moment";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../_actions/post.actions";

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
   Modal
} from "antd";

import TableGallery from "./tableGallery";
import TableNewRow from "./tableNewPost";
import Cookies from "js-cookie";
import PostPreview from "./postPreview";

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

let idPostNew = 0;

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
const scroll = { x: 1400, y: 400 };
const pagination = { position: "both" };

class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowsDescribe: 1,
         data: null,
         editingidPost: "",
         count: this.props.listPost.length,
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

   isEditing = record => record.idPost === this.state.editingidPost;

   cancel = () => {
      this.setState({ editingidPost: "" });
   };

   save(form, idPost) {
      const { postAllActions } = this.props;
      const { fetchPatchPostRequest } = postAllActions;

      form.validateFields((error, row) => {
         if (error) {
            return;
         }
         const newData = [...this.state.data];
         const index = newData.findIndex(item => idPost === item.idPost);
         if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
               ...item,
               ...row
            });
            //Gọi API update dưới CSDL
            fetchPatchPostRequest(row);
            console.log(row);
            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingidPost: "" });
         } else {
            newData.push(row);
            //Gọi API update dưới CSDL
            console.log(row);

            fetchPatchPostRequest(row);
            //Kết thúc gọi API update dươi CSDL
            this.setState({ data: newData, editingidPost: "" });
         }
      });
   }

   edit(idPost) {
      this.setState({ editingidPost: idPost });
   }
   handleDelete = record => {
      const data = [...this.state.data];
      //Gọi API xóa dưới CSDL
      const { postAllActions } = this.props;
      const { fetchDeletePostRequest } = postAllActions;
      fetchDeletePostRequest(record);
      //Kết thúc gọi API xóa dươi CSDL
      this.setState({
         data: data.filter(item => item.idPost !== record.idPost)
      });
   };

   handleShowAdd = () => {
      this.setState({ showAdd: true });
   };
   handleAdd = newPost => {
      const { count, data } = this.state;
      if (idPostNew === 0) idPostNew = data[data.length - 1].idPost;
      idPostNew++;

      const newData = {
         idPost: idPostNew,
         titlePost: newPost.titlePost,
         views: newPost.views,
         vote: newPost.vote,
         dateAdded: new Date()
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, "-"),
         describe: newPost.describe,
         address: newPost.address,
         vocationTime: newPost.vocationTime,
         idAccount: newPost.idAccount
      };
      //Gọi API create dưới CSDL
      const { postAllActions } = this.props;
      const { fetchPostPostRequest } = postAllActions;
      fetchPostPostRequest(newData);
      //Kết thúc gọi API create dươi CSDL
      this.setState({
         data: [newData, ...data],
         count: count + 1,
         pagination: { total: data.length }
      });
   };

   handleSaveOnChange = row => {
      const newData = [...this.state.data];
      const index = newData.findIndex(item => row.idPost === item.idPost);
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
      const { postAllActions } = this.props;
      const { fetchListPostImageRequest } = postAllActions;
      fetchListPostImageRequest();
      this.fetch();
   }
   handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
         pagination: pager
      });
      this.fetch({
         posts: pagination.pageSize,
         page: pagination.current,
         sortField: sorter.field,
         sortOrder: sorter.order,
         ...filters
      });
   };

   fetch = async (params = {}) => {
      this.setState({ loading: true });
      await reqwest({
         url: `${API_ENDPOINT}/posts`,
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
      const { listImagePost } = this.props;
      return (
         <TableGallery
            record={record}
            listImage={listImagePost}
            {...this.props}
         />
      );
   };

   showModalPreview(record) {
      console.log(record);

      const { listImagePost } = this.props;

      const listImageFilterIdPost = listImagePost.filter(
         image => image.idPost === record.idPost
      );

      console.log(listImageFilterIdPost);

      Modal.info({
         style: { top: "30px" },
         width: 400,
         title: "This is a item post at category posts",
         wrapClassName: "",
         content: (
            <PostPreview post={record} listImagePost={listImageFilterIdPost} />
         )
      });
   }

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
            dataIndex: "idPost",
            key: "idPost",
            width: 50,
            // fixed: "left",
            ellipsis: true,
            editable: true
            // render: text => text
         },
         {
            title: "Title",
            dataIndex: "titlePost",
            key: "titlePost",
            width: 300,
            // fixed: "left",
            ...this.getColumnSearchProps("titlePost"),
            sorter: (a, b) => a.titlePost.length - b.titlePost.length,
            sortOrder: sortedInfo.columnKey === "titlePost" && sortedInfo.order,
            ellipsis: true,
            editable: true
            // render: text => text
         },
         {
            title: "Describe",
            dataIndex: "describe",
            key: "describe",
            width: 400,
            ...this.getColumnSearchProps("describe"),
            sorter: (a, b) => a.describe.length - b.describe.length,
            sortOrder: sortedInfo.columnKey === "describe" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         // {
         //    title: "Status",
         //    dataIndex: "status",
         //    key: "status",
         //    width: 100,
         //    ...this.getColumnSearchProps("status"),
         //    sorter: (a, b) => a.status.length - b.status.length,
         //    sortOrder: sortedInfo.columnKey === "status" && sortedInfo.order,
         //    ellipsis: true,
         //    editable: true
         // },
         // {
         //    title: "Type",
         //    dataIndex: "type",
         //    key: "type",
         //    width: 100,
         //    ...this.getColumnSearchProps("type"),
         //    sorter: (a, b) => a.type.length - b.type.length,
         //    sortOrder: sortedInfo.columnKey === "type" && sortedInfo.order,
         //    ellipsis: true,
         //    editable: true
         // },
         {
            title: "View",
            dataIndex: "views",
            key: "views",
            width: 90,
            ...this.getColumnSearchProps("views"),
            sorter: (a, b) => a.views.length - b.views.length,
            sortOrder: sortedInfo.columnKey === "views" && sortedInfo.order,
            ellipsis: true,
            editable: true
         },
         {
            title: "Vote",
            dataIndex: "vote",
            key: "vote",
            width: 90,
            ...this.getColumnSearchProps("vote"),
            sorter: (a, b) => a.vote.length - b.vote.length,
            sortOrder: sortedInfo.columnKey === "vote" && sortedInfo.order,
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

         // {
         //    title: "IDAcc",
         //    dataIndex: "idAccount",
         //    key: "idAccount",
         //    width: 60,
         //    // fixed: "left",
         //    ellipsis: true,
         //    editable: true
         //    // render: text => text
         // },
         {
            title: "Edit",
            dataIndex: "edit",
            width: 125,
            key: "edit",
            fixed: widthClient > 768 ? "right" : "",
            render: (text, record) => {
               const { editingidPost } = this.state;
               const editable = this.isEditing(record);
               return editable ? (
                  <span>
                     <EditableContext.Consumer>
                        {form => (
                           <Button
                              size="small"
                              type="primary"
                              onClick={() => this.save(form, record.idPost)}
                              style={{ marginRight: 8 }}
                           >
                              Save
                           </Button>
                        )}
                     </EditableContext.Consumer>
                     <Popconfirm
                        title="Sure to cancel?"
                        onConfirm={() => this.cancel(record.idPost)}
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
                        disabled={editingidPost !== ""}
                        onClick={() => this.edit(record.idPost)}
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
         else if (type === "views") return "number";
         else if (type === "vote") return "number";
         else if (type === "status") return "select";
         else return "text";
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
                     Add New Post
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
                  rowKey={"idPost"}
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
   postAllActions: PropTypes.shape({
      fetchListPostRequest: PropTypes.func,
      fetchPostPostRequest: PropTypes.func,
      fetchDeletePostRequest: PropTypes.func,
      fetchPatchPostRequest: PropTypes.func,
      fetchListPostImageRequest: PropTypes.func
   }),
   listPost: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listPost: state.post.listPost,
      listImagePost: state.post.listImagePost
   };
};
const mapDispatchToProps = dispatch => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là postActions ở bên post.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
