import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import "./index.css";
import App from "./App";
import LoadingProvider from "./provider/LoadingProvider";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
