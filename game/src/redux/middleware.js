// @flow

import { applyMiddleware } from "redux";

import thunk from "redux-thunk";

import appMiddleware from "./modules/appState/middleware";
import gameStateMiddleware from "./modules/gameState/middleware";

const middleware = [thunk, appMiddleware, gameStateMiddleware];

export default applyMiddleware(...middleware);
