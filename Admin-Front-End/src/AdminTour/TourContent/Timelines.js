import React from "react";
import { Form, Input, Icon, Button, DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";

let id = 0;

class Timeline extends React.Component {
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
      // important! notify form to detect changes
      form.setFieldsValue({
         keys: nextKeys
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            //Log ra rồi tự xử lý đi nha Vy. Haha
            const { keys, names } = values;
            console.log("Received values of form: ", values);
            console.log(
               "Merged values:",
               keys.map(key => names[key])
            );
         }
      });
   };

   render() {
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
      getFieldDecorator("keys", { initialValue: [] });
      const keys = getFieldValue("keys");
      const formItemsDatetime = keys.map((k, index) => (
         <Form.Item
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
            label={index === 0 ? "Mốc thời gian" : ""}
            required={false}
            key={k}
         >
            {getFieldDecorator(`namesDateime[${k}]`, {
               rules: [
                  {
                     type: "object",
                     required: true,
                     whitespace: true,
                     message: "Vui lòng chọn mốc thời gian"
                  }
               ]
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
      ));
      const formItemsTitle = keys.map((k, index) => (
         <Form.Item
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
            label={index === 0 ? "Tiêu đề" : ""}
            required={false}
            key={k}
         >
            {getFieldDecorator(`namesTitle[${k}]`, {
               validateTrigger: ["onChange", "onBlur"],
               rules: [
                  {
                     required: true,
                     whitespace: true,
                     message: "Vui lòng ghi tiêu đề"
                  }
               ]
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
      const formItemsDescription = keys.map((k, index) => (
         <Form.Item
            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
            label={index === 0 ? "Mô tả" : ""}
            required={false}
            key={k}
         >
            {getFieldDecorator(`namesDescription[${k}]`, {
               validateTrigger: ["onChange", "onBlur"],
               rules: [
                  {
                     required: true,
                     whitespace: true,
                     message: "Vui lòng viết thêm miêu tả."
                  }
               ]
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

export default WrappedTimeline;
