// @flow

const START_GAME = "START_GAME";
const GET_GAME_STATE = "GET_GAME_STATE";
const MAKE_MOVE = "MAKE_MOVE";

export type Action =
  | { type: typeof START_GAME }
  | { type: typeof GET_GAME_STATE }
  | { type: typeof MAKE_MOVE };

export type State = {
  data: Object,
  moveRole: String,
  gameScore: Object,
  winResult: Object
};

const initialState: State = {
  field: {},
  moveRole: "master",
  gameScore: {},
  winResult: {
    winStatus: false,
    res: "",
    combination: 0
  }
};

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case GET_GAME_STATE: {
      return {
        ...state,
        field: action.payload.data.field,
        moveRole: action.payload.data.moveRole,
        gameScore: action.payload.gameScore,
        winResult: action.payload.winResult
      };
    }

    default: {
      return state;
    }
  }
}

export const startGameAction = (payload: String): Action => ({
  type: START_GAME,
  payload
});

export const getGameStateAction = (payload: Object): Action => ({
  type: GET_GAME_STATE,
  payload
});

export const makeMoveAction = (payload: Object): Action => ({
  type: MAKE_MOVE,
  payload
});
