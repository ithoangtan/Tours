import React from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Button } from "antd";

const data = [];
for (let i = 0; i < 100; i++) {
   data.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`
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
class EditableTable extends React.Component {
   constructor(props) {
      super(props);
      this.state = { data, editingKey: "", count: data.length };
      this.columns = [
         {
            title: "name",
            dataIndex: "name",
            width: "15%",
            editable: true
         },
         {
            title: "age",
            dataIndex: "age",
            width: "5%",
            editable: true
         },
         {
            title: "address",
            dataIndex: "address",
            width: "",
            editable: true
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

   render() {
      const { data } = this.state;
      const components = {
         body: {
            cell: EditableCell
         }
      };

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
            <EditableContext.Provider value={this.props.form}>
               <Table
                  components={components}
                  bordered
                  dataSource={data}
                  columns={columns}
                  rowClassName={() => "editable-row"}
                  pagination={{
                     onChange: this.cancel
                  }}
               />
            </EditableContext.Provider>
         </div>
      );
   }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;
