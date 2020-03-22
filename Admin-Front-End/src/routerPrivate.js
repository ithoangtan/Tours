import React from "react";

//Admin
import AdminIndexPage from "./AdminIndex/Index.Page";
import AdminTourPage from "./AdminTour/Tour.Page";
import AdminTourScheduleDetailPage from "./AdminTourSchedule/ScheduleDetail.Page";
import AdminTourTagPsage from "./AdminTourTags/TourTagAndService.Page";
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
   }
];
export default routerPrivate;
