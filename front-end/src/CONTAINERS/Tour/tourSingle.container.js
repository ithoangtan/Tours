import React, { Component } from "react";

import { Carousel, Typography, Rate, Icon, Tag, Collapse, Button } from "antd";

import MoreTourSingle from "./moreTourSingle.container";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
   background: "#f7f7f7",
   borderRadius: 4,
   marginBottom: 24,
   border: 0,
   overflow: "hidden"
};

export default class TourSingleContainer extends Component {
   render() {
      return (
         <section className="ftco-section">
            <div className="container">
               <div className="row justify-content-center pb-1">
                  <div className="col-md-12 heading-section ftco-animate">
                     <div className="row">
                        <div className="col-md-12 col-lg-6 ftco-animate">
                           <Carousel autoplay>
                              <div>
                                 <img src="./images/tour-1.jpg" />
                              </div>
                              <div>
                                 <img src="./images/tour-2.jpg" />
                              </div>
                              <div>
                                 <img src="./images/tour-3.jpg" />
                              </div>
                              <div>
                                 <img src="./images/tour-4.jpg" />
                              </div>
                           </Carousel>
                        </div>
                        <div className="col-md-12 col-lg-6 ftco-animate tour-single-title">
                           <div className="row">
                              <div className="col-md-12 col-lg-6">
                                 <Title level={2}>Name Tour</Title>
                                 <div>
                                    <Rate
                                       disabled
                                       allowHalf
                                       defaultValue={4.5}
                                       character={<Icon type="star" />}
                                    />
                                    <span className="ant-rate-text">(123)</span>
                                 </div>
                              </div>
                              <div className="col-md-12 col-lg-6 text-right">
                                 <Title level={1}>$120</Title>
                                 <Text delete>$140</Text>
                              </div>
                           </div>
                           <br />
                           <Tag color="#f50" width={"auto"}>
                              Khuyễn mãi 20% phí di chuyển{" "}
                           </Tag>
                           <Title level={4}>Descriptions:</Title>
                           <Collapse
                              accordion
                              bordered={false}
                              defaultActiveKey={["1"]}
                              expandIcon={({ isActive }) => (
                                 <Icon
                                    type="caret-right"
                                    rotate={isActive ? 90 : 0}
                                 />
                              )}
                           >
                              <Panel
                                 header="This is panel header 1"
                                 key="1"
                                 style={customPanelStyle}
                              >
                                 <p>{text}</p>
                              </Panel>
                              <Panel
                                 header="This is panel header 2"
                                 key="2"
                                 style={customPanelStyle}
                              >
                                 <p>{text}</p>
                              </Panel>
                              <Panel
                                 header="This is panel header 3"
                                 key="3"
                                 style={customPanelStyle}
                              >
                                 <p>{text}</p>
                              </Panel>
                           </Collapse>
                           <div className="tour-single-action">
                              <Button
                                 type="secondary"
                                 icon="caret-left"
                                 size={"large"}
                              >
                                 MORE TOURS
                              </Button>
                              <Button
                                 type="primary"
                                 icon="shopping"
                                 size={"large"}
                              >
                                 BOOK NOW
                              </Button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <br />
               <div className="row justify-content-center pb-1">
                  <div className="col-md-12 col-lg-8 heading-section ftco-animate">
                     <div className="row justify-content-center">
                        <Title level={3}>SCHEDULE DETAILS</Title>
                     </div>
                     <div>
                        <h1 style={{ color: "#5e9ca0" }}>
                           You can edit{" "}
                           <span style={{ color: "#2b2301" }}>this demo</span>{" "}
                           text!
                        </h1>
                        <h2 style={{ color: "#2e6c80" }}>
                           How to use the editor:
                        </h2>
                        <p>
                           Paste your documents in the visual editor on the left
                           or your HTML code in the source editor in the right.{" "}
                           <br />
                           Edit any of the two areas and see the other changing
                           in real time.&nbsp;
                        </p>
                        <p>
                           Click the{" "}
                           <span
                              style={{
                                 backgroundColor: "#2b2301",
                                 color: "#fff",
                                 display: "inline-block",
                                 padding: "3px 10px",
                                 fontWeight: "bold",
                                 borderRadius: "5px"
                              }}
                           >
                              Clean
                           </span>{" "}
                           button to clean your source code.
                        </p>
                        <h2 style={{ color: "#2e6c80" }}>
                           Some useful features:
                        </h2>
                        <ol
                           style={{
                              listStyle: "none",
                              fontSize: "14px",
                              lineHeight: "32px",
                              fontWeight: "bold"
                           }}
                        >
                           <li style={{ clear: "both" }}>
                              <img
                                 style={{ float: "left" }}
                                 src="https://html-online.com/img/01-interactive-connection.png"
                                 alt="interactive connection"
                                 width={45}
                              />{" "}
                              Interactive source editor
                           </li>
                           <li style={{ clear: "both" }}>
                              <img
                                 style={{ float: "left" }}
                                 src="https://html-online.com/img/02-html-clean.png"
                                 alt="html cleaner"
                                 width={45}
                              />{" "}
                              HTML Cleaning
                           </li>
                           <li style={{ clear: "both" }}>
                              <img
                                 style={{ float: "left" }}
                                 src="https://html-online.com/img/03-docs-to-html.png"
                                 alt="Word to html"
                                 width={45}
                              />{" "}
                              Word to HTML conversion
                           </li>
                           <li style={{ clear: "both" }}>
                              <img
                                 style={{ float: "left" }}
                                 src="https://html-online.com/img/04-replace.png"
                                 alt="replace text"
                                 width={45}
                              />{" "}
                              Find and Replace
                           </li>
                           <li style={{ clear: "both" }}>
                              <img
                                 style={{ float: "left" }}
                                 src="https://html-online.com/img/05-gibberish.png"
                                 alt="gibberish"
                                 width={45}
                              />{" "}
                              Lorem-Ipsum generator
                           </li>
                           <li style={{ clear: "both" }}>
                              <img
                                 style={{ float: "left" }}
                                 src="https://html-online.com/img/6-table-div-html.png"
                                 alt="html table div"
                                 width={45}
                              />{" "}
                              Table to DIV conversion
                           </li>
                        </ol>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                        <h2 style={{ color: "#2e6c80" }}>Cleaning options:</h2>
                        <table className="editorDemoTable">
                           <thead>
                              <tr>
                                 <td>Name of the feature</td>
                                 <td>Example</td>
                                 <td>Default</td>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>Remove tag attributes</td>
                                 <td>
                                    <img
                                       style={{ margin: "1px 15px" }}
                                       src="images/smiley.png"
                                       alt="laughing"
                                       width={40}
                                       height={16}
                                    />{" "}
                                    (except <strong>img</strong>-<em>src</em>{" "}
                                    and <strong>a</strong>-<em>href</em>)
                                 </td>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>Remove inline styles</td>
                                 <td>
                                    <span
                                       style={{
                                          color: "green",
                                          fontSize: "13px"
                                       }}
                                    >
                                       You{" "}
                                       <strong
                                          style={{
                                             color: "blue",
                                             textDecoration: "underline"
                                          }}
                                       >
                                          should never
                                       </strong>
                                       &nbsp;use inline styles!
                                    </span>
                                 </td>
                                 <td>
                                    <strong
                                       style={{
                                          fontSize: "17px",
                                          color: "#2b2301"
                                       }}
                                    >
                                       x
                                    </strong>
                                 </td>
                              </tr>
                              <tr>
                                 <td>Remove classes and IDs</td>
                                 <td>
                                    <span id="demoId">
                                       Use classes to{" "}
                                       <strong className="demoClass">
                                          style everything
                                       </strong>
                                       .
                                    </span>
                                 </td>
                                 <td>
                                    <strong
                                       style={{
                                          fontSize: "17px",
                                          color: "#2b2301"
                                       }}
                                    >
                                       x
                                    </strong>
                                 </td>
                              </tr>
                              <tr>
                                 <td>Remove all tags</td>
                                 <td>
                                    This leaves{" "}
                                    <strong style={{ color: "blue" }}>
                                       only the plain
                                    </strong>{" "}
                                    <em>text</em>.{" "}
                                    <img
                                       style={{ margin: "1px" }}
                                       src="images/smiley.png"
                                       alt="laughing"
                                       width={16}
                                       height={16}
                                    />
                                 </td>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>Remove successive &amp;nbsp;s</td>
                                 <td>
                                    Never use non-breaking
                                    spaces&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to
                                    set margins.
                                 </td>
                                 <td>
                                    <strong
                                       style={{
                                          fontSize: "17px",
                                          color: "#2b2301"
                                       }}
                                    >
                                       x
                                    </strong>
                                 </td>
                              </tr>
                              <tr>
                                 <td>Remove empty tags</td>
                                 <td>Empty tags should go!</td>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>Remove tags with one &amp;nbsp;</td>
                                 <td>This makes&nbsp;no sense!</td>
                                 <td>
                                    <strong
                                       style={{
                                          fontSize: "17px",
                                          color: "#2b2301"
                                       }}
                                    >
                                       x
                                    </strong>
                                 </td>
                              </tr>
                              <tr>
                                 <td>Remove span tags</td>
                                 <td>
                                    Span tags with{" "}
                                    <span
                                       style={{
                                          color: "green",
                                          fontSize: "13px"
                                       }}
                                    >
                                       all styles
                                    </span>
                                 </td>
                                 <td>
                                    <strong
                                       style={{
                                          fontSize: "17px",
                                          color: "#2b2301"
                                       }}
                                    >
                                       x
                                    </strong>
                                 </td>
                              </tr>
                              <tr>
                                 <td>Remove images</td>
                                 <td>
                                    I am an image:{" "}
                                    <img
                                       src="images/smiley.png"
                                       alt="laughing"
                                    />
                                 </td>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>Remove links</td>
                                 <td>
                                    <a href="https://html-online.com">
                                       This is
                                    </a>{" "}
                                    a link.
                                 </td>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>Remove tables</td>
                                 <td>Takes everything out of the table.</td>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>
                                    Replace table tags with structured divs
                                 </td>
                                 <td>This text is inside a table.</td>
                                 <td>&nbsp;</td>
                              </tr>
                              <tr>
                                 <td>Remove comments</td>
                                 <td>
                                    This is only visible in the source editor{" "}
                                    {/* HELLO! */}
                                 </td>
                                 <td>
                                    <strong
                                       style={{
                                          fontSize: "17px",
                                          color: "#2b2301"
                                       }}
                                    >
                                       x
                                    </strong>
                                 </td>
                              </tr>
                              <tr>
                                 <td>Encode special characters</td>
                                 <td>
                                    <span
                                       style={{
                                          color: "red",
                                          fontSize: "17px"
                                       }}
                                    >
                                       ♥
                                    </span>{" "}
                                    <strong style={{ fontSize: "20px" }}>
                                       ☺ ★
                                    </strong>{" "}
                                    &gt;&lt;
                                 </td>
                                 <td>
                                    <strong
                                       style={{
                                          fontSize: "17px",
                                          color: "#2b2301"
                                       }}
                                    >
                                       x
                                    </strong>
                                 </td>
                              </tr>
                              <tr>
                                 <td>Set new lines and text indents</td>
                                 <td>Organize the tags in a nice tree view.</td>
                                 <td>&nbsp;</td>
                              </tr>
                           </tbody>
                        </table>
                        <p>
                           <strong>&nbsp;</strong>
                        </p>
                        <p>
                           <strong>
                              Save this link into your bookmarks and share it
                              with your friends. It is all FREE!{" "}
                           </strong>
                           <br />
                           <strong>Enjoy!</strong>
                        </p>
                        <p>
                           <strong>&nbsp;</strong>
                        </p>
                     </div>
                  </div>
                  <div className="col-md-12 col-lg-4 heading-section ftco-animate">
                     <Title level={3}>POPULAR TOURS</Title>
                     <MoreTourSingle />
                     <MoreTourSingle />
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
