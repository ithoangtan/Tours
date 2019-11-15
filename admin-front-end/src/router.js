import React from "react";
import Result403 from "./CONTAINERS/ResultBoard/Result403";
import Result404 from "./CONTAINERS/ResultBoard/Result404";
import Result500 from "./CONTAINERS/ResultBoard/Result500";
import ResultDone from "./CONTAINERS/ResultBoard/ResultDone";
import ResultProcessing from "./CONTAINERS/ResultBoard/ResultProcessing";
import ResultSubmissionFailed from "./CONTAINERS/ResultBoard/ResultSubmissionFailed";
import ResultSuccessful from "./CONTAINERS/ResultBoard/ResultSuccessful";
import ResultWarning from "./CONTAINERS/ResultBoard/ResultWarning";

import IndexPage from "./CONTAINERS/IndexPage/index.page";
import ForgotPasswordPage from "./CONTAINERS/ForgotPassword/forgotPassword.page";
import LoginPage from "./CONTAINERS/LoginPage/login.page";
import RegisterPage from "./CONTAINERS/RegisterPage/registerPage.page";
import TourAdminPage from "./CONTAINERS/Tours/tour.admin";

import All from "./CONTAINERS/App/all";

//test

const router = [
   {
      path: "/",
      exact: true,
      main: () => (
         <div>
            <IndexPage />
         </div>
      )
   },
   {
      path: "/tour",
      exact: true,
      main: () => (
         <div>
            <TourAdminPage />
         </div>
      )
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
      path: "/all",
      exact: true,
      main: () => <All />
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
