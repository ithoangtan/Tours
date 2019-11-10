import React from "react";
import TourBoard from "./CONTAINERS/Tourboard/index.tourBoard";

const router = [
   {
      path: "/",
      exact: false,
      main: () => <TourBoard />
   }
   // {
   //   path: "/Products",
   //   exact: false,
   //   main: () => <Products />
   // }
];
export default router;
