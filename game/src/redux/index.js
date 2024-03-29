import { createStore, compose } from "redux";

import reducer from "./reducer";
import middleware from "./middleware";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancer(middleware));
