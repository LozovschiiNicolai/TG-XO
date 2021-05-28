import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import App from "./App";
import LoadingProvider from "./provider/LoadingProvider";

ReactDOM.render(
  <Provider store={store}>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </Provider>,
  document.getElementById("root")
);
