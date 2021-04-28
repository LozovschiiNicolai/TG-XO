// @flow

const GET_URL_PARAMS = "GET_URL_PARAMS";
const ADD_ROLE = "ADD_ROLE";

export type Action =
  | { type: typeof GET_URL_PARAMS, payload: Object }
  | { type: typeof ADD_ROLE, payload: Object };

export type State = {
  token: String,
  user: number,
  role: String
};

const initialState: State = {
  token: "",
  user: 0,
  role: ""
};

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case GET_URL_PARAMS: {
      return {
        ...state,
        token: action.payload.start,
        user: action.payload.userId
      };
    }
    case ADD_ROLE: {
      return {
        ...state,
        role: action.payload.role
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

export const addRoleAction = (payload: Object): Action => ({
  type: ADD_ROLE,
  payload
});
