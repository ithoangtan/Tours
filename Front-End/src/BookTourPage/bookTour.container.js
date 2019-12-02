import React, { Component } from "react";

import { Steps, Button, message } from "antd";

const { Step } = Steps;

const stepStyle = {
   marginBottom: 60,
   boxShadow: "0px -1px 0 0 #e8e8e8 inset"
};

const steps = [
   {
      title: "Step 1",
      subTitle: "00:00:05",
      status: "finish",
      description: "This is a description.",
      content: "Kiểm tra lại đơn hàng"
   },
   {
      title: "Step 2",
      subTitle: "00:01:00",
      status: "process",
      description: "This is a description.",
      content: "Nhập hông tin cần thiết và thanh toán cần thiết"
   },
   {
      title: "Step 3",
      subTitle: "waiting for long time",
      status: "wait",
      description: "This is a description.",
      content: (
         <div>
            <p>
               "Thông báo thành công và gủi mail đến 2 loại người dùng website"
            </p>
         </div>
      )
   }
];

export default class BookTourContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         current: 0
      };
   }

   next() {
      const current = this.state.current + 1;
      this.setState({ current });
   }

   prev() {
      const current = this.state.current - 1;
      this.setState({ current });
   }

   onChange = current => {
      console.log("onChange:", current);
      this.setState({ current });
   };
   render() {
      const { current } = this.state;
      return (
         <div className="book-tour-container">
            <Steps
               current={current}
               type="navigation"
               size="small"
               onChange={this.onChange}
               style={stepStyle}
            >
               {steps.map(item => (
                  <Step
                     key={item.title}
                     title={item.title}
                     subTitle={item.subTitle}
                     status={item.status}
                     description={item.description}
                  />
               ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
               {current > 0 && (
                  <Button
                     style={{ marginRight: 8 }}
                     onClick={() => this.prev()}
                  >
                     Previous
                  </Button>
               )}
               {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => this.next()}>
                     Next
                  </Button>
               )}
               {current === steps.length - 1 && (
                  <Button
                     type="primary"
                     onClick={() => message.success("Processing complete!")}
                  >
                     Done
                  </Button>
               )}
            </div>
            {/* <Steps
               type="navigation"
               size="small"
               current={current}
               onChange={this.onChange}
               style={stepStyle}
            >
               <Step
                  title="Step 1"
                  subTitle="00:00:05"
                  status="finish"
                  description="This is a description."
               />
               <Step
                  title="Step 2"
                  subTitle="00:01:02"
                  status="process"
                  description="This is a description."
               />
               <Step
                  title="Step 3"
                  subTitle="waiting for longlong time"
                  status="wait"
                  description="This is a description."
               />
            </Steps> */}
            {/* <Steps
               type="navigation"
               size="small"
               current={current}
               onChange={this.onChange}
               style={stepStyle}
            >
               <Step status="finish" title="finish 1" />
               <Step status="finish" title="finish 2" />
               <Step status="process" title="current process" />
               <Step status="wait" title="wait" disabled />
            </Steps> */}
         </div>
      );
   }
}
