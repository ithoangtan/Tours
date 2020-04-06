import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tag, Tabs } from "antd";
import moment from "moment";
import * as INDEX_CONSTANTS from "../_constants/index.constants";

const { TabPane } = Tabs;

export default class BlogRightContainer extends Component {
   render() {
      const { listPostNew, listPostViews, postTags } = this.props;
      return (
         <>
            <Tabs defaultActiveKey="1">
               <TabPane tab="Đọc nhiều" key="1">
                  <div className="ht-reads">
                     {listPostViews &&
                        listPostViews.map((post, index) => {
                           const postDate = post.dateEdited
                              ? post.dateEdited
                              : post.dateAdded;
                           return (
                              <Link to={`blog-single/${post.idPost}`}>
                                 <div className="ht-item-post-mini" key={index}>
                                    <img
                                       src="/images/blog-4.jpg"
                                       alt="not found"
                                    />
                                    <div className="ht-item-post-mini-info">
                                       <div className="ht-title">
                                          {post.titlePost}
                                       </div>
                                       <div className="ht-date-view-vote">
                                          <div className="ht-date">
                                             {moment(postDate).format(
                                                INDEX_CONSTANTS.DATE_TIME_FORMAT
                                                   .DATE_MONTH_YEAR
                                             )}
                                          </div>
                                          <div className="ht-view-vote">
                                             <i className="far fa-eye"></i>{" "}
                                             {post.views} {`    `}
                                             <i className="far fa-star"></i>
                                             {` `}
                                             {post.vote}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </Link>
                           );
                        })}
                  </div>
               </TabPane>
               <TabPane tab="Bài mới" key="2">
                  <div className="ht-new">
                     {listPostNew &&
                        listPostNew.map((post, index) => {
                           const postDate = post.dateEdited
                              ? post.dateEdited
                              : post.dateAdded;
                           return (
                              <div className="ht-item-post-mini" key={index}>
                                 <img
                                    src="/images/blog-4.jpg"
                                    alt="not found"
                                 />
                                 <div className="ht-item-post-mini-info">
                                    <div className="ht-title">
                                       {post.titlePost}
                                    </div>
                                    <div className="ht-date-view-vote">
                                       <div className="ht-date">
                                          {moment(postDate).format(
                                             INDEX_CONSTANTS.DATE_TIME_FORMAT
                                                .DATE_MONTH_YEAR
                                          )}
                                       </div>
                                       <div className="ht-view-vote">
                                          <i className="far fa-eye"></i>{" "}
                                          {post.views} {`    `}
                                          <i className="far fa-star"></i>
                                          {` `}
                                          {post.vote}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                  </div>
               </TabPane>
            </Tabs>
            <div className="ht-themes f-flex">
               <div className="ht-title-mini ht-width-100 mt-3 mb-1">
                  Bạn quan tâm đến chủ đề gì?
               </div>
               {postTags &&
                  postTags.map((tag, index) => (
                     <Tag
                        key={index}
                        color={INDEX_CONSTANTS.COLOR_TAG_BLOG[index]}
                        style={{
                           color: "black",
                           border: "1px solid rgba(0, 0, 0, 0.3)",
                           padding: "3px 6px",
                           borderRadius: "3px"
                        }}
                     >
                        {"#"}
                        {tag}
                     </Tag>
                  ))}
            </div>
         </>
      );
   }
}

BlogRightContainer.propTypes = {
   listPostNew: PropTypes.array,
   listPostViews: PropTypes.array,
   postTags: PropTypes.array
};
