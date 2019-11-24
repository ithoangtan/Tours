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

import ScheduleDetailPage from "./CONTAINERS/Schedule/ScheduleDetail/scheduleDetail.page";

import All from "./CONTAINERS/App/all";
import TestPage from "./CONTAINERS/App/test";

//test

const router = [
   {
      path: "/all",
      exact: true,
      main: () => <All />
   },
   {
      path: "/test",
      exact: true,
      main: () => <TestPage />
   },
   {
      path: "/",
      exact: true,
      main: () => <IndexPage />
   },
   {
      path: "/tour",
      exact: true,
      main: () => <TourAdminPage />
   },
   {
      path: "/schedule-detail",
      exact: true,
      main: () => <ScheduleDetailPage />
   },
   {
      path: "/forgot-password",
      exact: true,
      main: () => <ForgotPasswordPage />
   },
   {
      path: "/login",
      exact: true,
      main: () => <LoginPage />
   },
   {
      path: "/register",
      exact: true,
      main: () => <RegisterPage />
   },

   {
      path: "/notAuthorized",
      exact: true,
      main: () => <Result403 />
   },

   {
      path: "/serverIsWrong",
      exact: true,
      main: () => <Result500 />
   },
   {
      path: "/doneResult",
      exact: true,
      main: () => <ResultDone />
   },
   {
      path: "/processingResult",
      exact: true,
      main: () => <ResultProcessing />
   },
   {
      path: "/complexError",
      exact: true,
      main: () => <ResultSubmissionFailed />
   },
   {
      path: "/successfulResult",
      exact: true,
      main: () => <ResultSuccessful />
   },
   {
      path: "/warningResult",
      exact: true,
      main: () => <ResultWarning />
   },
   {
      path: "/",
      exact: false,
      main: () => <Result404 />
   }
];
export default router;
