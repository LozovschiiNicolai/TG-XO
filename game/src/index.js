import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import App from "./App";
import LoadingProvider from "./provider/LoadingProvider";
import OrientationProvider from "./provider/OrientationProvider";

ReactDOM.render(
  <Provider store={store}>
    <LoadingProvider>
      <OrientationProvider>
        <App />
      </OrientationProvider>
    </LoadingProvider>
  </Provider>,
  document.getElementById("root")
);
