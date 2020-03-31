import React, { Component } from "react";

import { Form, Checkbox, Button, Spin } from "antd";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { API_ENDPOINT } from "../../_constants/index.constants";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as tourActions from "../../_actions/tour.actions";

import reqwest from "reqwest";
import Cookies from "js-cookie";

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

class TagsAndServices extends Component {
   state = {
      tags: [],
      checkedListTags: [],
      indeterminateTags: true,
      checkAllTags: false,

      services: [],
      checkedListServices: [],
      indeterminateServices: true,
      checkAllServices: false
   };

   fetch = async (params = {}) => {
      await reqwest({
         url: `${API_ENDPOINT}/tags`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         data: {
            ...params
         },
         type: "json"
      }).then(data => {
         let tags = [];
         for (let i = 0; i < data.length; i++) {
            tags.push(data[i].name);
         }
         this.setState({
            tags
         });
      });
      await reqwest({
         url: `${API_ENDPOINT}/services`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         data: {
            ...params
         },
         type: "json"
      }).then(data => {
         let services = [];
         for (let i = 0; i < data.length; i++) {
            services.push(data[i].name);
         }
         this.setState({
            services
         });
      });
   };

   componentWillMount() {
      this.fetch();
      const { checkTags, checkServices } = this.props;

      this.setState({
         checkedListTags: JSON.parse(checkTags),
         checkedListServices: JSON.parse(checkServices)
      });
   }

   onChangeTags = checkedListTags => {
      this.setState({
         checkedListTags,
         indeterminateTags:
            !!checkedListTags.length &&
            checkedListTags.length < this.state.tags.length,
         checkAllTags: checkedListTags.length === this.state.tags.length
      });
   };

   onCheckAllChangeTags = e => {
      this.setState({
         checkedListTags: e.target.checked ? this.state.tags : [],
         indeterminateTags: false,
         checkAllTags: e.target.checked
      });
   };

   onChangeServices = checkedListServices => {
      this.setState({
         checkedListServices,
         indeterminateServices:
            !!checkedListServices.length &&
            checkedListServices.length < this.state.services.length,
         checkAllServices:
            checkedListServices.length === this.state.services.length
      });
   };

   onCheckAllChangeServices = e => {
      this.setState({
         checkedListServices: e.target.checked ? this.state.services : [],
         indeterminateServices: false,
         checkAllServices: e.target.checked
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      const { idTour } = this.props;
      // Call API save data

      let newTagsAndServicesTour = {
         idTour,
         tags: JSON.stringify(this.state.checkedListTags),
         services: JSON.stringify(this.state.checkedListServices)
      };
      const { tourAllActions } = this.props;
      const { fetchPutTagsAndServicesRequest } = tourAllActions;
      fetchPutTagsAndServicesRequest(newTagsAndServicesTour);
   };

   render() {
      const xhtml = (
         <div
            className="container col-md-12 ht-d-flex-col-center-center"
            style={{ width: "100%", height: "20vh" }}
         >
            <Spin tip="Loading..." />
         </div>
      );

      if (this.state.tags.length === 0) return xhtml;
      if (this.state.services.length === 0) return xhtml;

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
                                    options={this.state.tags}
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
                                    options={this.state.services}
                                    value={this.state.checkedListServices}
                                    onChange={this.onChangeServices}
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
                     Lưu Thẻ và Dịch vụ
                  </Button>
               </div>
            </div>
         </Form>
      );
   }
}

const WrappedTagsAndServicesForm = Form.create({ name: "tags_and_services" })(
   TagsAndServices
);

WrappedTagsAndServicesForm.propTypes = {
   classes: PropTypes.object,
   tourAllActions: PropTypes.shape({
      fetchPutTagsAndServicesRequest: PropTypes.func
   })
};

const mapDispatchToProps = dispatch => {
   return {
      tourAllActions: bindActionCreators(tourActions, dispatch)
   };
};
export default connect(null, mapDispatchToProps)(WrappedTagsAndServicesForm);
