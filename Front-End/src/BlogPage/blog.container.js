import React, { Component } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../_actions/post.actions";
import { Tag, Tooltip, Carousel, Pagination } from "antd";

import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";
import BlogRightContainer from "./blogRight.container";
import BlogNavigationContainer from "./blogNavigation.container";
import moment from "moment";

class BlogContainer extends Component {
   fetch = async () => {
      const { postAllActions, listPost } = this.props;
      //load list Post
      const { fetchListPostRequest } = postAllActions;
      if (!listPost.length) {
         await fetchListPostRequest();
      }
   };

   componentDidMount() {
      window.scrollTo({
         top: 0,
         left: 0
      });
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
      this.fetch();
   }

   splitListPost = listPost => {
      // get the most important posts
      const listLatestPost = listPost.slice(0, 3);
      return listLatestPost;
   };

   render() {
      const { listPost, listPostNew, listPostViews } = this.props;
      const listLatestPost = this.splitListPost(listPost);
      return (
         <section className="ftco-section mt-2">
            <div className="container">
               <BlogNavigationContainer />{" "}
               <div className="ht-blog-container-1">
                  <div className="col-md-8">
                     <Carousel autoplay dotPosition="right">
                        {listLatestPost &&
                           listLatestPost.map((post, index) => (
                              <div
                                 className="ht-item-post-full-main"
                                 key={index}
                              >
                                 <img
                                    src="/images/blog-1.jpg"
                                    alt="not found"
                                 />
                                 <div
                                    class="ht-item-post-full-main-info"
                                    style={{
                                       backgroundImage:
                                          "linear-gradient(rgba(255, 255, 255, 0),rgba(21, 21, 21, 0.7),rgba(255, 255, 255, 0)"
                                    }}
                                 >
                                    {/* <div className="ht-tag-main">
                                       DU LỊCH SAPA
                                    </div> */}
                                    <div className="ht-title">
                                       {post.titlePost.toUpperCase()}
                                    </div>
                                    <div className="ht-describe block-ellipsis-2">
                                       {post.describe}
                                    </div>
                                    <Link to="more" className="ht-btn-more">
                                       READ MORE
                                    </Link>
                                 </div>
                              </div>
                           ))}
                     </Carousel>
                  </div>
                  <div className="col-md-4 ht-item-post-full-right">
                     <div className="ht-item-post-full ht-mb-special">
                        <img src="/images/blog-2.jpg" alt="not found" />
                        <div class="ht-item-post-full-info">
                           <div className="ht-tag-main">DU LỊCH VIỆT NAM</div>
                           <div className="ht-title">
                              TRUY TÌM 5 CHIẾC GIƯỜNG BALI SỐNG ẢO THẦN THÁNH
                              KHẮP VIỆT
                           </div>
                           <Link to="more" className="ht-btn-more">
                              READ MORE
                           </Link>
                        </div>
                     </div>
                     <div className="ht-item-post-full">
                        <img src="/images/blog-3.jpg" alt="not found" />
                        <div class="ht-item-post-full-info">
                           <div className="ht-tag-main">DU LỊCH QUỐC TẾ</div>
                           <div className="ht-title">
                              Có gì bên trong khu nghỉ dưỡng đắt đỏ bậc nhất
                              Maldives?
                           </div>
                           <Link to="more" className="ht-btn-more">
                              READ MORE
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row ht-blog-container-2">
                  <div className="ht-blog-left col-md-8">
                     <div className="col-md">
                        <div className="ht-divide-special"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">KHUYẾN MÃI</div>
                           <div className="ht-describe">
                              Những khuyến mại hấp dẫn
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex flex-wrap">
                        {listPost &&
                           listPost.map((post, index) => {
                              const postDate = post.dateEdited
                                 ? post.dateEdited
                                 : post.dateAdd;
                              const postTags = post.tags
                                 ? post.tags.split(",")
                                 : [];
                              return (
                                 <div
                                    className="col-12 col-sm-12 col-md-6 col-lg-4"
                                    key={index}
                                 >
                                    <div className="blog-entry justify-content-end">
                                       <Link
                                          to={`blog-single/${post.idPost}`}
                                          className="block-20 ht-blog-image"
                                          style={{
                                             backgroundImage:
                                                'url("images/image_1.jpg")'
                                          }}
                                       >
                                          <div className="ht-over-image"></div>
                                       </Link>

                                       <p className="ht-post-tag-container ht-no-p-m">
                                          {/* Random color á mà, cái này sẽ cho admin cấu hình color tag
                           ví dụ như: Thực phẩm: đỏ, biển: màu lam,.... 
                           Tham khảo ở https://ant.design/docs/spec/colors*/}
                                          {postTags &&
                                             postTags.map((tag, index) => (
                                                <Tag color={"#faad14"}>
                                                   {tag}
                                                </Tag>
                                             ))}
                                       </p>
                                       <div className="ht-no-p-m ht-post-comment-container">
                                          <i className="far fa-eye ht-mr-r-2">
                                             {" "}
                                             {post.views}
                                          </i>
                                          <i className="far fa-star">
                                             {" "}
                                             {post.vote}
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
                                                         INDEX_CONSTANTS
                                                            .DATE_TIME_FORMAT
                                                            .DATE
                                                      )}
                                                   </span>
                                                </div>
                                                <div className="two">
                                                   <span className="yr">
                                                      {moment(postDate).format(
                                                         INDEX_CONSTANTS
                                                            .DATE_TIME_FORMAT
                                                            .YEAR
                                                      )}
                                                   </span>
                                                   <span className="mos">
                                                      {moment(postDate).format(
                                                         INDEX_CONSTANTS
                                                            .DATE_TIME_FORMAT
                                                            .MONTH_NAME
                                                      )}
                                                   </span>
                                                </div>
                                             </div>
                                          </Tooltip>
                                          <h3 className="heading">
                                             <Link to="blog-single">
                                                {post.titlePost}
                                             </Link>
                                          </h3>
                                          <div className="ht-post-describe">
                                             {post.describe}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              );
                           })}
                     </div>
                     <div className="col-md ht-divide">
                        <div className="ht-divide-special-1"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">ĐIỂM ĐẾN</div>
                           <div className="ht-describe">
                              Những địa danh không thể bỏ qua khi đi du lịch
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex ht-posts-container"></div>
                     <div className="col-md ht-divide">
                        <div className="ht-divide-special-2"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">ẨM THỰC</div>
                           <div className="ht-describe">
                              Những chuyến đi không thể bỏ qua ẩm thực tuyệt vời
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex ht-posts-container"></div>
                     <div className="col-md ht-divide">
                        <div className="ht-divide-special-3"></div>
                     </div>
                     <div className="title mb-2">
                        <div className="ht-blog-title">
                           <div className="ht-title">MẸO DU LỊCH</div>
                           <div className="ht-describe">
                              Có trong tay mẹo hay không lo du lịch không thuận
                              lợi vui vẻ
                           </div>
                        </div>
                     </div>
                     <div className="content d-flex ht-posts-container"></div>
                     <Pagination
                        className="ht-d-flex-center-center mb-5"
                        total={85}
                        showTotal={(total, range) =>
                           `${range[0]}-${range[1]} of ${total} items`
                        }
                        pageSize={20}
                        defaultCurrent={1}
                     />
                  </div>
                  <div className="ht-blog-right col-md-4">
                     <BlogRightContainer
                        listPostNew={listPostNew}
                        listPostViews={listPostViews}
                     />
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
BlogContainer.propTypes = {
   postAllActions: PropTypes.shape({
      fetchPostByIdRequest: PropTypes.func,
      fetchListPostRequest: PropTypes.func,
      votePostdRequest: PropTypes.func
   }),
   listPost: PropTypes.array,
   listPostNew: PropTypes.array,
   listPostViews: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listPost: state.post.listPost,
      listPostNew: state.post.listPostNew,
      listPostViews: state.post.listPostViews
   };
};
const mapDispatchToProps = dispatch => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch)
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
