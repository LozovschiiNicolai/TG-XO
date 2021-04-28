import { startGameAction } from "../gameState";
import { addRoleAction } from "./index";
import { useApiParams } from "../../../services/mongoService";

const appMiddleware = store => next => action => {
  switch (action.type) {
    case "GET_URL_PARAMS": {
      const { start, userId } = action.payload;
      const { postUserData } = useApiParams();

      postUserData({
        token: start,
        user: userId
      }).then(res => {
        res && store.dispatch(addRoleAction(res));
      });
      store.dispatch(startGameAction(start));

      break;
    }

    default:
  }

  next(action);
};

export default appMiddleware;
