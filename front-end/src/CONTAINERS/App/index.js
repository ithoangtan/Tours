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
import FooterPage from "../Footer/footer.page";
import SendMailPage from "../Footer/sendMail.page";
import NavigationBlockPage from "../Header/navigationBlock.page";

const store = configStore();

class App extends Component {
   render() {
      return (
         <Router>
            <Provider store={store}>
               <NavigationBlockPage />
               {this.showContent(routes)}
               <SendMailPage />
               <FooterPage />
               <ToastContainer autoColse={3000} />
               <script src="./js/jquery.min.js"></script>
               <script src="./js/jquery-migrate-3.0.1.min.js"></script>
               <script src="./js/jquery.animateNumber.min.js"></script>
               <script src="./js/jquery.easing.1.3.js"></script>
               <script src="./js/jquery.magnific-popup.min.js"></script>
               <script src="./js/jquery.stellar.min.js"></script>
               <script src="./js/jquery.waypoints.min.js"></script>
               <script src="./js/popper.min.js"></script>

               <script src="./js/aos.js"></script>
               <script src="./js/bootstrap-datepicker.js"></script>
               <script src="./js/bootstrap.min.js"></script>
               <script src="./js/google-map.js"></script>

               <script src="./js/main.js"></script>
               <script src="./js/owl.carousel.min.js"></script>
               <script src="./js/popper.min.js"></script>
               <script src="./js/range.js"></script>
               <script src="./js/scrollax.min.js"></script>
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
