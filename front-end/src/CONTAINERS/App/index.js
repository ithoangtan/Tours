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
import HeaderContainer from "../Header/header.container";
import FooterContainer from "../Footer/footer.container";

const store = configStore();

const arrayScript = [
   "/js/jquery-1.12.1.min.js",
   "/js/popper.min.js",
   "/js/bootstrap.min.js",
   "/js/jquery.magnific-popup.js",
   "/js/owl.carousel.min.js",
   "/js/masonry.pkgd.js",
   "/js/jquery.nice-select.min.js",
   "/js/gijgo.min.js",
   "/js/jquery.ajaxchimp.min.js",
   "/js/jquery.form.js",
   "/js/jquery.validate.min.js",
   "/js/mail-script.js",
   "/js/contact.js",
   "/js/custom.js"
];

class App extends Component {
   scriptLoaded() {
      // window.sort();
   }

   componentDidMount() {
      arrayScript.forEach(item => {
         const script = document.createElement("script");
         script.src = item;
         script.async = true;
         script.onload = () => this.scriptLoaded();
         document.body.appendChild(script);
      });
   }
   render() {
      return (
         <Router>
            <Provider store={store}>
               <HeaderContainer />
               {this.showContent(routes)}
               <FooterContainer />
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
