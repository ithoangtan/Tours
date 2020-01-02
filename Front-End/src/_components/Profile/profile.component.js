import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as accountActions from "../../_actions/account.actions";

import { API_ENDPOINT } from "../../_constants/index.constants";

import { Link } from "react-router-dom";

import { Drawer, Divider, Col, Row } from "antd";

const pStyle = {
   fontSize: 16,
   color: "rgba(0,0,0,0.85)",
   lineHeight: "24px",
   display: "block",
   marginBottom: 16
};

const DescriptionItem = ({ title, content }) => (
   <div
      style={{
         fontSize: 14,
         lineHeight: "22px",
         marginBottom: 7,
         color: "rgba(0,0,0,0.65)"
      }}
   >
      <p
         style={{
            marginRight: 8,
            display: "inline-block",
            color: "rgba(0,0,0,0.85)"
         }}
      >
         {title}:
      </p>
      {content}
   </div>
);

class ProfileContainer extends Component {
   onClose = () => {
      this.props.onClose();
   };

   componentWillMount() {
      const { accountAllActions } = this.props;
      const { fetchAccountRequest } = accountAllActions;
      const email = sessionStorage.getItem("email");
      fetchAccountRequest(email);
   }

   render() {
      const { visible } = this.props;
      return (
         <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={visible}
         >
            <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
            <p style={pStyle}>Personal</p>
            <Row>
               {" "}
               <img src="" alt="" />
            </Row>
            <Row>
               <Col span={12}>
                  <DescriptionItem title="Full Name" content="Lily" />
               </Col>
               <Col span={12}>
                  <DescriptionItem
                     title="Account"
                     content="AntDesign@example.com"
                  />
               </Col>
            </Row>
            <Row>
               <Col span={12}>
                  <DescriptionItem title="City" content="HangZhou" />
               </Col>
               <Col span={12}>
                  <DescriptionItem title="Country" content="China🇨🇳" />
               </Col>
            </Row>
            <Row>
               <Col span={12}>
                  <DescriptionItem title="Birthday" content="February 2,1900" />
               </Col>
               <Col span={12}>
                  <DescriptionItem title="Website" content="-" />
               </Col>
            </Row>
            <Row>
               <Col span={24}>
                  <DescriptionItem
                     title="Message"
                     content="Make things as simple as possible but no simpler."
                  />
               </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Company</p>
            <Row>
               <Col span={12}>
                  <DescriptionItem title="Position" content="Programmer" />
               </Col>
               <Col span={12}>
                  <DescriptionItem title="Responsibilities" content="Coding" />
               </Col>
            </Row>
            <Row>
               <Col span={12}>
                  <DescriptionItem title="Department" content="XTech" />
               </Col>
               <Col span={12}>
                  <DescriptionItem
                     title="Supervisor"
                     content={<Link> Lin</Link>}
                  />
               </Col>
            </Row>
            <Row>
               <Col span={24}>
                  <DescriptionItem
                     title="Skills"
                     content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                  />
               </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Contacts</p>
            <Row>
               <Col span={12}>
                  <DescriptionItem
                     title="Email"
                     content="AntDesign@example.com"
                  />
               </Col>
               <Col span={12}>
                  <DescriptionItem
                     title="Phone Number"
                     content="+86 181 0000 0000"
                  />
               </Col>
            </Row>
            <Row>
               <Col span={24}>
                  <DescriptionItem
                     title="Github"
                     content={
                        <a href="http://github.com/ant-design/ant-design/">
                           github.com/ant-design/ant-design/
                        </a>
                     }
                  />
               </Col>
            </Row>{" "}
            <Row>
               <Col span={12}>
                  <DescriptionItem title="Full Name" content="Lily" />
               </Col>
               <Col span={12}>
                  <DescriptionItem
                     title="Account"
                     content="AntDesign@example.com"
                  />
               </Col>
            </Row>
         </Drawer>
      );
   }
}

ProfileContainer.propTypes = {
   classes: PropTypes.object,
   accountAllActions: PropTypes.shape({
      fetchAccountRequest: PropTypes.func
   }),
   account: PropTypes.array
};

const mapStateToProps = state => {
   return {
      account: state.account.account
   };
};
const mapDispatchToProps = dispatch => {
   return {
      accountAllActions: bindActionCreators(accountActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là accountActions ở bên account.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
