import { combineReducers } from "redux";

import app from "./modules/appState";
import gameState from "./modules/gameState";

export default combineReducers({
  app,
  gameState
});
