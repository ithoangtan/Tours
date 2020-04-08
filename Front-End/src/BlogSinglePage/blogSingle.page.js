import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../_actions/post.actions";
import BlogSingleContainer from "./blogSingle.container";

class BlogSinglePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         idPost: 0
      };
   }

   fetch = async () => {
      const { idPost } = this.props.match.params;
      const { postAllActions, listPostNew, listPostViews } = this.props;

      //load Post byId
      const { fetchPostByIdRequest, fetchListPostRequest } = postAllActions;
      await fetchPostByIdRequest(idPost);
      if (!listPostNew.length || !listPostViews.length) {
         await fetchListPostRequest();
      }
      this.setState({ idPost });
   };

   componentDidMount() {
      this.fetch();
      window.scrollTo({
         top: 0,
         left: 0
      });
   }

   onVoteBlog = vote => {
      const { postAllActions, postById } = this.props;
      const { votePostdRequest } = postAllActions;
      votePostdRequest({ idPost: postById.idPost, vote });
   };

   onFetchPostById = async () => {
      const { idPost } = this.state;
      const { idPost: newIdPost } = this.props.match.params;
      if (idPost !== newIdPost) {
         const { postAllActions } = this.props;
         //load Post byId
         const { fetchPostByIdRequest } = postAllActions;
         await fetchPostByIdRequest(newIdPost);
         this.setState({ idPost: newIdPost });
      }
   };

   render() {
      const { postById, listPostNew, listPostViews } = this.props;
      this.onFetchPostById();
      return (
         <BlogSingleContainer
            postById={postById}
            listPostNew={listPostNew}
            listPostViews={listPostViews}
            handleVoteBlog={this.onVoteBlog}
         />
      );
   }
}
BlogSinglePage.propTypes = {
   postAllActions: PropTypes.shape({
      fetchPostByIdRequest: PropTypes.func,
      fetchListPostRequest: PropTypes.func,
      votePostdRequest: PropTypes.func
   }),
   postById: PropTypes.object,
   listPostNew: PropTypes.array,
   listPostViews: PropTypes.array
};

const mapStateToProps = state => {
   return {
      postById: state.post.postById,
      listPostNew: state.post.listPostNew,
      listPostViews: state.post.listPostViews
   };
};
const mapDispatchToProps = dispatch => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch)
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogSinglePage);
