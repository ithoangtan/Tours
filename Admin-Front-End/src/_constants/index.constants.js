import React from "react";
import { Spin } from "antd";

require("dotenv").config();
// export const API_ENDPOINT =
//    "http://ec2-3-1-103-217.ap-southeast-1.compute.amazonaws.com:8000";
// export const API_ENDPOINT = process.env.API_ENDPOINT;
// export const API_ENDPOINT = "http://localhost:8000";
// export const API_ENDPOINT = "https://api-kinhdoanhtourdulich.herokuapp.com";
export const API_ENDPOINT = "https://ithoangtan.online";

export const AdminArrayExternalScript = [
   "/admin/vendor/jquery/jquery.min.js",
   // "/admin/vendor/bootstrap/js/bootstrap.bundle.min.js",
   // "/admin/vendor/jquery-easing/jquery.easing.min.js",
   // "/admin/js/sb-admin-2.min.js",
];

// export const LinkUserPage =
// "http://ec2-3-1-103-217.ap-southeast-1.compute.amazonaws.com:8000";
// export const LinkUserPage = process.env.LinkUserPage;
export const LinkUserPage = "https://kinhdoanhtourdulich.herokuapp.com";

export const MULTIPLIER_ID_TIMELINE = 10;

export const DEFAULT_IMAGE_URL = "/img/imgdefault.gif";

export const CONFIG_INFO_TYPE_AUTHOR_POST = "AuthorInfo";

export const XHTML_LOADING = (
   <div
      className="container col-md-12 ht-d-flex-col-center-center"
      style={{ width: "100%", height: "20vh" }}
   >
      <Spin tip="Loading..." />
   </div>
);
