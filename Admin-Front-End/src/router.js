import React from "react";

import Result403 from "./ResultBoardPage/Result403";
import Result404 from "./ResultBoardPage/Result404";
import Result500 from "./ResultBoardPage/Result500";
import ResultDone from "./ResultBoardPage/ResultDone";
import ResultProcessing from "./ResultBoardPage/ResultProcessing";
import ResultSubmissionFailed from "./ResultBoardPage/ResultSubmissionFailed";
import ResultSuccessful from "./ResultBoardPage/ResultSuccessful";
import ResultWarning from "./ResultBoardPage/ResultWarning";

import LoginPage from "./LoginPage/login.page";
import ForgotPasswordPage from "./AdminForgotPassword/ForgotPassword.Page";

const router = [
   {
      path: "/",
      exact: true,
      component: () => <LoginPage />
   },
   {
      path: "/forgot-password",
      exact: true,
      component: ({ match }) => <ForgotPasswordPage match={match} />
   },
   //for  commons
   {
      path: "/notAuthorized",
      exact: true,
      component: () => <Result403 />
   },

   {
      path: "/serverIsWrong",
      exact: true,
      component: () => <Result500 />
   },
   {
      path: "/doneResult",
      exact: true,
      component: () => <ResultDone />
   },
   {
      path: "/processingResult",
      exact: true,
      component: () => <ResultProcessing />
   },
   {
      path: "/complexError",
      exact: true,
      component: () => <ResultSubmissionFailed />
   },
   {
      path: "/successfulResult/:idOrder",
      exact: true,
      component: ({ match }, props) => (
         <ResultSuccessful match={match} {...props} />
      )
   },
   {
      path: "/warningResult",
      exact: true,
      component: () => <ResultWarning />
   },
   {
      path: "/",
      exact: false,
      component: () => <Result404 />
   }
];
export default router;
