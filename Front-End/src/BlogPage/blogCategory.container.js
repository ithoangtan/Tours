import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as postActions from "../_actions/post.actions";

import { Tag, Tooltip, Pagination, Typography } from "antd";
import moment from "moment";
import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";
import BlogRightContainer from "./blogRight.container";
import BlogNavigationContainer from "./blogNavigation.container";
const { Title } = Typography;

class BlogCategoryContainer extends Component {
   fetch = async () => {
      const data = this.props.match.params;
      const { postAllActions, listPost } = this.props;
      const {
         fetchListPostSearchRequest,
         fetchListPostRequest
      } = postAllActions;
      if (data.keySearch !== null && data.keySearch !== undefined) {
         await fetchListPostSearchRequest(data);
      }
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

   render() {
      const { listPostSearch, listPostNew, listPostViews } = this.props;
      return (
         <section className="ftco-section mt-2">
            <div className="container">
               <BlogNavigationContainer />{" "}
               <div className="row ht-blog-container-2">
                  <div className="ht-blog-left col-md-8">
                     <div className="title mb-2 ftco-section">
                        <div className="ht-blog-title">
                           {/* <div className="ht-title">{`category name`}</div>
                           <div className="ht-describe">
                              Miêu tả gì đó ở đây này, hahahahaha. bao nhiêu Kết
                              quả được tìm kiếm chẳng hạn
                           </div> */}
                        </div>
                     </div>
                     <div className="content d-flex flex-wrap">
                        {listPostSearch &&
                           listPostSearch.map((post, index) => {
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
                                             <Link
                                                to={`blog-single/${post.idPost}`}
                                             >
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
                     {listPostSearch && listPostSearch.length > 0 ? (
                        <Pagination
                           className="ht-d-flex-center-center mb-5"
                           total={85}
                           showTotal={(total, range) =>
                              `${range[0]}-${range[1]} of ${total} items`
                           }
                           pageSize={20}
                           defaultCurrent={1}
                        />
                     ) : (
                        <div className="ht-khong-tim-thay-du-lieu">
                           <Title level={3}> Chưa có dữ liệu phù hợp</Title>
                        </div>
                     )}
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
BlogCategoryContainer.propTypes = {
   postAllActions: PropTypes.shape({
      fetchListPostSearchRequest: PropTypes.func
   }),
   listPost: PropTypes.array,
   listPostSearch: PropTypes.array,
   listPostNew: PropTypes.array,
   listPostViews: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listPost: state.post.listPost,
      listPostSearch: state.post.listPostSearch,
      listPostNew: state.post.listPostNew,
      listPostViews: state.post.listPostViews
   };
};
const mapDispatchToProps = dispatch => {
   return {
      postAllActions: bindActionCreators(postActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(BlogCategoryContainer);
