import React from "react";

//Admin
import AdminIndexPage from "./AdminIndex/Index.Page";
import AdminForgotPasswordPage from "./AdminForgotPassword/ForgotPassword.Page";
import AdminTourPage from "./AdminTour/Tour.Page";
import AdminScheduleDetailPage from "./AdminSchedule/ScheduleDetail.Page";
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
      path: "/admin/schedule-detail/:idTour",
      exact: true,
      component: (match, props) => (
         <AdminScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/forgot-password",
      exact: true,
      component: match => <AdminForgotPasswordPage match={match} />
   }
];
export default routerPrivate;
