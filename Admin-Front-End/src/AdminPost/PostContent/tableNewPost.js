import React, { Component } from "react";

import { Form, Input, Button, Radio, Checkbox } from "antd";

import { getParamTokenWithName } from "../../_commons/auth.service";

import reqwest from "reqwest";
import { API_ENDPOINT } from "../../_constants/index.constants";

import Cookies from "js-cookie";

function getCookie(name) {
   const token = Cookies.get(name);
   return token;
}

const idAccount = getParamTokenWithName("idAccount");
const { TextArea } = Input;

class TableNewRow extends Component {
   state = {
      expand: false,
      tags: [],
      value: "",
      titlePost: "",
      departureDay: new Date()
         .toJSON()
         .slice(0, 10)
         .replace(/-/g, "-"),
      describe: "",
      type: "Asian",
      views: 0,
      vote: 0,
      idAccount: idAccount,
      checkedListTags: [],
      indeterminateTags: false,
      checkAllTags: false
   };

   fetch = async () => {
      reqwest({
         url: `${API_ENDPOINT}/tags`,
         method: "GET",
         headers: { Authentication: getCookie("token") },
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
   };

   componentWillMount() {
      this.fetch();
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

   onChange = event => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
         [name]: value
      });
   };

   onChangeDate = (value, dateString) => {
      this.setState({ departureDay: dateString });
   };

   onOK = value => {
      this.setState({ departureDay: value });
   };

   onChangeSale = value => {
      this.setState({ sale: value });
   };
   onChangeReuse = value => {
      this.setState({ reuse: value });
   };
   onChangePrice = value => {
      this.setState({ price: value });
   };

   handleReset = () => {
      this.props.form.resetFields();
   };

   toggle = () => {
      const { expand } = this.state;
      this.setState({ expand: !expand });
   };
   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, fieldsValue) => {
         if (err) {
            return;
         }
      });
      const { titlePost, describe } = this.state;
      if (titlePost !== "" && describe !== "") {
         const { handleAdd, onCancle } = this.props;
         handleAdd(this.state);
         onCancle();
      }
   };

   handleChange = target => {
      this.setState({ vocationTime: target.label });
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
      const { onCancle } = this.props;
      const { getFieldDecorator } = this.props.form;
      return (
         <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="ant-form-new-tour"
         >
            <div className="ht-d-flex-col">
               <div className="ht-new-tour col-md-12">
                  <div className="ht-new-tour-left col-md-5">
                     <Form.Item
                        label={`Title Post: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`title-post`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Title Post input something!"
                              }
                           ]
                        })(
                           <Input
                              name="titlePost"
                              placeholder="Title Post is"
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Describe: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`describe`, {
                           setFieldsValue: this.state.value,
                           rules: [
                              {
                                 required: true,
                                 message: "Write something!"
                              }
                           ]
                        })(
                           <TextArea
                              name="describe"
                              placeholder="Description on your post pay"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                  </div>
                  <div className="ht-new-tour-right col-md-7">
                     <Form.Item
                        label={`Type: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`type`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Select type!"
                              }
                           ]
                        })(
                           // VietNam: 1000,
                           // Asia: 800,
                           // Europe: 1260,
                           // America: 200, //Châu Mỹ
                           // Northern Vietnam, //Bắc Bộ
                           // North Central, //Bắc Trung Bộ
                           // South Central Coast, //Duyên Hải Nam Trung Bộ
                           // Central Highlands, //Tây Nguyên
                           // Southeast, //Đông Nam Bộ, Miền Đông
                           // Mekong River Delta; //Đồng Bằng sông Cửu Long
                           <Radio.Group buttonStyle="solid">
                              <Radio.Button value="World" disabled>
                                 Thế giới:
                              </Radio.Button>
                              <Radio.Button value="Asia">Châu Á</Radio.Button>
                              <Radio.Button value="Europe">
                                 Châu Âu
                              </Radio.Button>
                              <Radio.Button value="America">
                                 Châu Mỹ
                              </Radio.Button>
                              <Radio.Button value="VietNam" disabled>
                                 Việt Nam:
                              </Radio.Button>
                              <Radio.Button value="NorthernVietnam">
                                 Bắc Bộ
                              </Radio.Button>
                              <Radio.Button value="NorthCentral">
                                 Bắc Trung Bộ
                              </Radio.Button>
                              <Radio.Button value="SouthCentralCoast">
                                 Duyên Hải Nam Trung Bộ
                              </Radio.Button>
                              <Radio.Button value="CentralHighlands">
                                 Tây Nguyên
                              </Radio.Button>
                              <Radio.Button value="Southeast">
                                 Đông Nam Bộ, Miền Đông
                              </Radio.Button>
                              <Radio.Button value="MekongRiverDelta">
                                 Đồng Bằng sông Cửu Long
                              </Radio.Button>
                           </Radio.Group>
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Tags: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-0"
                     >
                        {getFieldDecorator(`tags`)(
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
               <div className="ht-form-footer col-md-12">
                  <p className="ht-no-p-m mr-4 mb-1">
                     You can edit your content post how you expand record post
                     (+)
                  </p>
                  <Button type="dashed" onClick={this.handleReset}>
                     Clear
                  </Button>
                  <Button
                     type="primary"
                     htmlType="submit"
                     style={{ marginLeft: 12 }}
                     icon="plus"
                  >
                     Add
                  </Button>
                  <Button style={{ marginLeft: 12 }} onClick={onCancle}>
                     Cancle
                  </Button>
               </div>
            </div>
         </Form>
      );
   }
}

export default TableNewRow = Form.create({ name: "new_post" })(TableNewRow);
