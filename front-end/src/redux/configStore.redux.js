import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./../reducers/index.reducer";
import thunk from "redux-thunk";

const composeEnhancers =
   process.env.NODE_ENV !== "production" &&
   typeof window === "object" &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
      : compose;

const configStore = () => {
   const middlewares = [
      thunk
      //Danh sách các middleware ở đây
   ];
   const enhancers = [applyMiddleware(...middlewares)];
   const store = createStore(rootReducer, composeEnhancers(...enhancers));
   return store;
};

export default configStore;
