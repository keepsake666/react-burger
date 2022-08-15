import {
  GET_REGISTRATION_FAILED,
  GET_REGISTRATION_REQUEST,
  GET_REGISTRATION_SUCCESS,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_REQUEST,
  GET_LOGIN_FAILED,
} from "../action/authorization";

const initialState = {
  authorizationFailed: false,
  authorizationRequest: false,
  logInFailed: false,
  logInRequest: false,
  isAuthenticated: false,
  user: {},
  token: "",
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTRATION_REQUEST: {
      return {
        ...state,
        authorizationFailed: false,
        authorizationRequest: true,
      };
    }
    case GET_REGISTRATION_SUCCESS: {
      return {
        ...state,
        authorizationRequest: false,
        authorizationFailed: false,
        token: action.payload.accessToken,
        user: action.payload.user,
        isAuthenticated: true
      };
    }
    case GET_REGISTRATION_FAILED: {
      return {
        ...state,
        authorizationRequest: false,
        authorizationFailed: true,
      };
    }
    case GET_LOGIN_REQUEST: {
      return {
        ...state,
        logInFailed: false,
        logInRequest: true,
      };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        logInRequest: false,
        logInFailed: false,
        token: action.payload.accessToken,
        user: action.payload.user,
        isAuthenticated: true
      };
    }
    case GET_LOGIN_FAILED: {
      return {
        ...state,
        logInRequest: false,
        logInFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
