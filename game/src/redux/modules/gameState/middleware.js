import { getGameStateAction } from "../gameState";
import { winResultAction } from "../appState/";
import { useApiParams } from "../../../services/mongoService";
import { winResult } from "../../../services/winResult";
import { repeatRoundAction } from "../appState";
const gameStateMiddleware = store => next => action => {
  switch (action.type) {
    case "START_GAME": {
      const { getGameData } = useApiParams();
      const token = action.payload;
      setInterval(() => {
        getGameData({ token }).then(res => {
          const { gameState } = store.getState();
          if (res && JSON.stringify(res.data) !== JSON.stringify(gameState)) {
            if (res) {
              store.dispatch(getGameStateAction(res));
              let win = winResult(res.data.field);
              win && store.dispatch(winResultAction(win));
            }
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
      const { repeatRound, winResult } = store.getState().app;
      const { data } = action.payload;
      const newRound = Object.values(data.field).every(
        val => val.toString() === "false"
      );

      if (newRound && repeatRound && winResult) {
        store.dispatch(winResultAction(false));
        store.dispatch(repeatRoundAction(false));
      }

      break;
    }
    default:
  }

  next(action);
};

export default gameStateMiddleware;
