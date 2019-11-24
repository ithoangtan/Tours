import React from "react";
import Result403 from "./CONTAINERS/ResultBoard/Result403";
import Result404 from "./CONTAINERS/ResultBoard/Result404";
import Result500 from "./CONTAINERS/ResultBoard/Result500";
import ResultDone from "./CONTAINERS/ResultBoard/ResultDone";
import ResultProcessing from "./CONTAINERS/ResultBoard/ResultProcessing";
import ResultSubmissionFailed from "./CONTAINERS/ResultBoard/ResultSubmissionFailed";
import ResultSuccessful from "./CONTAINERS/ResultBoard/ResultSuccessful";
import ResultWarning from "./CONTAINERS/ResultBoard/ResultWarning";

import IndexPage from "./CONTAINERS/Index/Index.Page";
import ForgotPasswordPage from "./CONTAINERS/ForgotPassword/ForgotPassword.Page";
import LoginPage from "./CONTAINERS/Login/Login.Page";
import RegisterPage from "./CONTAINERS/Register/RegisterPage.Page";
import TourAdminPage from "./CONTAINERS/Tour/Tour.Page";

import ScheduleDetailPage from "./CONTAINERS/Schedule/ScheduleDetail.page";

import All from "./CONTAINERS/App/all";
import TestPage from "./CONTAINERS/App/test";

//test

const router = [
   {
      path: "/all",
      exact: true,
      main: ({ match }) => <All match={match} />
   },
   {
      path: "/test",
      exact: true,
      main: ({ match }) => <TestPage match={match} />
   },
   {
      path: "/",
      exact: true,
      main: ({ match }) => <IndexPage match={match} />
   },
   {
      path: "/tour",
      exact: true,
      main: ({ match }, props) => <TourAdminPage match={match} {...props} />
   },
   {
      path: "/schedule-detail",
      exact: true,
      main: ({ match }, props) => (
         <ScheduleDetailPage match={match} {...props} />
      )
   },
   {
      path: "/forgot-password",
      exact: true,
      main: ({ match }) => <ForgotPasswordPage match={match} />
   },
   {
      path: "/login",
      exact: true,
      main: ({ match }) => <LoginPage match={match} />
   },
   {
      path: "/register",
      exact: true,
      main: ({ match }) => <RegisterPage match={match} />
   },

   {
      path: "/notAuthorized",
      exact: true,
      main: ({ match }) => <Result403 match={match} />
   },

   {
      path: "/serverIsWrong",
      exact: true,
      main: ({ match }) => <Result500 match={match} />
   },
   {
      path: "/doneResult",
      exact: true,
      main: ({ match }) => <ResultDone match={match} />
   },
   {
      path: "/processingResult",
      exact: true,
      main: ({ match }) => <ResultProcessing match={match} />
   },
   {
      path: "/complexError",
      exact: true,
      main: ({ match }) => <ResultSubmissionFailed match={match} />
   },
   {
      path: "/successfulResult",
      exact: true,
      main: ({ match }) => <ResultSuccessful match={match} />
   },
   {
      path: "/warningResult",
      exact: true,
      main: ({ match }) => <ResultWarning match={match} />
   },
   {
      path: "/",
      exact: false,
      main: ({ match }) => <Result404 match={match} />
   }
];
export default router;
