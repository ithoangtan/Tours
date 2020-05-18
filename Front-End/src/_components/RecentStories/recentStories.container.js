import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../_actions/post.actions";
import {
   DATE_TIME_FORMAT,
   API_ENDPOINT,
} from "../../_constants/index.constants";
import { Tag, Tooltip, Button } from "antd";
import moment from "moment";

class RecentStoriesContainer extends Component {
   fetch = async () => {
      const { postAllActions } = this.props;
      const {
         fetchListPostRequest,
         fetchListPostImageRequest,
      } = postAllActions;
      await fetchListPostImageRequest();
      await fetchListPostRequest();
   };

   componentDidMount() {
      this.fetch();
   }

   getListPostWithImage = () => {
      const { listPost, listPostImage } = this.props;
      let listPostRecent =
         listPost && listPost.length ? listPost.slice(0, 9) : [];
      listPostRecent =
         listPostRecent.length &&
         listPostRecent.map((post, index) => {
            let imagePost = listPostImage.filter(
               (imagePost) => imagePost.idPost === post.idPost
            );
            return { ...post, image: imagePost[0] };
         });
      return listPostRecent;
   };

   render() {
      const { listPost } = this.props;
      const listPostRecent =
         listPost && listPost.length ? listPost.slice(0, 9) : [];
      return (
         <section className="ftco-section bg-light">
            <div className="container">
               <div className="row justify-content-center mb-2 pb-1 ht-more-container">
                  <Link className="ht-more" to="blog">
                     <Button type="dashed">Xem thêm...</Button>
                  </Link>
                  <div className="col-md-12 heading-section text-center mt-3">
                     <h2 className="mb-1">Cẩm nang du lịch</h2>
                     <p>Something! Câu nói hay về du lịch</p>
                  </div>
               </div>
               <div
                  id="recentStoriesCarousel"
                  className="carousel slide ftco-animate"
                  data-ride="carousel"
                  data-interval={4000}
               >
                  <div
                     className="carousel-inner row w-100 mx-auto"
                     role="listbox"
                  >
                     {/* item slide */}
                     {listPostRecent &&
                        listPostRecent.map((post, index) => {
                           const postDate = post.dateEdited
                              ? post.dateEdited
                              : post.dateAdd;
                           const postTag = post.tags
                              ? JSON.parse(post.tags.replace(/'/g, '"'))
                              : [];
                           return (
                              <div
                                 className={`carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ${
                                    !index ? "active" : ""
                                 }`}
                                 key={index}
                              >
                                 <div className="blog-entry justify-content-end">
                                    <Link
                                       to={`blog-single/${post.idPost}`}
                                       className="block-20 ht-blog-image"
                                       style={{
                                          backgroundImage:
                                             post.image && post.image.url
                                                ? `url("${
                                                     API_ENDPOINT +
                                                     post.image.url
                                                  }")`
                                                : `url("images/image_1.jpg")`,
                                       }}
                                    >
                                       <div className="ht-over-image"></div>
                                    </Link>

                                    <p className="ht-post-tag-container ht-no-p-m">
                                       {/* Random color á mà, cái này sẽ cho admin cấu hình color tag
                           ví dụ như: Thực phẩm: đỏ, biển: màu lam,.... 
                           Tham khảo ở https://ant.design/docs/spec/colors*/}
                                       {postTag.map((tag, index) => (
                                          <Tag color={"#faad14"} key={index}>
                                             {tag}
                                          </Tag>
                                       ))}
                                    </p>
                                    <div className="ht-post-comment-container ht-no-p-m">
                                       <i className="fas fa-star ht-mr-r-2">
                                          {` `}
                                          {post.vote}
                                       </i>
                                       <i className="fas fa-eye">
                                          {` `}
                                          {post.views}
                                       </i>
                                    </div>
                                    <div className="text mt-3 float-right d-block">
                                       <Tooltip
                                          title={`Tính thời gian`}
                                          placement="top"
                                       >
                                          <div className="d-flex align-items-center mb-5 topp">
                                             <div className="one">
                                                <span className="day">
                                                   {moment(postDate).format(
                                                      DATE_TIME_FORMAT.DATE
                                                   )}
                                                </span>
                                             </div>
                                             <div className="two">
                                                <span className="yr">
                                                   {moment(postDate).format(
                                                      DATE_TIME_FORMAT.YEAR
                                                   )}
                                                </span>
                                                <span className="mos">
                                                   {moment(postDate).format(
                                                      DATE_TIME_FORMAT.MONTH_NAME
                                                   )}
                                                </span>
                                             </div>
                                          </div>
                                       </Tooltip>
                                       <h3 className="heading">
                                          <Link
                                             to={`blog-single/${post.idPost}`}
                                          >
                                             {post.titlePost}
                                          </Link>
                                       </h3>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                  </div>
                  <a
                     className="carousel-control-prev ht-w-70"
                     href="#recentStoriesCarousel"
                     role="button"
                     data-slide="prev"
                  >
                     <span
                        className="carousel-control-prev-icon ht-control-preview-icon"
                        aria-hidden="true"
                     />
                     {/* <span className="sr-only">Previous</span> */}
                  </a>
                  <a
                     className="carousel-control-next text-faded ht-w-70"
                     href="#recentStoriesCarousel"
                     role="button"
                     data-slide="next"
                  >
                     <span
                        className="carousel-control-next-icon ht-control-preview-icon"
                        aria-hidden="true"
                     />
                     {/* <span className="sr-only">Next</span> */}
                  </a>
               </div>
            </div>
         </section>
      );
   }
}
RecentStoriesContainer.propTypes = {
   postAllActions: PropTypes.shape({
      fetchListPostRequest: PropTypes.func,
      fetchListPostImageRequest: PropTypes.func,
   }),
   listPost: PropTypes.array,
   listPostImage: PropTypes.array,
};
const mapStateToProps = (state) => {
   return {
      listPost: state.post.listPost,
      listPostImage: state.post.listPostImage,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch),
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(RecentStoriesContainer);
