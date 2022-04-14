import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import history from "./utills/history";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Route history={history}>
        <App />
      </Route>
    </Provider>
  </>,
  document.getElementById("root")
);
