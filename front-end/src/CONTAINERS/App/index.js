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
import SubcribeContainer from "../Footer/subcribe.container";
import FooterContainer from "../Footer/footer.container";
import BackToTop from "../App/backTop";

import * as INDEX_CONSTANTS from "../../constants/index.constants";
import funcLoadJs from "../../constants/loadJs.constants";

const store = configStore();

class App extends Component {
   scriptLoaded() {
      // window.sort();
   }

   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.ArrayExternalScript);
   }
   render() {
      return (
         <Router>
            <Provider store={store}>
               {this.showContent(routes)}
               <SubcribeContainer />
               <FooterContainer />
               <Loaded />
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
