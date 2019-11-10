import React, { Component } from "react";

import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "../../router";
import configStore from "../../redux/configStore.redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "antd/dist/antd.less";

const store = configStore();

class App extends Component {
   render() {
      return (
         <Router>
            <Provider store={store}>
               {this.showContent(routes)}
               <ToastContainer autoColse={3000} />
            </Provider>
         </Router>
      );
   }
   showContent = routes => {
      var resultPage = null;
      if (routes.length > 0) {
         resultPage = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
               />
            );
         });
         return <Switch>{resultPage}</Switch>;
      }
   };
}

export default App;
