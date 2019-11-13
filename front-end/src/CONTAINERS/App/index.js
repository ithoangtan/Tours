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

const arrayExternalScript = [
   "/js/jquery.min.js",
   "/js/jquery-migrate-3.0.1.min.js",
   "/js/popper.min.js",
   "/js/bootstrap.min.js",
   "/js/jquery.easing.1.3.js",
   "/js/jquery.waypoints.min.js",
   "/js/jquery.stellar.min.js",
   "/js/owl.carousel.min.js",
   "/js/jquery.magnific-popup.min.js",
   "/js/aos.js",
   "/js/jquery.animateNumber.min.js",
   "/js/bootstrap-datepicker.js",
   "/js/scrollax.min.js",
   "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false",
   "/js/google-map.js",
   "/js/main.js"
];

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
               <SubcribeContainer />
               <FooterContainer />
               <Loaded />
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
