import React from "react";
import Result403 from "./CONTAINERS/ResultBoard/Result403";
import Result404 from "./CONTAINERS/ResultBoard/Result404";
import Result500 from "./CONTAINERS/ResultBoard/Result500";
import ResultDone from "./CONTAINERS/ResultBoard/ResultDone";
import ResultProcessing from "./CONTAINERS/ResultBoard/ResultProcessing";
import ResultSubmissionFailed from "./CONTAINERS/ResultBoard/ResultSubmissionFailed";
import ResultSuccessful from "./CONTAINERS/ResultBoard/ResultSuccessful";
import ResultWarning from "./CONTAINERS/ResultBoard/ResultWarning";
import NavigationContainer from "./CONTAINERS/Header/navigation.container.";

import IndexPage from "./CONTAINERS/IndexPage/index.page";
import AboutPage from "./CONTAINERS/AboutPage/about.container";
import BlogPage from "./CONTAINERS/BlogPage/blog.container";
import BlogSinglePage from "./CONTAINERS/BlogSinglePage/blogSingle.container";
import ConcactPage from "./CONTAINERS/ContactPage/concact.container";
import DestinationPage from "./CONTAINERS/DestinationPage/destination.container";

import All from "./CONTAINERS/App/all";
import TourPage from "./CONTAINERS/TourPage/tour.container";

const router = [
   {
      path: "/",
      exact: true,
      main: () => (
         <div>
            <NavigationContainer />
            <IndexPage />
         </div>
      )
   },
   {
      path: "/tour",
      exact: true,
      main: () => (
         <div>
            <NavigationContainer />
            <TourPage />
         </div>
      )
   },
   {
      path: "/about",
      exact: true,
      main: () => (
         <div>
            <NavigationContainer />
            <AboutPage />
         </div>
      )
   },
   {
      path: "/concact",
      exact: true,
      main: () => (
         <div>
            <NavigationContainer />
            <ConcactPage />
         </div>
      )
   },
   {
      path: "/destination",
      exact: true,
      main: () => (
         <div>
            <NavigationContainer />
            <DestinationPage />
         </div>
      )
   },
   {
      path: "/blog",
      exact: true,
      main: () => (
         <div>
            <NavigationContainer />
            <BlogPage />
         </div>
      )
   },
   {
      path: "/blog-single",
      exact: true,
      main: () => (
         <div>
            <NavigationContainer />
            <BlogSinglePage />
         </div>
      )
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
