import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as postActions from "../_actions/post.actions";

import SideBarContainer from "../AdminParentContainer/sideBar.container";
import PostContentWrapperContainer from "./PostContent/PostContentWrapper.container";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";

class PostContent extends Component {
   componentWillMount() {
      if (this.props.match !== null) {
         this.fetch();
      }
   }
   fetch = async () => {
      await funcLoadJs(INDEX_CONSTANTS.AdminArrayExternalScript);

      const { idPost } = this.props.match.params;

      //Load data post by Id post
      const { postAllActions } = this.props;
      const { fetchPostByIdRequest } = postAllActions;
      await fetchPostByIdRequest(idPost);
   };

   render() {
      const { post } = this.props;
      return (
         <div id="wrapper">
            {/* Sidebar */}
            <SideBarContainer {...this.props} />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <PostContentWrapperContainer {...this.props} post={post} />
            {/* End of Content Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded ht-loaded" href="#page-top">
               <i className="fas fa-angle-up" />
            </a>
         </div>
      );
   }
}

PostContent.propTypes = {
   classes: PropTypes.object,
   postAllActions: PropTypes.shape({
      fetchPostByIdRequest: PropTypes.func
   }),
   post: PropTypes.object
};

const mapStateToProps = state => {
   return {
      post: state.post.postById
   };
};
const mapDispatchToProps = dispatch => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là postActions ở bên post.action.js
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostContent);
