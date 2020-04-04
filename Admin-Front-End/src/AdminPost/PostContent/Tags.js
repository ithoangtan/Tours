import React, { Component } from "react";

import { Form, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { API_ENDPOINT, XHTML_LOADING } from "../../_constants/index.constants";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as postActions from "../../_actions/post.actions";

import reqwest from "reqwest";
import Cookies from "js-cookie";

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

class TagsPost extends Component {
   state = {
      tags: [],
      checkedListTags: [],
      indeterminateTags: true,
      checkAllTags: false,
   };

   componentWillMount() {
      reqwest({
         url: `${API_ENDPOINT}/tags`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         type: "json",
      }).then((data) => {
         let tags = [];
         for (let i = 0; i < data.length; i++) {
            tags.push(data[i].name);
         }
         this.setState({
            tags,
         });
      });

      const { checkTags } = this.props;
      if (checkTags?.length !== 0)
         this.setState({
            checkedListTags: JSON.parse(checkTags),
         });
   }

   onChangeTags = (checkedListTags) => {
      this.setState({
         checkedListTags,
         indeterminateTags:
            !!checkedListTags.length &&
            checkedListTags.length < this.state.tags.length,
         checkAllTags: checkedListTags.length === this.state.tags.length,
      });
   };

   onCheckAllChangeTags = (e) => {
      this.setState({
         checkedListTags: e.target.checked ? this.state.tags : [],
         indeterminateTags: false,
         checkAllTags: e.target.checked,
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      // call btn parent
      const { idPost, titlePost } = this.props;
      // Call API save data
      let newTagsPost = {
         idPost,
         titlePost,
         tags: this.state.checkedListTags,
      };
      const { postAllActions } = this.props;
      const { fetchPatchPostRequest } = postAllActions;
      fetchPatchPostRequest(newTagsPost);
   };

   render() {
      if (this.state.tags.length === 0) return XHTML_LOADING;
      const formItemLayout = {
         labelCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 4 },
         },
         wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 4 },
         },
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
                              },
                           ],
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
                                    options={this.state.tags}
                                    value={this.state.checkedListTags}
                                    onChange={this.onChangeTags}
                                 />
                              </div>
                           </>
                        )}
                     </Form.Item>
                  </div>
               </div>
               <div className="ht-d-flex-row-end-end">
                  <Link to="/admin/tour/tags-and-services">
                     <Button type="default"> Thêm Tags mới</Button>
                  </Link>
                  <Button type="primary" className="ml-2" htmlType="submit">
                     Lưu Các Thẻ
                  </Button>
               </div>
            </div>
         </Form>
      );
   }
}

const WrappedTagsPostForm = Form.create({ name: "tags_post" })(TagsPost);

WrappedTagsPostForm.propTypes = {
   classes: PropTypes.object,
   postAllActions: PropTypes.shape({
      fetchPatchPostRequest: PropTypes.func,
   }),
};

const mapDispatchToProps = (dispatch) => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch),
   };
};
export default connect(null, mapDispatchToProps)(WrappedTagsPostForm);
