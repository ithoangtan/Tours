import React from "react";
import { Form, Input, Icon, Button, DatePicker, Spin } from "antd";
import TextArea from "antd/lib/input/TextArea";

import reqwest from "reqwest";
import Cookies from "js-cookie";
import {
   API_ENDPOINT,
   MULTIPLIER_ID_TIMELINE
} from "../../_constants/index.constants";

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

const xhtml = (
   <div
      className="container col-md-12 ht-d-flex-col-center-center"
      style={{ width: "100%", height: "20vh" }}
   >
      <Spin tip="Loading..." />
   </div>
);

class Timeline extends React.Component {
   state = {
      timelinesByIdTour: [],
      hasData: false
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
         this.setState({ timelinesByIdTour: data[0], hasData: true });
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

   clearEmpty(arr) {
      let filtered = JSON.stringify(
         arr
            .filter(obj => {
               return ![null, undefined, ""].includes(obj);
            })
            .filter(el => {
               return typeof el != "object" || Object.keys(el).length > 0;
            })
      );

      return JSON.parse(filtered);
   }

   add = () => {
      const { form, idTour } = this.props;

      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      const nextKeys = [
         ...keys,
         {
            // Mỗi tour có khoản 2-10 timeline, nên số idTimeline không thể vượt qua
            // quá hệ số > 1000
            // ví dụ idTour = 101, thì idTimeline không thể qua 101,000
            idTimelines: idTour * MULTIPLIER_ID_TIMELINE + id++,
            //id "FAKE", CSDL: idTimeline is auto crement
            idTour: idTour,
            title: "",
            description: "",
            date: moment()
         }
      ];

      // important!  notify form to detect changes
      form.setFieldsValue({
         keys: nextKeys
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields(async (err, values) => {
         let timelinesByIdTour = this.state.timelinesByIdTour;
         if (!err) {
            const { idTour } = this.props;

            const arrDate = await this.clearEmpty(values.date);
            const arrTitle = await this.clearEmpty(values.title);
            const arrDescription = await this.clearEmpty(values.description);
            const arrIdTimelines = await this.clearEmpty(values.idTimelines);

            let arrNewTimeline = [];
            let arrUpdateTimeline = [];
            let arrDeleteTimeline = [];

            for (let i = 0; i < values.keys.length; i++) {
               if (
                  (await timelinesByIdTour.find(
                     element => arrIdTimelines[i] === element.idTimelines
                  )) !== undefined
               ) {
                  await arrUpdateTimeline.push({
                     idTimelines: arrIdTimelines[i],
                     date: arrDate[i],
                     title: arrTitle[i],
                     description: arrDescription[i],
                     idTour
                  });
               } else {
                  await arrNewTimeline.push({
                     idTimelines: arrIdTimelines[i],
                     date: arrDate[i],
                     title: arrTitle[i],
                     description: arrDescription[i],
                     idTour
                  });
               }
            }

            for (let j = 0; j < timelinesByIdTour.length; j++) {
               if (
                  (await arrIdTimelines.find(
                     element => timelinesByIdTour[j].idTimelines === element
                  )) === undefined
               )
                  await arrDeleteTimeline.push(timelinesByIdTour[j]);
            }

            const { timelineAllActions } = this.props;
            const { fetchPostTimelineRequest } = timelineAllActions;
            const { fetchPatchTimelineRequest } = timelineAllActions;
            const { fetchDeleteTimelineRequest } = timelineAllActions;

            await arrDeleteTimeline.forEach(async deleteTimeline => {
               await fetchDeleteTimelineRequest(deleteTimeline);
               await timelinesByIdTour.splice(
                  timelinesByIdTour.findIndex(
                     timeline => deleteTimeline.idTimelines === timeline
                  ),
                  1
               );
            });
            arrDeleteTimeline = [];
            await arrUpdateTimeline.forEach(async updateTimeline => {
               fetchPatchTimelineRequest(updateTimeline);
            });
            arrUpdateTimeline = [];
            await arrNewTimeline.forEach(async newTimeline => {
               await fetchPostTimelineRequest(newTimeline);
               await timelinesByIdTour.push(newTimeline);
            });
            arrNewTimeline = [];
            this.setState({ timelinesByIdTour });
            console.log("new", arrNewTimeline);
            console.log("update", arrUpdateTimeline);
            console.log("delete", arrDeleteTimeline);
         }
         console.log("submit", timelinesByIdTour);
      });
   };

   render() {
      if (this.state.hasData === false) return xhtml;

      const { getFieldDecorator, getFieldValue } = this.props.form;

      getFieldDecorator("keys", {
         initialValue: this.state.timelinesByIdTour
      });

      const keys = getFieldValue("keys");

      const formItemsHiddenIdTimelines = keys.map((k, index) => (
         <Form.Item required={true} key={k.idTimelines + k.idTimelines}>
            {getFieldDecorator(`idTimelines[${k.idTimelines}]`, {
               initialValue: k.idTimelines
            })(<></>)}
         </Form.Item>
      ));

      const formItemsHiddenIdTour = keys.map((k, index) => (
         <Form.Item required={true} key={k.idTour + k.idTimelines}>
            {getFieldDecorator(`idTour[${k.idTimelines}]`, {
               initialValue: k.idTour
            })(<></>)}
         </Form.Item>
      ));

      const formItemsDatetime = keys.map((k, index) => {
         return (
            <Form.Item
               {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
               label={index === 0 ? "Mốc thời gian" : ""}
               required={true}
               key={k.date + k.idTimelines}
            >
               {getFieldDecorator(`date[${k.idTimelines}]`, {
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
      const formItemsTitle = keys.map((k, index) => {
         return (
            <Form.Item
               {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
               label={index === 0 ? "Tiêu đề" : ""}
               required={true}
               key={k.title + k.idTimelines}
            >
               {getFieldDecorator(`title[${k.idTimelines}]`, {
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
         );
      });

      const formItemsDescription = keys.map((k, index) => {
         return (
            <Form.Item
               {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
               label={index === 0 ? "Mô tả" : ""}
               required={true}
               key={k.description + k.idTimelines}
            >
               {getFieldDecorator(`description[${k.idTimelines}]`, {
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
         );
      });
      return (
         <Form
            onSubmit={this.handleSubmit}
            className="card pt-2 pb-2 box-shadow"
         >
            <div className="ht-hidden">
               {formItemsHiddenIdTimelines}
               {formItemsHiddenIdTour}
            </div>
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
      fetchPatchTimelineRequest: PropTypes.func,
      fetchPostTimelineRequest: PropTypes.func,
      fetchDeleteTimelineRequest: PropTypes.func
   })
};

const mapStateToProps = state => {
   return {
      patch: state.timeline.patch,
      delete: state.timeline.delete,
      post: state.timeline.post
   };
};
const mapDispatchToProps = dispatch => {
   return {
      timelineAllActions: bindActionCreators(timelineActions, dispatch)
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(WrappedTimeline);
