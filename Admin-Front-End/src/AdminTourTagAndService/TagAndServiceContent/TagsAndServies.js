import React, { Component } from "react";

import { Form, Checkbox } from "antd";

const plainOptionsTags = [
   "Cảnh đẹp",
   "Ẩm thực ngon",
   "Khám phá",
   "... load ở database"
];
const defaultCheckedListTags = ["Cảnh đẹp"];
const plainOptionsServices = [
   "Đưa đón tận nơi",
   "Cho thuê xe máy",
   "Hỗ trợ người khuyết tât",
   "... load ở database"
];
const defaultCheckedListServices = ["Đưa đón tận nơi"];

class TagsAndServices extends Component {
   state = {
      checkedListTags: defaultCheckedListTags,
      indeterminateTags: true,
      checkAllTags: false,
      checkedListServices: defaultCheckedListServices,
      indeterminateServices: true,
      checkAllServices: false
   };

   onChangeTags = checkedListTags => {
      this.setState({
         checkedListTags,
         indeterminateTags:
            !!checkedListTags.length &&
            checkedListTags.length < plainOptionsTags.length,
         checkAllTags: checkedListTags.length === plainOptionsTags.length
      });
   };

   onCheckAllChangeTags = e => {
      this.setState({
         checkedListTags: e.target.checked ? plainOptionsTags : [],
         indeterminateTags: false,
         checkAllTags: e.target.checked
      });
   };

   onChangeServices = checkedListServices => {
      this.setState({
         checkedListServices,
         indeterminateServices:
            !!checkedListServices.length &&
            checkedListServices.length < plainOptionsServices.length,
         checkAllServices:
            checkedListServices.length === plainOptionsServices.length
      });
   };

   onCheckAllChangeServices = e => {
      this.setState({
         checkedListServices: e.target.checked ? plainOptionsServices : [],
         indeterminateServices: false,
         checkAllServices: e.target.checked
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      // call btn parent
   };

   render() {
      const formItemLayout = {
         labelCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 4 }
         },
         wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 4 }
         }
      };
      const { getFieldDecorator } = this.props.form;
      return (
         <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="ant-form-new-tour"
         >
            <div className="ht-d-flex-col">
               <div className="ht-new-tour col-md-12">
                  <div className="ht-new-tour-right col-md-12">
                     <Form.Item
                        label={`Tags: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-0"
                     >
                        {getFieldDecorator(`tags`, {
                           rules: [
                              {
                                 //  required: true,
                                 //   message: "Select tags!"
                              }
                           ]
                        })(
                           <>
                              <div className="ht-d-flex">
                                 <Checkbox
                                    indeterminate={this.state.indeterminateTags}
                                    onChange={this.onCheckAllChangeTags}
                                    checked={this.state.checkAllTags}
                                 >
                                    <strong>Chọn tất cả</strong>
                                 </Checkbox>
                                 <Checkbox.Group
                                    options={plainOptionsTags}
                                    value={this.state.checkedListTags}
                                    onChange={this.onChangeTags}
                                 />
                              </div>
                           </>
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Services: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-0"
                     >
                        {getFieldDecorator(`services`, {
                           rules: [
                              {
                                 //   required: true,
                                 // message: "Select services!"
                              }
                           ]
                        })(
                           <>
                              <div className="ht-d-flex">
                                 <Checkbox
                                    indeterminate={
                                       this.state.indeterminateServices
                                    }
                                    onChange={this.onCheckAllChangeServices}
                                    checked={this.state.checkAllServices}
                                 >
                                    <strong>Chọn tất cả</strong>
                                 </Checkbox>
                                 <Checkbox.Group
                                    options={plainOptionsServices}
                                    value={this.state.checkedListServices}
                                    onChange={this.onChangeServices}
                                 />
                              </div>
                           </>
                        )}
                     </Form.Item>
                  </div>
               </div>
            </div>
         </Form>
      );
   }
}

export default TagsAndServices = Form.create({ name: "new_tour" })(
   TagsAndServices
);
