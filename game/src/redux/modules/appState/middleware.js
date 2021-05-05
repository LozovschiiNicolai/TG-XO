import { startGameAction } from "../gameState";
import { addRoleAction } from "./index";
import { useApiParams } from "../../../services/mongoService";

const appMiddleware = store => next => action => {
  switch (action.type) {
    case "GET_URL_PARAMS": {
      const { token, user } = action.payload;
      const { postUserData } = useApiParams();

      postUserData({
        token: token,
        user: user
      }).then(res => {
        res && store.dispatch(addRoleAction(res));
      });
      store.dispatch(startGameAction(token));

      break;
    }
    case "REPEAT_ROUND": {
      const { token, role } = store.getState().app;
      const { postRepeatRound } = useApiParams();
      postRepeatRound({ token, role });
      break;
    }
    default:
  }

  next(action);
};

export default appMiddleware;
