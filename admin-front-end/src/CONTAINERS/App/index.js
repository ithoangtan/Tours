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

const arrayExternalScript = [
   "./vendor/jquery/jquery.min.js",
   "./vendor/bootstrap/js/bootstrap.bundle.min.js",
   "./vendor/jquery-easing/jquery.easing.min.js",
   "./js/sb-admin-2.min.js",
   "./vendor/chart.js/Chart.min.js",
   "./js/demo/chart-area-demo.js",
   "./js/demo/chart-pie-demo.js"
];

const store = configStore();

class App extends Component {
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
                  // render={props => route.main(props)}
                  component={route.main}
               />
            );
         });
         return <Switch>{resultPage}</Switch>;
      }
   };
}

export default App;
