import React, { Component } from "react";
//lib package.json
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "../../router";
import configStore from "../../redux/configStore.redux";

//Third lib
import { ToastContainer } from "react-toastify";

//style
import "react-toastify/dist/ReactToastify.min.css";
import "antd/dist/antd.less";

//import components:
import Loaded from "./loaded";
import BackToTop from "../App/backTop";

const arrayExternalScript = ["/js/jquery.min.js"];

const store = configStore();

class App extends Component {
   scriptLoaded() {
      // window.sort();
   }

   componentDidMount() {
      arrayExternalScript.forEach(item => {
         const script = document.createElement("script");
         script.src = item;
         script.async = true;
         document.body.appendChild(script);
      });
   }
   render() {
      return (
         <Router>
            <Provider store={store}>
               {this.showContent(routes)}
               {/* <Loaded /> */}
               <BackToTop />
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
