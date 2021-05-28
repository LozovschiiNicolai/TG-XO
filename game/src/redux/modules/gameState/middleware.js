import { getGameStateAction } from "../gameState";
import { useApiParams } from "../../../services/mongoService";
import {
  repeatRoundAction,
  changeLoaderAction,
  statusLoaderAction
} from "../appState";
import { mapGetGameData } from "../../../services/mapGetGameData";

const gameStateMiddleware = store => next => action => {
  switch (action.type) {
    case "START_GAME": {
      const { getGameData } = useApiParams();
      const token = action.payload;
      setInterval(() => {
        const { gameState } = store.getState();
        getGameData({ token }).then(res => {
          if (
            res &&
            JSON.stringify(mapGetGameData(res)) !== JSON.stringify(gameState)
          ) {
            store.dispatch(getGameStateAction(res));
          }
        });
      }, 1000);
      break;
    }
    case "MAKE_MOVE": {
      const { token } = store.getState().app;
      const { postMoveData } = useApiParams();
      const { newMove, field, role, moveRole } = action.payload;
      const newField = Object.assign({}, field);
      newField[newMove] = role === "master" ? "x" : "y";
      const newMoveRole = moveRole === "master" ? "guest" : "master";
      postMoveData({
        data: { field: newField, moveRole: newMoveRole },
        token
      });
      break;
    }
    case "GET_GAME_STATE": {
      const { repeatRound, loader } = store.getState().app;
      const { data, gameScore } = action.payload;
      const newRound =
        data &&
        Object.values(data.field).every(val => val.toString() === "false");

      if (newRound && repeatRound) {
        store.dispatch(repeatRoundAction(false));
        store.dispatch(statusLoaderAction(true));
        setTimeout(() => {
          store.dispatch(statusLoaderAction(false));
        }, 2000);
      }
      if (loader.length) {
        if (gameScore.master && !gameScore.guest) {
          store.dispatch(changeLoaderAction("Ожидание соперника"));
        } else if (gameScore.master && gameScore.guest) {
          store.dispatch(changeLoaderAction(""));
        }
      }
      break;
    }
    default:
  }

  next(action);
};

export default gameStateMiddleware;
