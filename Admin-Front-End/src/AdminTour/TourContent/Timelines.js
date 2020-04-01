import React from "react";
import { Form, Input, Icon, Button, DatePicker, Spin } from "antd";
import TextArea from "antd/lib/input/TextArea";

import reqwest from "reqwest";
import Cookies from "js-cookie";
import { API_ENDPOINT } from "../../_constants/index.constants";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as timelineActions from "../../_actions/timeline.actions";

import moment from "moment";

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

let id = 0;

class Timeline extends React.Component {
   state = {
      timelinesByIdTour: []
   };

   fetch = async (params = {}) => {
      const { idTour } = this.props;
      reqwest({
         url: `${API_ENDPOINT}/timeline?idTour=${idTour}`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
         data: {
            ...params
         },
         type: "json"
      }).then(data => {
         this.setState({ timelinesByIdTour: data });
      });
   };

   componentWillMount() {
      this.fetch();
   }

   remove = k => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 1) {
         return;
      }

      // can use data-binding to set
      form.setFieldsValue({
         keys: keys.filter(key => key !== k)
      });
   };

   add = () => {
      const { form } = this.props;

      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      const nextKeys = keys.concat(id++);
      // can use data-binding to set

      // important!  notify form to detect changes
      form.setFieldsValue({
         keys: nextKeys
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            // const { keys, names } = values;
            console.log("Received values of form: ", values);
            // const { idTour, titleTour } = this.props;
            // // Call API save data
            // let newTimeLine = {
            //    idTour,
            //    titleTour,
            //    tags: this.state.checkedListTags,
            //    services: this.state.checkedListServices
            // };
            // const { timelineAllActions } = this.props;
            // const { fetchPatchTimelineRequest } = timelineAllActions;
            // fetchPatchTimelineRequest(newTimeLine);
         }
      });
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

      if (this.state.timelinesByIdTour.length === 0) return xhtml;

      const { getFieldDecorator, getFieldValue } = this.props.form;
      const formItemLayout = {
         labelCol: {
            span: 24
         },
         wrapperCol: {
            span: 24
         }
      };
      const formItemLayoutWithOutLabel = {
         wrapperCol: {
            span: 24
         }
      };
      getFieldDecorator("keys", {
         initialValue: this.state.timelinesByIdTour[0]
      });
      const keys = getFieldValue("keys");
      const formItemsDatetime = keys.map((k, index) => {
         return (
            <Form.Item
               {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
               label={index === 0 ? "Mốc thời gian" : ""}
               required={true}
               key={k}
            >
               {getFieldDecorator(`date[${k}]`, {
                  rules: [
                     {
                        type: "object",
                        required: true,
                        whitespace: true,
                        message: "Vui lòng chọn mốc thời gian"
                     }
                  ],
                  initialValue: moment(k.date)
               })(
                  <DatePicker
                     format="YYYY-MM-DD HH:mm:ss"
                     showTime
                     placeholder="Mốc thời gian"
                     style={{ width: "90%", marginRight: 8 }}
                  />
               )}
               {keys.length > 1 ? (
                  <Icon
                     className="dynamic-delete-button"
                     type="minus-circle-o"
                     onClick={() => this.remove(k)}
                  />
               ) : null}
            </Form.Item>
         );
      });
      const formItemsTitle = keys.map((k, index) => (
         <Form.Item
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
            label={index === 0 ? "Tiêu đề" : ""}
            required={true}
            key={k}
         >
            {getFieldDecorator(`title[${k}]`, {
               validateTrigger: ["onChange", "onBlur"],
               rules: [
                  {
                     required: true,
                     whitespace: true,
                     message: "Vui lòng ghi tiêu đề"
                  }
               ],
               initialValue: k.title
            })(
               <Input
                  style={{ width: "92%", marginRight: 8 }}
                  placeholder="Tiêu đề cho mốc thời gian"
               />
            )}
            {keys.length > 1 ? (
               <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => this.remove(k)}
               />
            ) : null}
         </Form.Item>
      ));
      const formItemsHidden = keys.map((k, index) => <div></div>);
      const formItemsDescription = keys.map((k, index) => (
         <Form.Item
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
            label={index === 0 ? "Mô tả" : ""}
            required={true}
            key={k}
         >
            {getFieldDecorator(`description[${k}]`, {
               validateTrigger: ["onChange", "onBlur"],
               rules: [
                  {
                     required: true,
                     whitespace: true,
                     message: "Vui lòng viết thêm miêu tả."
                  }
               ],
               initialValue: k.description
            })(
               <TextArea
                  rows={1}
                  style={{ width: "92%", marginRight: 8 }}
                  placeholder="Mô tả cho mốc thời gian"
               />
            )}
            {keys.length > 1 ? (
               <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => this.remove(k)}
               />
            ) : null}
         </Form.Item>
      ));
      return (
         <Form
            onSubmit={this.handleSubmit}
            className="card pt-2 pb-2 box-shadow"
         >
            {formItemsHidden}
            <div className="ht-d-flex-row-start-start">
               <div className="ht-timeline-date col-md-3">
                  {formItemsDatetime}
               </div>
               <div className="ht-timeline-date col-md-4">{formItemsTitle}</div>
               <div className="ht-timeline-date col-md-5">
                  {formItemsDescription}
               </div>
            </div>
            <Form.Item {...formItemLayoutWithOutLabel}>
               <div className="ht-d-flex-row-center-center">
                  <Button
                     type="dashed"
                     onClick={this.add}
                     style={{ width: "80%" }}
                     className="box-shadow"
                  >
                     <Icon type="plus" /> Thêm mốc thời gian mới
                  </Button>
               </div>
            </Form.Item>
            <Form.Item {...formItemLayoutWithOutLabel}>
               <div className="ht-d-flex-row-center-center">
                  <Button type="primary" htmlType="submit">
                     <i className="far fa-save mr-3"></i> Save Timeline
                  </Button>
               </div>
            </Form.Item>
         </Form>
      );
   }
}

const WrappedTimeline = Form.create({ name: "dynamic_form_item_timeline" })(
   Timeline
);

WrappedTimeline.propTypes = {
   classes: PropTypes.object,
   timelineAllActions: PropTypes.shape({
      fetchPatchTimelineTourRequest: PropTypes.func
   })
};

const mapDispatchToProps = dispatch => {
   return {
      timelineAllActions: bindActionCreators(timelineActions, dispatch)
   };
};
export default connect(null, mapDispatchToProps)(WrappedTimeline);
