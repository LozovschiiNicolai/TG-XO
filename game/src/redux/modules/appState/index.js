// @flow

const GET_URL_PARAMS = "GET_URL_PARAMS";
const ADD_ROLE = "ADD_ROLE";
const WIN_RESULT = "WIN_RESULT";
const REPEAT_ROUND = "REPEAT_ROUND";
const SET_SIZE = "SET_SIZE";

export type Action =
  | { type: typeof GET_URL_PARAMS, payload: Object }
  | { type: typeof ADD_ROLE, payload: Object }
  | { type: typeof WIN_RESULT }
  | { type: typeof REPEAT_ROUND }
  | { type: typeof SET_SIZE, payload: Object };

export type State = {
  token: String,
  user: String,
  role: String,
  repeatRound: boolean,
  size: Object,
  gameScore: Object
};

const initialState: State = {
  token: "",
  user: "",
  role: "",
  repeatRound: false,
  size: {}
};

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case GET_URL_PARAMS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    }
    case ADD_ROLE: {
      return {
        ...state,
        role: action.payload
      };
    }
    case REPEAT_ROUND: {
      return {
        ...state,
        repeatRound: action.payload
      };
    }
    case SET_SIZE: {
      return {
        ...state,
        size: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getUrlParamsAction = (payload: Object): Action => ({
  type: GET_URL_PARAMS,
  payload
});

export const addRoleAction = (payload: String): Action => ({
  type: ADD_ROLE,
  payload
});

export const repeatRoundAction = (payload: boolean): Action => ({
  type: REPEAT_ROUND,
  payload
});

export const setSizeAction = (payload: Object): Action => ({
  type: SET_SIZE,
  payload
});
