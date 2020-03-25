import React from "react";
import Result403 from "./ResultBoardPage/Result403";
import Result404 from "./ResultBoardPage/Result404";
import Result500 from "./ResultBoardPage/Result500";
import ResultDone from "./ResultBoardPage/ResultDone";
import ResultProcessing from "./ResultBoardPage/ResultProcessing";
import ResultSubmissionFailed from "./ResultBoardPage/ResultSubmissionFailed";
import ResultSuccessful from "./ResultBoardPage/ResultSuccessful";
import ResultSuccessfulPayment from "./ResultBoardPage/ResultSuccessfulPayment";
import ResultSuccessfulVerify from "./ResultBoardPage/ResultSuccessfulVerify";
import ResultWarning from "./ResultBoardPage/ResultWarning";
import NavigationContainer from "./_components/Header/navigation.container";
import HeaderBreadcrumbContainer from "./_components/Header/headerBreadcrumb.container";

import IndexPage from "./IndexPage/index.page";
import AboutPage from "./AboutPage/about.container";
import BlogPage from "./BlogPage/blog.container";
import BlogCategoryPage from "./BlogPage/blogCategory.container";
import BlogSinglePage from "./BlogSinglePage/blogSingle.page";
import TourSinglePage from "./TourSinglePage/tourSingle.page";
import TourBestPage from "./TourPage/tourBest.page";
import TourPage from "./TourPage/tour.page";
import LoginPage from "./LoginAndRegisterPage/login.page";
import RegisterPage from "./LoginAndRegisterPage/register.page";
import ForgotPasswordPage from "./LoginAndRegisterPage/forgotPassword.page";
import ForgotPasswordPageStep2 from "./LoginAndRegisterPage/forgotPasswordStep2.page";
import BookTourPage from "./BookTourPage/bookTour.page";

//common Customer
import FooterContainer from "./_components/Footer/footer.container";
import Loaded from "./App/loaded";
import BackToTop from "./App/backTop";

//test
import All from "./App/all";

const router = [
   //for customer
   {
      path: "/",
      exact: true,
      component: props => (
         <>
            <NavigationContainer {...props} />
            <IndexPage {...props} />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/login",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <LoginPage />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/register",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <RegisterPage />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/forgot-password",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <ForgotPasswordPage />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/forgotPassword",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <ForgotPasswordPageStep2 />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/verify",
      exact: true,
      component: ({ match }, props) => (
         <>
            <NavigationContainer />
            <ResultSuccessfulVerify match={match} {...props} />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/tour",
      exact: true,
      component: ({ match }, props) => (
         <>
            <NavigationContainer {...props} />
            <HeaderBreadcrumbContainer {...props} />
            <TourPage match={match} {...props} />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/tour/search/:keySearch/:dayStart/:dayEnd/:conditional",
      exact: true,
      component: ({ match }, props) => (
         <>
            <NavigationContainer {...props} />
            <HeaderBreadcrumbContainer {...props} />
            <TourPage match={match} {...props} />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/book-tour/:idTour",
      exact: true,
      component: (match, props) => (
         <>
            <NavigationContainer match={match} {...props} />
            <HeaderBreadcrumbContainer match={match} {...props} />
            <BookTourPage match={match} {...props} />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/tour-best",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <HeaderBreadcrumbContainer />
            <TourBestPage />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/tour-single/:idTour",
      exact: true,
      component: ({ match }, props) => (
         <>
            <NavigationContainer {...props} />
            <HeaderBreadcrumbContainer {...props} />
            <TourSinglePage match={match} {...props} />
            <FooterContainer />
            <BackToTop />
         </>
      )
   },
   {
      path: "/about",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <HeaderBreadcrumbContainer />
            <AboutPage />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },

   {
      path: "/blog",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <HeaderBreadcrumbContainer />
            <BlogPage />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },

   {
      path: "/blog-category",
      exact: true,
      component: () => (
         <>
            <NavigationContainer />
            <HeaderBreadcrumbContainer />
            <BlogCategoryPage />
            <FooterContainer />
            <Loaded />
            <BackToTop />
         </>
      )
   },
   {
      path: "/blog-single/:idPost",
      exact: true,
      component: ({ match }, props) => (
         <>
            <NavigationContainer {...props} />
            <HeaderBreadcrumbContainer {...props} />
            <BlogSinglePage match={match} {...props} />
            <FooterContainer />
            <BackToTop />
         </>
      )
   },
   //end for customer

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
      path: "/successfulResult",
      exact: true,
      component: ({ match }, props) => (
         <ResultSuccessfulPayment match={match} {...props} />
      )
   },
   {
      path: "/warningResult",
      exact: true,
      component: () => (
         <ResultWarning status="warning" title="Warning something!" />
      )
   },
   {
      path: "/all",
      exact: true,
      component: () => <All />
   },
   {
      path: "/",
      exact: false,
      component: () => <Result404 />
   }
];
export default router;
