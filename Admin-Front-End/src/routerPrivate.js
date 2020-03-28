import React from "react";

//Admin
import AdminIndexPage from "./AdminIndex/Index.Page";
import AdminTourPage from "./AdminTour/Tour.Page";
import AdminTourTagPsage from "./AdminTourTagAndService/TourTagAndService.Page";
import AdminTourScheduleDetailPage from "./AdminTourSchedule/ScheduleDetail.Page";
import AdminPostPage from "./AdminPost/Post.Page";
import AdminPostContentPage from "./AdminPostContent/PostContent.Page";
import AdminPostAuthorInfo from "./AdminPostAuthorInfo/PostAuthorInfo.Page";
import AdminAccountPage from "./AdminAccount/Account.Page";
import AdminNotificationPage from "./AdminNotifications/Notifications.Page";
import AdminMailsFeedbackPage from "./AdminMailsFeedback/MailsFeedback.Page";
//end Admin

const routerPrivate = [
   //for admin
   {
      path: "/admin",
      exact: true,
      component: (match, props) => <AdminIndexPage match={match} {...props} />
   },
   {
      path: "/admin/tour",
      exact: true,
      component: (match, props) => <AdminTourPage match={match} {...props} />
   },
   {
      path: "/admin/tour/tags-and-services",
      exact: true,
      component: (match, props) => (
         <AdminTourTagPsage match={match} {...props} />
      )
   },
   {
      path: "/admin/schedule-detail/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminTourScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/admin/timeline/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminTourScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/admin/note/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminTourScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/admin/detail-price/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminTourScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/admin/contact/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminTourScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/admin/policy/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminTourScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/admin/timelines/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminTourScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/admin/posts",
      exact: true,
      component: (match, props) => <AdminPostPage match={match} {...props} />
   },
   {
      path: "/admin/post-content/:idPost",
      exact: true,
      component: (match, props) => (
         <AdminPostContentPage match={match} {...props} />
      )
   },
   {
      path: "/admin/author-info",
      exact: true,
      component: (match, props) => (
         <AdminPostAuthorInfo match={match} {...props} />
      )
   },
   {
      path: "/admin/account",
      exact: true,
      component: (match, props) => <AdminAccountPage match={match} {...props} />
   },
   {
      path: "/admin/notifications",
      exact: true,
      component: (match, props) => (
         <AdminNotificationPage match={match} {...props} />
      )
   },
   {
      path: "/admin/mails",
      exact: true,
      component: (match, props) => (
         <AdminMailsFeedbackPage match={match} {...props} />
      )
   }
];
export default routerPrivate;
