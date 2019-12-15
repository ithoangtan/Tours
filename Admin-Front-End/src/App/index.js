import React, { Component } from "react";

import {
   Switch,
   Route,
   BrowserRouter as Router,
   Redirect
} from "react-router-dom";

import routes from "../router";
import routesPrivate from "../routerPrivate";
import { getSignCookie } from "../_commons/auth.service";

//Third lib
import { ToastContainer } from "react-toastify";

//style
import "react-toastify/dist/ReactToastify.min.css";
import "antd/dist/antd.less"; //customize theme

//import components:

class App extends Component {
   render() {
      return (
         <Router>
            {this.showContent(routes, routesPrivate)}
            <ToastContainer autoColse={3000} />
         </Router>
      );
   }

   showContent = (routes, routesPrivate) => {
      var resultPage = null;
      var resultPagePrivate = null;

      if (routes.length > 0) {
         resultPage = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={props => route.component(props)}
               />
            );
         });
      }
      if (routesPrivate.length > 0) {
         resultPagePrivate = routesPrivate.map((routePrivate, index) => {
            return (
               <PrivateRoute
                  key={index + routes.length}
                  path={routePrivate.path}
                  exact={routePrivate.exact}
                  routePrivate={routePrivate}
               />
            );
         });
      }
      return (
         <Switch>
            {resultPagePrivate} {resultPage}
         </Switch>
      );
   };
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ ...rest }) {
   const role = getSignCookie("role");
   return (
      <Route
         {...rest}
         component={({ location, match }, props) => {
            if (role.role === "admin" || role.role === "administrator")
               return rest.routePrivate.component(match, props);
            else
               return (
                  <Redirect
                     to={{
                        pathname: "/login",
                        state: { from: location }
                     }}
                  />
               );
         }}
      />
   );
}
export default App;
