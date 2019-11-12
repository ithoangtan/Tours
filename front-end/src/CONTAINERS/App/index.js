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
import HeaderPage from "../Header/header.page";
import FooterPage from "../Footer/footer.page";
import SendMailPage from "../Footer/sendMail.page";
import NavigationBlockPage from "../Header/navigationBlock.page";
import NavigationFixedPage from "../Header/navigationFixed.page";
import AllPageIndex from "../../components/All/all";
import NavigationHeaderPage from "../Header/navigationHeader.page";
import SeatchEnginePage from "../SearchEngine/seatchEngine.page";

const store = configStore();

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <HeaderPage />
          <NavigationBlockPage />
          <NavigationFixedPage />
          <SeatchEnginePage />
          {this.showContent(routes)}
          <SendMailPage />
          <FooterPage />
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
