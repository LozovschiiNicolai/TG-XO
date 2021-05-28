// @flow

const GET_URL_PARAMS = "GET_URL_PARAMS";
const ADD_ROLE = "ADD_ROLE";
const WIN_RESULT = "WIN_RESULT";
const REPEAT_ROUND = "REPEAT_ROUND";
const CHANGE_LOADER = "CHANGE_LOADER";
const STATUS_LOADER = "STATUS_LOADER";

export type Action =
  | { type: typeof GET_URL_PARAMS, payload: Object }
  | { type: typeof ADD_ROLE, payload: Object }
  | { type: typeof WIN_RESULT }
  | { type: typeof REPEAT_ROUND }
  | { type: typeof CHANGE_LOADER, payload: String }
  | { type: typeof STATUS_LOADER, payload: boolean };

export type State = {
  token: String,
  user: String,
  role: String,
  repeatRound: boolean,
  gameScore: Object,
  loader: String,
  statusLoader: boolean
};

const initialState: State = {
  token: "",
  user: "",
  role: "",
  repeatRound: false,
  loader: "Загрузка",
  statusLoader: false
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

    case CHANGE_LOADER: {
      return {
        ...state,
        loader: action.payload
      };
    }
    case STATUS_LOADER: {
      return {
        ...state,
        statusLoader: action.payload
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

export const changeLoaderAction = (payload: String): Action => ({
  type: CHANGE_LOADER,
  payload
});

export const statusLoaderAction = (payload: boolean): Action => ({
  type: STATUS_LOADER,
  payload
});
