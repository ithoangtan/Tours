import React, { Component } from "react";

import { Provider } from "react-redux";
import configStore from "../../redux/configStore.redux";

import Taskboard from "../Taskboard/index.tourBoard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "antd/dist/antd.less";

const store = configStore();

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Taskboard />
            <ToastContainer autoColse={3000} />
         </Provider>
      );
   }
}

export default App;
