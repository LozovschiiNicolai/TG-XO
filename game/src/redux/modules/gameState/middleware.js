import { getGameStateAction } from "./index";
import { useApiParams } from "../../../services/mongoService";

const gameStateMiddleware = store => next => action => {
  switch (action.type) {
    case "START_GAME": {
      const { getGameData } = useApiParams();
      const token = action.payload;
      setInterval(() => {
        getGameData({ token }).then(res => {
          res && store.dispatch(getGameStateAction(res));
        });
      }, 1000);
      break;
    }
    case "GET_GAME_STATE": {
      //const { token } = store.getState().app;
      //const { getGameData } = useApiParams();
      //  getGameData({ token }).then(res => console.log(res));
      break;
    }

    default:
  }

  next(action);
};

export default gameStateMiddleware;
