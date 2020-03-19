import React, { Component } from "react";

import {
   InputNumber,
   Form,
   Input,
   Button,
   DatePicker,
   Select,
   Radio,
   Checkbox
} from "antd";

import { getParamTokenWithName } from "../../_commons/auth.service";

const idAccount = getParamTokenWithName("idAccount");
const { TextArea } = Input;

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

class TableNewRow extends Component {
   state = {
      expand: false,
      value: "",
      titleTour: "",
      price: 10,
      sale: 0,
      address: "",
      vocationTime: "2 Ngày 1 Đêm",
      departureDay: new Date()
         .toJSON()
         .slice(0, 10)
         .replace(/-/g, "-"),
      describe: "",
      idAccount: idAccount,
      reuse: 0,
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

      const { titleTour, describe, address } = this.state;
      if (titleTour !== "" && describe !== "" && address !== "") {
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
                        label={`Title Tour: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`title-tour`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Title Tour input something!"
                              }
                           ]
                        })(
                           <Input
                              name="titleTour"
                              placeholder="Title Tour is"
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Price: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`price`, {
                           initialValue: 100000,
                           rules: [
                              {
                                 required: true,
                                 message: "price is 0?"
                              }
                           ]
                        })(
                           <InputNumber
                              style={{ width: "50%" }}
                              name="price"
                              min={0}
                              step={1000}
                              formatter={value =>
                                 `${value}`.replace(
                                    /\B(?=(\d{3})+(?!\d))/g,
                                    ","
                                 )
                              }
                              parser={value => value.replace(/\$\s?|(,*)/g, "")}
                              onChange={this.onChangePrice}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Sale: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`sale`, {
                           initialValue: 0,
                           rules: [
                              {
                                 required: true,
                                 message: "Input something!"
                              }
                           ]
                        })(
                           <InputNumber
                              name="sale"
                              style={{ width: "50%" }}
                              min={0}
                              max={100}
                              formatter={value => `${value}%`}
                              parser={value => value.replace("%", "")}
                              onChange={this.onChangeSale}
                              placeholder={"Sale"}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Reuse: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`reuse`, {
                           initialValue: 0,
                           rules: [
                              {
                                 required: true,
                                 message: "use is 0?"
                              }
                           ]
                        })(
                           <InputNumber
                              style={{ width: "50%" }}
                              name="reuse"
                              min={0}
                              step={1}
                              onChange={this.onChangeReuse}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Address: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`address`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Input something!"
                              }
                           ]
                        })(
                           <Input
                              name="address"
                              placeholder="Address are..."
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Time:`}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`vocation-time`, {
                           initialValue: { key: "2-1" },
                           rules: [
                              {
                                 required: true,
                                 message: "select same day!"
                              }
                           ]
                        })(
                           <Select
                              name="vocationTime"
                              labelInValue
                              // style={{ width: 195 }}
                              onChange={this.handleChange}
                           >
                              <Select.Option value="1-0">
                                 1 days 0 nights
                              </Select.Option>
                              <Select.Option value="2-1">
                                 2 days 1 nights
                              </Select.Option>
                              <Select.Option value="3-2">
                                 3 days 2 nights
                              </Select.Option>
                              <Select.Option value="4-3">
                                 4 days 3 nights
                              </Select.Option>
                              <Select.Option value="5-4">
                                 5 days 4 nights
                              </Select.Option>
                              <Select.Option value="6-5">
                                 6 days 5 nights
                              </Select.Option>
                              <Select.Option value="7-6">
                                 7 days 6 nights
                              </Select.Option>
                              <Select.Option value="8-7">
                                 8 days 7 nights
                              </Select.Option>
                              <Select.Option value="9-8">
                                 9 days 8 nights
                              </Select.Option>
                              <Select.Option value="10-8">
                                 10 days 9 nights
                              </Select.Option>
                           </Select>
                        )}
                     </Form.Item>
                  </div>
                  <div className="ht-new-tour-right col-md-7">
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
                              placeholder="Description on your tour pay"
                              autoSize
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Departure: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`departure`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Select date and time!"
                              }
                           ]
                        })(
                           <DatePicker
                              name="departureDay"
                              showTime
                              format="YYYY-MM-DD HH:mm:ss"
                              onChange={this.onChangeDate}
                              onOk={this.onOk}
                           />
                        )}
                     </Form.Item>
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
                           <Radio.Group
                              defaultValue="VietNam"
                              buttonStyle="solid"
                           >
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
               <div className="ht-form-footer col-md-12">
                  <p className="ht-no-p-m mr-4 mb-1">
                     You can edit your travle schedule how you expand record
                     tour (+)
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

export default TableNewRow = Form.create({ name: "new_tour" })(TableNewRow);
